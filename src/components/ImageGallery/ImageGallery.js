import React, { Component, Fragment, createRef } from "react";
import ImageGalleryItem from './ImageGalleryItem.js';
import Modal from './Modal.js';
import styles from "./ImageGallery.module.css";

export default class ImageGallery extends Component {
    backdropRef = createRef();

    state = {
        isModalOpen: false,
        largeURL: "",
    };


    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyPress);
    }


    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyPress);
    }

    handleKeyPress = e => {
        if (e.code !== "Escape") return;
        this.closeModal()
    }

    handleBackdropClick = e => {
        const { current } = this.backdropRef;
        if (current && e.target !== current) return;
        this.closeModal();
    }

    openModal = (e) => {
        const currentModalLargeUrl = e.target.getAttribute('data-large-url');
        this.setState({ isModalOpen: true });
        this.setState({ largeURL: currentModalLargeUrl });
    };

    closeModal = () => this.setState({ isModalOpen: false });

    render() {
        return (
            <Fragment>
                <ul className={styles.ImageGallery}>
                    <ImageGalleryItem
                        images={this.props.items}
                        openModal={this.openModal}
                    />
                    {/*  {console.log(this.props.items)} */}
                </ul>
                < Modal
                    isModalOpen={this.state.isModalOpen}
                    backdropRef={this.backdropRef}
                    onClickFunctionCloseCheck={this.handleBackdropClick}
                    currentURL={this.state.largeURL}
                />
            </Fragment>
        );
    }
}



/* ImageGallery.propTypes = {

                }; */