// client-entry
import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'  // eslint-disable-line
import App from './App.jsx'

const root = document.getElementById('root')

const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  )
}

render(App)

// apply webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const NextApp = require('./App.jsx').default  //eslint-disable-line
    render(NextApp)
  })
}
