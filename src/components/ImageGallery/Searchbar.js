import React, { Component } from 'react';
import styles from "./ImageGallery.module.css";


export default class App extends Component {
    state = {
        queryToSearch: "",
    }

    handleSubmitSearchTxt = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.queryToSearch);
    }

    handleChange = e => {
        this.setState({ queryToSearch: e.target.value });
    }

    render() {
        const { queryToSearch } = this.state;
        return (
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.handleSubmitSearchTxt}>
                    <button type="submit" className={styles['SearchForm-button']}>
                        <span className={styles['SearchForm-button-label']}>Search</span>
                    </button>

                    <input
                        className={styles['SearchForm-input']}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={queryToSearch}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        )
    }
};
