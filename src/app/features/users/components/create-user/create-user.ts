import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { USER_ROLES } from '../../constants/user-const';
import { createUserSuccess } from '../../store/user.action';
import { User } from '../../store/user.action';


@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-user.html',
  styleUrl: './create-user.scss',
})
export class CreateUser {

  userForm: FormGroup;
  userRoles = USER_ROLES;

  submitted = false;

  constructor(private fb: FormBuilder, private store: Store) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    const user: User = this.userForm.value;

    this.store.dispatch(createUserSuccess({ user }));
    this.userForm.reset();
  }
}
