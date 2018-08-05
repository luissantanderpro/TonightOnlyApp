import { createStore, 
		 compose, 
		 applyMiddleware } from 'redux'; 
import thunk               from 'redux-thunk';
import { persistStore, 
		 persistReducer }  from 'redux-persist'
import { AsyncStorage }    from 'react-native'; 
// ---------------------------------------------------
import reducers            from './reducers'; 



const persistConfig = {
	key: 'root',
	storage: AsyncStorage
};


const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
	persistedReducer,
	{},
	compose(applyMiddleware(thunk))
); 

persistStore(store); 

export default store; 


