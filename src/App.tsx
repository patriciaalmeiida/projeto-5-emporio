import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/home';
// import { store } from './Store'
// import Header from './Components/Header';
// import Routes from './Routes';


function App() {
  
    return (
      <div className="App">
        <Home/>
        {/* <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes />
        </Provider>
        </BrowserRouter> */}
      </div>
    );
  }

  export default App;