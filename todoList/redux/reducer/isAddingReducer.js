import {TOGGLE_IS_ADDING} from '../../styles/constant';

const isAddingReducer = (state = false, action) => {
  if (action.type === TOGGLE_IS_ADDING) return !state;
  return state;
}

export default isAddingReducer;