import React from 'react';
import {connect} from 'react-redux'

import './collectionPage.scss';
import {selectCollection} from "../../redux/shop/shop.selector";

const CollectionPage = ({collection}) => (
    <div className='collecton-page'>
        {console.log("*******",collection)}
        <h2>Collection Page</h2>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);