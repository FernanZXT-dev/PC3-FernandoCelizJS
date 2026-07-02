import './App.css';
import CatalogoFetch from './components/CatalogoFetch';
import CatalogoAxios from './components/CatalogoAxios';
import CatalogoAlova from './components/CatalogoAlova';
 
function App() {
  return (
    <div className="container">
      <div className="card">
        <CatalogoFetch />
      </div>
      
      <div className="card">
        <CatalogoAxios />
      </div>
      
      <div className="card">
        <CatalogoAlova />
      </div>
    </div>
  );
}
export default App;