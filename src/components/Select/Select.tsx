import React, { ChangeEvent } from 'react';

interface SelectProps {
    setItemsPerPage: (value: number) => void;
}

export function Select({ setItemsPerPage }: SelectProps) {
    return (
        <select
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setItemsPerPage(Number(e.target.value))
            }
        >
            <option value='4'>4 элемента на странице</option>
            <option value='5'>5 элементов на странице</option>
            <option value='10'>10 элементов на странице</option>
        </select>
    );
}
