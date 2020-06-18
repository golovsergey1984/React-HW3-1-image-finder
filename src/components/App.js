import React, { Fragment, Component } from "react";
import Searchbar from './ImageGallery/Searchbar.js';
import Loader from './ImageGallery/Loader.js';
import ImageGallery from "./ImageGallery/ImageGallery.js";
/* import ImageGalleryItem from "./ImageGallery/ImageGalleryItem.js"; */
import Button from "./ImageGallery/Button.js";
import * as ImagesAPI from "../services/image-api.js";
import ErrorNotification from "./ImageGallery/errorNotification.js";
import PropTypes from 'prop-types';


export default class App extends Component {
    state = {
        images: [],
        isLoading: false,
        error: null,
        page: 1,
        query: "",
        myRef: React.createRef()
    };

    /*  componentDidMount() {
         window.scrollTo(0, 0);
     }
  */
    fetchImages = (query, page) => {
        this.setState({ isLoading: true });
        ImagesAPI
            .fetchImages(query, page)
            .then(({ data }) => (this.setState({ images: this.state.images.concat(data.hits) })))//объеденяем базы
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }))
    }



    componentDidUpdate(prevProps, prevState) {

        if ((prevState.query !== this.state.query) || (prevState.page !== this.state.page)) {
            this.fetchImages(this.state.query, this.state.page)
        }
        if (this.state.page > 1) { this.scrollTo(); }

    }

    IncrementPage = () => {
        this.setState((prevState) => ({
            page: prevState.page + 1
        }))

    }

    handleChangeQuery = (queryToSearch) => {
        this.setState({ images: [] })
        this.setState({ page: 1 })
        this.setState({ query: queryToSearch });
    }

    scrollTo() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }

    render() {
        const { images, isLoading, error } = this.state;
        return (
            <Fragment>
                <Searchbar onSubmit={this.handleChangeQuery} />
                {error && <ErrorNotification text={error.message} />}
                {isLoading && <Loader />}
                {images.length > 0 && <ImageGallery items={images} />}
                {images.length > 0 && <Button onClickBtn={this.IncrementPage} />}
            </Fragment>
        );
    }
}


App.propTypes = {
    isLoading: PropTypes.bool,
    queryToSearch: PropTypes.string,
};