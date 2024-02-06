import React from 'react';

const Pagination = ({ currentPage, totalPages }) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, startPage + 4);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <a
                key={i}
                href={`/completed/page/${i}`}
                className={`text-white w-10 h-10 rounded-full grid place-items-center mx-1 ${
                    i === currentPage ? 'bg-kumanime text-white' : ''
                }`}
                >
                {i}
                </a>
            );
        }

        return pageNumbers;
    };

    return (
        <div className="flex justify-center items-center">
        <a
            href="/completed/page/1"
            className="text-white w-10 h-10 rounded-full grid place-items-center mx-1"
        >
            {'<<'}
        </a>
        <a
            href={`/completed/page/${Math.max(1, currentPage - 1)}`}
            className="text-white w-10 h-10 rounded-full grid place-items-center mx-1"
        >
            {'<'}
        </a>

        {renderPageNumbers()}

        <a
            href={`/completed/page/${Math.min(totalPages, currentPage + 1)}`}
            className="text-white w-10 h-10 rounded-full grid place-items-center mx-1"
        >
            {'>'}
        </a>
        <a
            href={`/completed/page/${totalPages}`}
            className="text-white w-10 h-10 rounded-full grid place-items-center mx-1"
        >
            {'>>'}
        </a>
        </div>
    );
};

export default Pagination;
