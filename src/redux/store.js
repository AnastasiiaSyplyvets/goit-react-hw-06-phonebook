import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

// import { persistReducer } from 'redux-persist';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contacts'],
// };

// const persistedRecuser = persistReducer(persistConfig, rootReducer);

// configureStore({ reducer: persistedRecuser });
export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
  // reducer: persistedRecuser,
});
