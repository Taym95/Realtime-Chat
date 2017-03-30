export const INCREMENT_REQUEST = 'ourApp/INCREMENT_REQUEST';
export const INCREMENT = 'ourApp/INCREMENT';

export const incrementRequest = () => ({ type: INCREMENT_REQUEST });
export const increment = () => ({ type: INCREMENT });

const initialState = { amount: 0 };

export default function (state = initialState, action) {
  const { type } = action;
  switch (type){
    case INCREMENT:
      //console.log(state.amount);
      return Object.assign({}, state, { amount: state.amount + 1 });
    default:
      return state;
  }
}
