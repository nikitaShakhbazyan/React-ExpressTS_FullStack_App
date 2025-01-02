import { configureStore } from '@reduxjs/toolkit';


const initialState = {
    counter: '',
  };
  
  const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'counter/increment':
        return { ...state, counter: state.counter + 1 };
      case 'counter/decrement':
        return { ...state, counter: state.counter - 1 };
      default:
        return state;
    }
  };
  
  // Создание хранилища
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>; // Тип для состояния
  export type AppDispatch = typeof store.dispatch; // Тип для dispatch
  
  export default store;