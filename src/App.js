import './App.module.css';
import Home from './Containers/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalContextProvider from './Context/GlobalContext';
function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Home />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
