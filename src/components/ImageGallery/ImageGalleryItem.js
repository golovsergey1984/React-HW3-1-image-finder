import React, { Fragment } from 'react';
import styles from "./ImageGallery.module.css";
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images, openModal }) => (
    <Fragment>

        {images.map(item => (
            <li key={item.id} className={styles.ImageGalleryItem} onClick={openModal}>
                <img src={item.webformatURL} alt={item.tags} className={styles['ImageGalleryItem-image']} data-large-url={item.largeImageURL} />
            </li>

        ))}
    </Fragment >
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    openModal: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        }),
    ),
};