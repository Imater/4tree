const initialState = {
  tasks: {
    '0': {
      id: '0',
      title: 'Прочитать статью на habrahabr',
      nodeId: '0',
      checked: false,
    },
    '1': {
      id: '1',
      title: 'Выписать вопросы и настрочить комментарий',
      nodeId: '0',
      checked: false,
    },
    '2': {
      id: '2',
      title: 'Поставить +1 автору статьи, если она интересная',
      nodeId: '0',
      checked: true,
    },
    '3': {
      id: '3',
      title: 'Помыть машину',
      nodeId: '1',
      checked: true,
    }
  }
};

export default function loadSettings() {
  return Promise.resolve(initialState);
}
