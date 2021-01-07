import React from 'react';

import CollectionsPreview from '../../components/collections-preview/collections-preview'

import SHOP_DATA from "./shopPageData";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;

        return (
            <div className='shop-page'>
                {collections.map(({id, title, items}) => (
                    <CollectionsPreview key={id} title={title} items={items} />
                ))}
            </div>
        )
    }
}

export default ShopPage