import React from 'react'
import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import Root from './components/Root';
import store from './redux/store';


function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
          <Root />
      </ReduxProvider>
    </div>
  );
}

export default App;
