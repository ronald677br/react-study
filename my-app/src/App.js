import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus);
const App = () => {
  return (
    <div className="App">
		<Header />
	  	<MainPage/>
    </div>
  );
};

export default App;
