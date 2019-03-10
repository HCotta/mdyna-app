import ACTION_TYPES from '../actions/actionTypes';

const {
  SEARCH_CARDS,
  ADD_LABEL_FILTER,
  REMOVE_LABEL_FILTER,
  TOGGLE_COMPLETED_FILTER,
} = ACTION_TYPES.FILTERS;

export default function notes(
  state = {
    searchInput: '',
    completedFilterOn: false,
    labelFilters: [],
  },
  action,
) {
  switch (action.type) {
    case SEARCH_CARDS:
      return {
        ...state,
        searchInput: action.value,
      };
    case ADD_LABEL_FILTER:
      return {
        ...state,
        labelFilters:
          (state.labelFilters.indexOf(action.value) === -1 && [
            ...state.labelFilters,
            action.value,
          ]) ||
          state.labelFilters,
      };
    case REMOVE_LABEL_FILTER:
      return {
        ...state,
        labelFilters: state.labelFilters.filter(d => d !== action.value),
      };
    case TOGGLE_COMPLETED_FILTER:
      return {
        ...state,
        completedFilterOn: !state.completedFilterOn,
      };
    default:
      return state;
  }
}