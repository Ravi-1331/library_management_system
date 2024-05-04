// Card.js
import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const handleCardClick = (selectedBook) => {
        setSelectedBook(selectedBook);
        setShowModal(true);
    };

    return (
        <>
            {book.map((item, index) => {
                const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
                const amount = item.saleInfo?.listPrice?.amount;

                if (thumbnail && amount) {
                    return (
                        <div key={index} className="card" onClick={() => window.open(`https://books.google.com/books?id=${item.id}`, "_blank")}>
                            <img src={thumbnail} alt={item.volumeInfo.title} />
                            <div className="bottom">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                                <p className="amount">&#8377;{amount}</p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
            <Modal show={showModal} book={selectedBook} onClose={() => setShowModal(false)} />
        </>
    );
};

export default Card;
