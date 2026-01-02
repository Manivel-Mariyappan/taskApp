import { createReducer, on } from '@ngrx/store';
import { User, createUser, createUserSuccess, loadUsers, loadUsersSuccess, deleteUser, deleteUserSuccess } from './user.action';

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(createUser, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(createUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, { ...user, id: Date.now() }],
    loading: false,
  })),
  on(loadUsers, (state) => ({
    ...state,
    loading: false,
    // Users stay in state - no API call needed
  })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(deleteUser, (state) => ({
    ...state,
    loading: true,
  })),
  on(deleteUserSuccess, (state, { id }) => ({
    ...state,
    users: state.users.filter(u => u.id !== id),
    loading: false,
  }))
);
