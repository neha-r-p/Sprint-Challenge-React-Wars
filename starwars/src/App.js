import React, { useState, useEffect } from 'react';
import axios from "axios"
import Cards from "./components/Cards"
import styled from 'styled-components'
import './App.css';

const HeaderH1 = styled.h1 `
  font-size: 4em;
  background: #ffffff3a;
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`
const CardsDiv = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items:center;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charObjects, setCharObjects] = useState([])
  console.log(charObjects)
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://henry-mock-swapi.herokuapp.com/api')
    .then(res => {
      console.log(res.data)
      setCharObjects(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  return (
    <div className="App">
      <HeaderH1>React Wars</HeaderH1>
      <CardsDiv>
        {charObjects.map(char => (
          <Cards 
          name={char.name}
          height={char.height}
          mass={char.mass}
          hairColor={char.hair_color}
          skinColor={char.skin_color}
          eyeColor={char.eye_color}
          />
        )
        )}
      </CardsDiv>
    </div>
  );
}

export default App;
