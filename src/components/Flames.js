import { React, useState } from 'react'
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      paddingTop: theme.spacing(15)
  }
}))

export default function Flames() {

  const classes = useStyles(); 

  const [firstName, setfirstName] = useState('');
  const [secondName, setsecondName] = useState('');
  const [answer, setanswer] = useState('');



  function handleCheckAnswer() {
    let fname = firstName.split('');
    let secname = secondName.split('');

    if (fname.length == 0 || secname.length == 0) {
      alert("Fill the both text boxes!!")
    }
    else if (firstName.length >= secondName.length) {
      getFinalLetters(fname, secname);
    } else if (secname.length >= fname.length) {
      getFinalLetters(secname, fname);
    }
  }

  function getFinalLetters(nameArrayOne, nameArrayTwo, copyArrayOne = [...nameArrayOne]) {

    for (let i = 0; i < nameArrayOne.length; i++) {
      let index1 = nameArrayTwo.indexOf(nameArrayOne[i]);
      let index2 = copyArrayOne.indexOf(nameArrayOne[i]);

      if (index1 > -1 && index2 > -1) {
        nameArrayTwo.splice(index1, 1);
        copyArrayOne.splice(index2, 1);
      }
    }
    let finalLetters = nameArrayTwo.concat(copyArrayOne);
    getFlames(finalLetters.length);
  };

  function getFlames(count) {
    const FLAMES = ['Friends', 'Lovers', 'Affection', 'Marriage', 'Enemy', 'Sister', 'none'];
    let modularNumber = count % 6;
    if (count == 0) {
      const answer = FLAMES[6];
      setanswer(answer);
      return
    }
    const index = modularNumber == 0 ? 6 : modularNumber;
    const answer = FLAMES[index - 1];
    setanswer(answer);
  }

  return (
    <Container className={classes.root}>
      <label>Your name: </label>
      <input type="textfield" onChange={(e) => setfirstName(e.target.value)}></input> <br></br>
      <label>crush name: </label>
      <input type="textfield" onChange={(e) => setsecondName(e.target.value)}></input><br></br>
      <button onClick={handleCheckAnswer}>check</button><br></br>
      <label>Relationship: </label>
      <label>{answer}</label>
    </Container>
  )
}
