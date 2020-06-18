import React, { Component } from 'react';
import styles from "./ImageGallery.module.css";



export default class Button extends Component {

    render() {
        return (
            <div className={styles['Button-box']}>
                <button type="button" className={styles.Button} onClick={this.props.onClickBtn} >
                    Load More
                    </button>
            </div>
        );
    }

}