import {ADD_FEAT,RMV_FEAT} from '../actions';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export function reducer(state=initialState,action) {
    switch(action.type) {
      case ADD_FEAT: {
        const newAdditionalFeatures = state.additionalFeatures.filter(elem=>elem.id!==action.payload);
        // console.log("newAdditionalFeatures:",newAdditionalFeatures);
        const newFeature = (state.additionalFeatures.filter(elem=>elem.id===action.payload))[0];
        // console.log("newFeature",newFeature);
        const newCar = { ...state.car,
          features: [...state.car.features,newFeature]
        };
        // console.log("newCar",newCar);
        const newAdditionalPrice = state.additionalPrice + newFeature.price;
        // console.log("newAdditionalPrice",newAdditionalPrice);
        const newState = {
          additionalPrice: newAdditionalPrice,
          car: newCar,
          additionalFeatures: newAdditionalFeatures,
        };
        // console.log("newState",newState);
        return newState;
      }
      case RMV_FEAT: {
        const newFeaturesList = state.car.features.filter(elem=>elem.id!==action.payload);
        const newCar = { ...state.car,
          features: newFeaturesList
        };
        const removedFeature = (state.car.features.filter(elem=>elem.id===action.payload))[0];
        const newAdditionalFeatures = [...state.additionalFeatures,removedFeature];
        const newAdditionalPrice = state.additionalPrice - removedFeature.price;
        const newState = {
          additionalPrice: newAdditionalPrice,
          car: newCar,
          additionalFeatures: newAdditionalFeatures,
        };
        return newState;
      }
      default:
        return state;
    }
  }