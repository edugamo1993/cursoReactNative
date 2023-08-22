import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'setFavIcon'; payload: string}
  | {type: 'setUsername'; payload: string}
  | {type: 'signOut'};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };
    case 'signOut':
      return {
        ...state,
        username: undefined,
        isLoggedIn: false,
        favouriteIcon: undefined,
      };
    case 'setFavIcon':
      return {
        ...state,
        favouriteIcon: action.payload,
      };
    case 'setUsername':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
