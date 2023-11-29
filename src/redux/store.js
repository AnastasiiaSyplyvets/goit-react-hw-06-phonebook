import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

// ACTIONS

export const addNewContact = data => {
  return {
    type: 'contacts/addNewContact',
    payload: {
      id: nanoid(),
      name: data.name,
      number: data.number,
    },
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};

export const changeFilterAction = value => {
  return {
    type: 'filter/changeFilterAction',
    payload: value,
  };
};

// REDUCERS

const enhancer = devToolsEnhancer();
const rootReduces = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addNewContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: [...state.contacts].filter(
          contact => contact.id !== action.payload
        ),
      };

    case 'filter/changeFilterAction':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export const store = createStore(rootReduces, enhancer);
