import React, { createContext } from 'react'
import './App.css'
import MyRoutes from './MyRoutes'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/myStore'

export const MyThemeContext = createContext()

function App() {
  
  return (
    <>
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
        <MyRoutes />
      </PersistGate>
    </Provider>
    </>
  )
}

export default App
