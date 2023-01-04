import React from "react";
import "./BookSt.scss";

const Book = ({ book, totalPrice }) => {
    return (
        <div className="book">
            <div className="book__column">
                <div className="book__number">{book.id + "."}</div>
                <div className="book__name">{book.name}</div>
            </div>
            <div className="book__order">
                <div className="book__price">{book.price + " руб."}</div>
                <button onClick={() => totalPrice(book)}>Buy</button>
            </div>
        </div>
    );
};

export default Book;
