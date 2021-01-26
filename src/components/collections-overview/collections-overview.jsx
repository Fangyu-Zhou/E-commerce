import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";

import CollectionsPreview from "../collections-preview/collections-preview";

import './collections-overview.scss';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(({id, title, items}) => (
            <CollectionsPreview key={id} title={title} items={items}/>
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);