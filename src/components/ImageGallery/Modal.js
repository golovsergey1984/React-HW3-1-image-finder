import React, { Fragment } from 'react';
import styles from "./ImageGallery.module.css";
import PropTypes from 'prop-types';

const Modal = ({ isModalOpen, backdropRef, onClickFunctionCloseCheck, currentURL }) => (

    <Fragment>
        {isModalOpen && (
            <div className={styles.Overlay} ref={backdropRef} onClick={onClickFunctionCloseCheck} >
                <div className={styles.Modal}>
                    <img src={currentURL} alt="" />
                </div>
            </div >
        )}
    </Fragment>

);

export default Modal;

Modal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    onClickFunctionCloseCheck: PropTypes.func.isRequired,
    currentURL: PropTypes.string.isRequired,
    backdropRef: PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) })
};

