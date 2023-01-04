import React from "react";
import "./BookFilterSt.scss";

const BookFilter = () => {
    return (
        <div className="book-filter">
            <select>
                <option value="animals">Animals </option>
                <option value="toirism">Tourism </option>
                <option value="parfun"> Parfun</option>
                <option value="music"> Music</option>
                <option value="food"> Food</option>
            </select>
        </div>
    );
};

export default BookFilter;
