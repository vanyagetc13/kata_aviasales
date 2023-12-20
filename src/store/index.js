import { compose, configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import { rootReducer } from './reducers'

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose

const store = configureStore({
	reducer: rootReducer,
	middleware: (gdm) => gdm().concat(thunk),
	devTools: composeEnhancers,
})

export default store
