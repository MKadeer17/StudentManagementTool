import React from 'react';
import { Link } from 'react-router-dom';

function NoMatchFound() {
    return (
        <div className="pageNotFound">
            <img src="../../404PageNotFound.jpg" alt="404 Page Not Found"/>
            <h2>Page Not Found</h2>
            <Link className="btn btn-primary" to="/">Back To HomePage</Link>
        </div>
    )
}

export default NoMatchFound
