import React, { useState, useEffect, ChangeEvent } from 'react';
import { requestUsersWithError, User, Query } from './api';
import './styles.css';
import { loadUsers } from './utils/apiUtils';
import { Form } from './components/Form/Form';
import { Select } from './components/Select/Select';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import { UserList } from './components/UserList/UserList';

export default function App() {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState<Query>({
        name: '',
        age: '',
        limit: 5,
        offset: 0,
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(4);

    useEffect(() => {
        loadUsers(
            query,
            setUsers,
            setError,
            setIsLoading,
            currentPage,
            itemsPerPage
        );
    }, [currentPage, itemsPerPage]);

    const ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setQuery({
            ...query,
            [name]: value,
        });
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loadUsers(
            query,
            setUsers,
            setError,
            setIsLoading,
            currentPage,
            itemsPerPage
        );
        setQuery({
            ...query,
            name: '',
            age: '',
        });
    };

    return (
        <div>
            <Form
                query={query}
                ChangeHandler={ChangeHandler}
                submitHandler={submitHandler}
            />
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {error ? (
                        <div>{error}</div>
                    ) : (
                        <>
                            <UserList users={users}/>
                            <div>
                                <ButtonGroup
                                    setCurrentPage={setCurrentPage}
                                    currentPage={currentPage}
                                />
                                <Select setItemsPerPage={setItemsPerPage} />
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}
