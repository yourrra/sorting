import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Book from "./components/book/Book";
import BookFilter from "./components/bookFilter/BookFilter";

function App() {
    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        await axios
            .get("./books.json")
            .then((response) => {
                setBooksData(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    console.log(booksData);

    return (
        <div className="wrapper">
            <div className="app">
                <div className="app_body">
                    <div>
                        <BookFilter />
                    </div>
                    {booksData.map((book) => (
                        <Book key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
