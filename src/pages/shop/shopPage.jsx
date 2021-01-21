import React from 'react';
import {connect} from 'react-redux'
import {selectShopItems} from "../../redux/shop/shop.selector";

import CollectionsPreview from '../../components/collections-preview/collections-preview'

import {createStructuredSelector} from "reselect";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

const ShopPage = ({shopItems}) => (
    <div className='shop-page'>
        {shopItems.map(({id, title, items}) => (
            <CollectionsPreview key={id} title={title} items={items}/>
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    shopItems: selectShopItems
})

export default connect(mapStateToProps)(ShopPage)