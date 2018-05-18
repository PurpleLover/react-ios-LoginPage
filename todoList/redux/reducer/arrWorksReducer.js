import {TOGGLE_COMPLETED, ADD_WORK} from '../../styles/constant';

const defaultArrWorks = [
  { id: 1, name: 'learn reactjs', deadline: '16-05-18', completed: true },
  { id: 2, name: 'create todoList', deadline: '16-05-18', completed: false },
  { id: 3, name: 'debug old code', deadline: '16-05-18', completed: false },
  { id: 4, name: 'learn HTML5', deadline: '16-05-18', completed: true },
  { id: 5, name: 'learn CSS3', deadline: '16-05-18', completed: false },
  { id: 6, name: 'create loginPage', deadline: '16-05-18', completed: true },
  { id: 7, name: 'learn JS/ES6', deadline: '16-05-18', completed: false },
  { id: 8, name: 'clean the house', deadline: '16-05-18', completed: true },
  { id: 9, name: 'translate gay stories', deadline: '16-05-18', completed: false },
  { id: 10, name: 'no Fap', deadline: '16-05-18', completed: false },
];

// e ~ element of the Works Array
const arrWorksReducer = (state = defaultArrWorks, action) => {
  if (action.type === TOGGLE_COMPLETED) {
    return state.map(e => {
      if (e.id !== action.id) return e;
      return { ...e, completed: !e.completed, };
    });
  }
  if (action.type === ADD_WORK) {
    return [{
      id: state.length + 1,
      name: action.name,
      deadline: action.deadline,
      completed: false,
    }].concat(state);
  }
  return state;
}

export default arrWorksReducer;