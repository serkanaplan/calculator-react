import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { Provider } from 'react-redux'
import { store } from './reduxCalculator/redux/store'

import UseStateCalculator from './useStateCalculator/components/Calculator/UseStateCalculator'
import UseReducerCalculator from './useReducerCalculator/components/Calculator/UseReducerCalculator'
import ContextApiCalculator from './contextApiCalculator/components/Calculator/ContextApiCalculator'
import ReduxCalculator from './reduxCalculator/components/Calculator/ReduxCalculator'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='main'>
      <UseStateCalculator />
      <UseReducerCalculator />
      <ContextApiCalculator />
      <Provider store={store}>
        <ReduxCalculator />
      </Provider>
    </div>
  </React.StrictMode>,
)
