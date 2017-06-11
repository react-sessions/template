import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './components/App.jsx'

function render(RootComponent) {
    ReactDOM.render(
        <AppContainer>
            <RootComponent />
        </AppContainer>,
        document.getElementById('root'));
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App.jsx', () => { render(App) })
}
