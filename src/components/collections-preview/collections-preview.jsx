import React from 'react';

import './collections-preview.scss';
import CollectionItem from "../collection-item/collection-item";

const CollectionsPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, index) => index < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
        </div>
    </div>
);

export default CollectionsPreview
