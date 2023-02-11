import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Flames from './Flames';
import TicTacToe from './TicTacToe/TicTacToe';
import MemoryGame from './MemoryGame'
import Header from './Header';
import AskMe from './AskMe';
import Calender from './Calender';
import NewsToday from './NewsToday';
import TaskManager from './TaskManager';
import Calculator from './Calculator';
import MathChallenge from './MathChallenge';

import { makeStyles } from "@material-ui/core/styles";
import background from '../media/background.gif';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:theme.palette.grey[20],
    //backgroundImage: `url(${background})`,
  }
}));

export default function Root() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
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
  )
}
