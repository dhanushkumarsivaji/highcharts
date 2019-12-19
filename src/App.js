import React,{useEffect,Fragment} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import HignCharts_Line from './componenets/highcharts_newline/HighChart'
import Drilldown from './componenets/drilldown'
import HignMaps from './componenets/highmaps'
import { Provider } from "react-redux";
import store from './store'
import DnD from './componenets/highcharts_dnd'
import Navbar from './Navbar'
const App = () => {

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
    <div className="App">
      <Fragment>

       <Drilldown/>

      </Fragment>
      
    </div>
    </Provider>
  );
}

export default App;
