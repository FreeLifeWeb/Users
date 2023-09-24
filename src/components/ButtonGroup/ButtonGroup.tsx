import React from 'react';

interface ButtonGroupProps {
    setCurrentPage: (prev: (prev: number) => number) => void;
    currentPage: number;
}

export default function ButtonGroup({
    setCurrentPage,
    currentPage,
}: ButtonGroupProps) {
    return (
        <>
            <button
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage === 1}
            >
                Назад
            </button>
            <span>Страница {currentPage}</span>
            <button onClick={() => setCurrentPage((prev) => prev + 1)}>
                Вперед
            </button>
        </>
    );
}
