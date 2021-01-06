import React from 'react';

import './menu-item.scss'

const MenuItem = ({title, imageUrl, size}) => (
    <div
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        className={`menu-item ${size}`}
    >
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <h2 className='subtitle'>SHop Now</h2>
        </div>
    </div>
)

export default MenuItem