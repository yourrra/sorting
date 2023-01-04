import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Book from "./components/book/Book";
import BookFilter from "./components/bookFilter/BookFilter";
import Cart from "./components/cart/Cart";

function App() {
    const [booksData, setBooksData] = useState([]);
    const [orderBy, setOrderBy] = useState(false);
    const [totalOrders, setTotalOrders] = useState([]);
    const [ordersPrice, setOrdersPrice] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            setIsLoading(true);
            let response = await axios.get("./books.json");
            setBooksData(response.data);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    const filterBooks = (value) => {
        const filteredBooks = booksData.filter((book) => {
            return book.category.includes(value);
        });
        setBooksData(filteredBooks);
    };

    const sortBooks = () => {
        const copyData = booksData.slice();
        if (orderBy) {
            const sortedByAsc = copyData.sort((a, b) =>
                a.price > b.price ? 1 : -1
            );
            setBooksData(sortedByAsc);
            setOrderBy(!orderBy);
        } else {
            const sortedByDec = copyData.sort((a, b) =>
                a.price > b.price ? -1 : 1
            );
            setBooksData(sortedByDec);
            setOrderBy(!orderBy);
        }
    };

    const totalPrice = (book) => {
        setTotalOrders([...totalOrders, book]);
        let ordersSum = totalOrders.reduce(
            (sum, current) => sum + current.price,
            0
        );
        setOrdersPrice(ordersSum);
    };

    console.log(booksData);

    return (
        <div className="wrapper">
            <div className="app">
                <div className="app_body">
                    <h1>Books</h1>
                    <div>
                        <BookFilter
                            orderBy={orderBy}
                            sortBooks={sortBooks}
                            booksData={booksData}
                            filterBooks={filterBooks}
                        />
                    </div>
                    {!isLoading ? (
                        booksData.map((book) => (
                            <Book
                                key={book.id}
                                book={book}
                                totalPrice={totalPrice}
                            />
                        ))
                    ) : (
                        <h3>Loading...</h3>
                    )}
                </div>
                <div className="app__cart">
                    <Cart ordersPrice={ordersPrice} />
                </div>
            </div>
        </div>
    );
}

export default App;
