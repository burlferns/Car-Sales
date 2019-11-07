import React from 'react';
import {connect} from 'react-redux';
import {rmvFeat} from '../actions';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {

  function removeFeature(id) {
    // dispatch an action here to remove an item
    props.rmvFeat(id);
  };

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} clkEvent={()=>removeFeature(item.id)} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    car: state.car,
  };
}


export default connect(mapStateToProps, {rmvFeat})(AddedFeatures);
