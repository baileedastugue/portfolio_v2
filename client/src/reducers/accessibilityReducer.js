import {
     GET_ACCESSIBILITY,
     SET_ACCESSIBILITY,
} from '../reducers/accessibilityReducer';

const initialState = {
     accessibilityEnabled: false,
};

export default function (state = initialState, action) {
     switch (action.type) {
          default:
               return state;
     }
}
