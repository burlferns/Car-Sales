import React from 'react';
import {connect} from 'react-redux';
import {addFeat} from '../actions';

import AdditionalFeature from './AdditionalFeature';


const AdditionalFeatures = props => {
  
  function buyItem(id)  {
    // dipsatch an action here to add an item
    props.addFeat(id);
  };

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} clkEvent={()=>buyItem(item.id)}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    additionalFeatures: state.additionalFeatures,
  };
}


export default connect(mapStateToProps, {addFeat})(AdditionalFeatures);
