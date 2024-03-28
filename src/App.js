import React from 'react'
import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import Parent from './components/demo/Parent';
import store from './redux/store';


function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
          {/* <Root /> */}
        <Parent />
      </ReduxProvider>
    </div>
  );
}

export default App;
