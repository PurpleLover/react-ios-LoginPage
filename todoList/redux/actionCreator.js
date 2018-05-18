import {ADD_WORK, TOGGLE_COMPLETED, TOGGLE_IS_ADDING} from '../styles/constant';

export function toggleIsAdding() {
  return {
    type: TOGGLE_IS_ADDING,
  };
}

export function toggleCompleted(id) {
  return {
    type: TOGGLE_COMPLETED,
    id,
  };
}

export function addNewWork(name, deadline) {
  return {
    type: ADD_WORK,
    name,
    deadline,
  };
}

export function showAll() {
  return {
    type: 'FILTER_SHOW_ALL',
  };
}

export function showCompleted() {
  return {
    type: 'FILTER_COMPLETED',
  };
}

export function showOnGoing() {
  return {
    type: 'FILTER_ON_GOING',
  };
}

