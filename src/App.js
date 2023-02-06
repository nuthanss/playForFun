import React,{ useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Flames from './components/Flames';
import TicTacToe from './components/TicTacToe/TicTacToe';
import MemoryGame from './components/MemoryGame'
import Header from './components/Header';
import AskMe from './components/AskMe';
import Calender from './components/Calender';
import NewsToday from './components/NewsToday';
import TaskManager from './components/TaskManager';
import Calculator from './components/Calculator';
import MathChallenge from './components/MathChallenge';


const [search, setsearch] = useState();

function setHsearch(s){
  setsearch(s);
}


function App() {
  return (
    <div className="App">
      <Router>
        <Header GetSearch={setHsearch}/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/flames" element={<Flames />} />
          <Route exact path="/memory-game" element={<MemoryGame />} />
          <Route exact path="/tictactoe" element={<TicTacToe />} />
          <Route exact path="/ask-me" element={<AskMe />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/calender" element={<Calender />} />
          <Route exact path="/task-manager" element={<TaskManager />} />
          <Route exact path="/news-today" element={<NewsToday />} />
          <Route exact path="/calculator" element={<Calculator />} />
          <Route exact path="/math-challenger" element={<MathChallenge />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
