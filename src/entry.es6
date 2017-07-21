import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/AppContainer';
import configureStore from './store/configureStore';
import { AppContainer } from 'react-hot-loader'

const store = configureStore();

const render = Component => {
    ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <Component />
          </Provider>
        </AppContainer>,
      document.querySelector('#main')
    )
}


render(App)

if(module.hot) {
    module.hot.accept('./containers/AppContainer', () => {
        const NextApp = require('./containers/AppContainer').default
        render(NextApp)
    })
}