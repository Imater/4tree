const initialState = {
  data: {
    sample: 'test',
    hello: 'hi!!!',
  }
};

export default function loadSettings() {
  return Promise.resolve(initialState);
}
