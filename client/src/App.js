import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import ProductDetail from './components/ProductDetail';
import Update from './components/UpDate';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/product' default element={<Main/>}/>
          <Route  path="/product/:id" element={<ProductDetail/>}/>
          <Route path="/product/edit/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
