import React from "react";
import "./BookFilterSt.scss";
import arrowUp from "../../assets/arrow-up.png";
import arrowDown from "../../assets/arrow-down.png";

const BookFilter = ({ filterBooks, sortBooks, orderBy, booksData }) => {
    const onSelectChange = (e) => {
        filterBooks(e.target.value);
    };

    return (
        <div className="book-filter">
            <div className="book-filter__title" onClick={() => sortBooks()}>
                <p>
                    <b>orderBy</b>
                </p>
                <img src={orderBy ? arrowUp : arrowDown} alt="arrow" />
            </div>
            <div>
                <select onChange={onSelectChange}>
                    {booksData.map((book) => (
                        <option value={book.category}>{book.category} </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default BookFilter;
