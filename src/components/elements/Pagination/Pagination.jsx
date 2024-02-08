import React from 'react';

const Pagination = ({ currentPage, totalPages, destination }) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, startPage + 4);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <a
                key={i}
                href={`/${destination}/page/${i}`}
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
            href={`/${destination}/page/1`}
            className="text-white w-10 h-10 rounded-full grid place-items-center mx-1"
        >
            {'<<'}
        </a>
        <a
            href={`/${destination}/page/${Math.max(1, currentPage - 1)}`}
            className="text-white w-10 h-10 rounded-full grid place-items-center mx-1"
        >
            {'<'}
        </a>

        {renderPageNumbers()}

        <a
            href={`/${destination}/page/${Math.min(totalPages, currentPage + 1)}`}
            className="text-white w-10 h-10 rounded-full grid place-items-center mx-1"
        >
            {'>'}
        </a>
        <a
            href={`/${destination}/page/${totalPages}`}
            className="text-white w-10 h-10 rounded-full grid place-items-center mx-1"
        >
            {'>>'}
        </a>
        </div>
    );
};

export default Pagination;
