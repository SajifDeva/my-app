import { configureStore } from '@reduxjs/toolkit';
import { cardsSlice } from './components/cards/cardsSlice';
import { Provider } from 'react-redux';
import { searchSlice } from './components/searchBar/searchSlice';

const store = configureStore({
  reducer: {
    cards: cardsSlice.reducer,
    search: searchSlice.reducer, 
  }
})