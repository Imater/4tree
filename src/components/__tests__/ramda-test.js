import { expect} from 'chai';
import R from 'ramda';
import products from '../../../api/actions/mocks/products';

describe('Ramda', () => {
  it('should items exists', () => {
    return expect(products).to.be.ok;
  });

  it('should Ramda exists', () => {
    return expect(R).to.be.ok;
  });

  it('can multiply', () => {
    return expect(R.multiply(2)(10)).to.equal(20);
  });

  it('can map with addition', () => {
    const addOneToAll = R.map(R.add(1));
    return expect( addOneToAll([1, 2, 3]) ).to.deep.equal([2, 3, 4]);
  });

  it('addIndex - create map function', () => {
    const mapIndexed = R.addIndex(R.map);
    const result = mapIndexed((value, key) => `${key} – ${value}`, [1, 2, 3, 4, 5]);
    return expect(result).to.deep.equal(['0 – 1', '1 – 2', '2 – 3', '3 – 4', '4 – 5']);
  });

  it('adjust - apply function to element in array by index', () => {
    const result = R.adjust(R.add(10), 2, [1, 2, 3, 4, 5]);
    return expect(result).to.deep.equal([1, 2, 13, 4, 5]);
  });

  it('all - if all is true', () => {
    const equalThree = R.flip(R.lte)(3);
    const result = R.all(equalThree)([3, 3, 3]);
    return expect(result).to.equal(true);
  });

  it('allPass - if all predicates is true', () => {
    const isQueen = R.propEq('rank', 'Q');
    const isSpade = R.propEq('suit', 'A');
    const isQueenOfSpades = R.allPass([isQueen, isSpade]);

    expect(isQueenOfSpades({rank: 'Q', suit: 'B'})).to.equal(false);
    expect(isQueenOfSpades({rank: 'Q', suit: 'A'})).to.equal(true);
  });

  it('and + always', () => {
    expect(R.and(true, true)).to.equal(R.always(true)());
  });

  it('ap - applies a list of functions to a list of values', () => {
    expect(R.ap([R.add(1), R.add(10), R.add(100)], [0, 0, 0]))
           .to.deep.equal([1, 1, 1, 10, 10, 10, 100, 100, 100]);
  });

  it('use lens', () => {
    const {
      map,
      lensPath,
      view,
      over,
      values,
      compose
    } = R;
    const sp = path => path.split('.');
    const itemsLens = lensPath(sp('items'));
    const typeLens = lensPath(sp('entities.property.type.value'));
    const itemTypeLens = lensPath(sp('property.type'));
    const itemsView = view(itemsLens);
    const typeView = view(typeLens);
    const types = typeView(products); // <--
    const itemTypeOver = over(itemTypeLens);
    const lookupType =
      typeKey =>
        view(lensPath([typeKey]), types);
    const itemTypeFiller = itemTypeOver(lookupType);
    const builder = compose(
      map(itemTypeFiller),
      values,
      itemsView
    );

    const result = builder(products);
    const typeResult = view(itemTypeLens, result[0]);
    expect(typeResult).to.equal('для младших классов (1-4)');
  });

  it('use lens simple', () => {
    const {
      map,
      lensPath,
      view,
      over,
      values,
      compose,
      set
    } = R;
    const sp = path => path.split('.');
    const data = {
      a: {
        b: {
          c: 'i am c'
        }
      }
    };
    const pathToAbc = lensPath(sp('a.b.c'));
    expect(view(pathToAbc, data)).to.equal('i am c');
    const newData = over(pathToAbc, () => 'i am new c', data);
    expect(view(pathToAbc, newData)).to.equal('i am new c');
    const newDataSet = set(pathToAbc, 'i am very new data set', data);
    expect(view(pathToAbc, newDataSet)).to.equal('i am very new data set');
  });

  it('repeat', () => {
    expect(R.repeat('', 2)).to.deep.equal(['', '']);
  });

});
