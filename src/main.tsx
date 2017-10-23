import * as React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';

class Main extends React.Component {
  constructor() {
    super();
    this.onComplete = this.onComplete.bind(this);
  }

  onComplete() {
    console.log('Finish rehydrating the store');
  }

  render() {
    const store = configureStore(this.onComplete);
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Main;
