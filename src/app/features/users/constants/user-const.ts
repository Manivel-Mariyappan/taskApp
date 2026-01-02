interface userRole {
    name: string;
    id: number;
}

export const USER_ROLES: userRole[] = [
    { name: 'Admin', id: 1 },
    { name: 'Member', id: 2 },
    { name: 'Viewer', id: 3 },
];