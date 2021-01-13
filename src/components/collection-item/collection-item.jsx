import React from 'react';

import CustomButton from "../wigets/custom-button/custom-button";

import './collection-item.scss';

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{backgroundImage: `url(${imageUrl})`}}
        />

        <div className='collection-footer'>
            <div className='name'>{name}</div>
            <div className='price'>${price}</div>
        </div>

        <CustomButton inverted>ADD TO CART</CustomButton>
    </div>

);

export default CollectionItem;