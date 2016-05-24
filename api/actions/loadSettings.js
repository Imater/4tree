const initialState = {
  data: {
    sample: 'test'
  }
};

export default function loadSettings() {
  return Promise.resolve(initialState);
}
