import { createAction, props } from "@ngrx/store";

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  role: number;
}

export const createUser = createAction(
    '[User] Create User',
    props<{ user: User }>()
);

export const createUserSuccess = createAction(
    '[User] Create User Success',
    props<{ user: User }>()
);

export const loadUsers = createAction(
    '[User] Load Users'
);

export const loadUsersSuccess = createAction(
    '[User] Load Users Success',
    props<{ users: User[] }>()
);

export const deleteUser = createAction(
    '[User] Delete User',
    props<{ id: number }>()
);

export const deleteUserSuccess = createAction(
    '[User] Delete User Success',
    props<{ id: number }>()
);