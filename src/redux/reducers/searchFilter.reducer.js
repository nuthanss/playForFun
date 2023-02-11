import * as actions from '../actions';

const initialState = {
  search: ""
};

const searchFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_SEARCH_FILTER:
        const { search } = action;
      return {
        ...state,
        search: search
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};


export default searchFilterReducer;
