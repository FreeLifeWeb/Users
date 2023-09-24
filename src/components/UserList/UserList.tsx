import React from 'react';
import { User } from '../../api';

interface UserListProps {
    users: User[];
}
export function UserList({ users }: UserListProps) {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name}, {user.age}
                </li>
            ))}
        </ul>
    );
}
