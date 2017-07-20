import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
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

if (module.hot) {
    console.log("Hot a re looooad");
  module.hot.accept('./containers/App', () => { render(App) })
}