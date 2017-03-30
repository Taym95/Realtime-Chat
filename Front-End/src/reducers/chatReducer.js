export const ADD_MESSAGE = 'ourApp/ADD_MESSAGE';
export const ADD_MESSAGE_REQUEST = 'ourApp/ADD_MESSAGE_REQUEST';

export const addMessage = ({ text }) => (
  { type: ADD_MESSAGE, payload: { text } }
);

export const addMessageRequest = ({ text }) => (
  { type: ADD_MESSAGE_REQUEST, payload: { text } }
);

const initialState = { messages: ['hello man'] };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type){
    case ADD_MESSAGE:
      console.log(payload);
      const messages = [...state.messages, payload.text];
      return Object.assign({}, state, { messages });
    default:
      return state;
  }
}
