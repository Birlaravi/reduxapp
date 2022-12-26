import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Home} from "./Pages/Home";
import {Cart} from "./Pages/Cart";
import {Nav}from './components/Nav';
import store from './store' 
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
