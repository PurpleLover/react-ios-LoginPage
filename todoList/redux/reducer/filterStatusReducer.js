import { SHOW_ALL, COMPLETED, ON_GOING } from '../../styles/constant';

const filterStatusReducer = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case 'FILTER_SHOW_ALL': return SHOW_ALL;
    case 'FILTER_COMPLETED': return COMPLETED;
    case 'FILTER_ON_GOING': return ON_GOING;
  }
  return state;
}

export default filterStatusReducer;