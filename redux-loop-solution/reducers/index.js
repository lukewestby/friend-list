import { loop, Effects } from 'redux-loop';
import * as types from '../constants/actionTypes';
import search from '../api';
import { setFriends } from '../actions';

function searchFriends(query) {
  return search(query)
    .then(setFriends);
}

const initialState = {
  query: '',
  friends: [],
  loading: false
};

export default function friendListReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_FRIENDS:
      return loop(
        Object.assign({}, state, { loading: true }),
        Effects.promise(searchFriends, action.query)
      );

    case types.SET_QUERY:
      return Object.assign({}, state, {
        query: action.query
      });

    case types.SET_FRIENDS:
      return Object.assign({}, state, {
        friends: action.friends,
        loading: false
      });

    default:
      return state;

  }
}
