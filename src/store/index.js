import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

// Redux ToolKit

const store = configureStore({
  reducer: reducers
});

const { dispatch } = store;

export { store, dispatch };
