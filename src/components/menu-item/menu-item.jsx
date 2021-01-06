import React from 'react';
import {withRouter} from 'react-router-dom'

import './menu-item.scss'

const MenuItem = ({title, imageUrl, size, url, history, match}) => (
    <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${url}`)}>
        <div
            className={`background-image`}
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        >
        </div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <h2 className='subtitle'>Shop Now</h2>
        </div>
    </div>
)

export default withRouter(MenuItem)