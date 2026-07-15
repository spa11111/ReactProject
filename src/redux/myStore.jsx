
import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/es/storage'
import itemReducer from './itemsReducer'

import { cartReducer } from './cartReducer'
import { userReducer } from './userReducer'

const rootReducer = combineReducers({
    itemsStore: itemReducer,
    cartStore: cartReducer,
    userStore: userReducer
})

const persistConfig = {
    key: 'root',
    storage: localStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)