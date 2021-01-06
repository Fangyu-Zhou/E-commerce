import React from 'react';

import './menu-item.scss'

const MenuItem = ({title, imageUrl, size}) => (
    <div className={`menu-item ${size}`}>
        <div
            className={`background-image`}
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        >
        </div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <h2 className='subtitle'>SHop Now</h2>
        </div>
    </div>
)

export default MenuItem