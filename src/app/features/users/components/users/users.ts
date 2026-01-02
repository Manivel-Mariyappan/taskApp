import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllUsers, selectUsersLoading } from '../../store/user.selectors';
import { User } from '../../store/user.action';
import { loadUsers, deleteUserSuccess } from '../../store/user.action';
import { CreateUser } from '../create-user/create-user';

@Component({
  selector: 'app-users',
  imports: [CommonModule, CreateUser],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.users$ = this.store.select(selectAllUsers);
    this.loading$ = this.store.select(selectUsersLoading);
  }

  ngOnInit() {
    // loadUsers not needed - store persists state across route changes
  }

  deleteUser(id: number | undefined) {
    if (id) {
      this.store.dispatch(deleteUserSuccess({ id }));
    }
  }
}
