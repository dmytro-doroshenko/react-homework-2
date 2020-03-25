import React, {Component} from "react";
import './LoadingSpinner.scss'

const CN = 'loadingSpinner'

export class LoadingSpinner extends Component {
    render() {
        return (
            <div className={`${CN}`}>
                <div className={`${CN}__spinner`}/>
            </div>

        )
    }
}