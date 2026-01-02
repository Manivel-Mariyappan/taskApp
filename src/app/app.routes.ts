import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./features/auth/components/login/login').then(m => m.Login)
    },
    {
        path: '',
        loadComponent: () => import('./features/layout/components/layout/layout').then(m => m.Layout)
    },
    {
        path: 'users',
        loadComponent: () => import('./features/users/components/users/users').then(m => m.Users)
    },
    {
        path: 'create-user',
        loadComponent: () => import('./features/users/components/create-user/create-user').then(m => m.CreateUser)
    }

];
