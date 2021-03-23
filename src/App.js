import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Body from "./components/body";
import store from "./store";
import {Provider} from 'react-redux'
function App() {
  return (
     <Provider store={store}>
         <div className="App">
             <Body/>
         </div>
     </Provider>

  );
}

export default App;
