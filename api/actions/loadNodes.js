const initialState = {
  nodes: {
    '0': {
      id: '0',
      title: 'Дневник',
      parentId: '-1',
    },
    '1': {
      id: '1',
      title: 'node 1',
      parentId: '0',
    },
    '2': {
      id: '2',
      parentId: '1',
      title: 'child node 1',
    },
    '3': {
      id: '3',
      title: 'node 2',
      parentId: '0',
    },
    '4': {
      id: '4',
      parentId: '3',
      title: 'child node 2',
    },
    '5': {
      id: '5',
      parentId: '4',
      title: 'sub child node 2',
    },
  }
};

export default function loadSettings() {
  return Promise.resolve(initialState);
}
