import { createStore, combineReducers } from 'redux';
import stockReducer from './Stock/Stock.reducer';
import themeReducer from './Theme/Theme.reducer';

const rootReducer = combineReducers({
  stock: stockReducer,
  theme: themeReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;