import axios from "axios";
import PropTypes from 'prop-types';

const BASE_URL = "https://pixabay.com/api/?key=";
const API_KEY = '14759738-915ddabe7286f1d5b09b52b7a';
const requestParams = '&per_page=12';

export const fetchImages = (query, page) => axios.get(BASE_URL + API_KEY + '&q=' + query + "&page=" + page + requestParams);

fetchImages.propTypes = {
    query: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
};
