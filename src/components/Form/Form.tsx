import React, { ChangeEvent } from 'react';
import { Query } from '../../api';

interface FormProps {
    query: Query;
    ChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<FormProps> = ({ query, ChangeHandler, submitHandler }) => {
    return (
        <form onSubmit={submitHandler}>
            <input
                name='name'
                type='text'
                placeholder='Имя'
                value={query.name}
                onChange={ChangeHandler}
            />
            <input
                name='age'
                type='text'
                placeholder='Возраст'
                value={query.age}
                onChange={ChangeHandler}
            />
            <button type='submit'>Применить фильтры</button>
        </form>
    );
};

