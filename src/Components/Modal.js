// Modal.js
import React from "react";

const Modal = ({ show, book, onClose }) => {
    if (!show || !book) return null;

    const { volumeInfo, saleInfo } = book;
    const thumbnail = volumeInfo.imageLinks?.smallThumbnail;

    return (
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close" onClick={onClose}><i className="fas fa-times"></i></button>
                <div className="inner-box">
                    <img src={thumbnail} alt="" />
                    <div className="info">
                        <h1>{volumeInfo.title}</h1>
                        <h3>{volumeInfo.authors?.join(", ")}</h3>
                        <h4>{volumeInfo.publisher} <span>{volumeInfo.publishedDate}</span></h4>
                        <a href={volumeInfo.previewLink}><button>More</button></a>
                    </div>
                </div>
                <h4 className="description">{volumeInfo.description}</h4>
            </div>
        </div>
    );
};

export default Modal;
