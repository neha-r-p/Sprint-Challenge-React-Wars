import React from "react";
import styled from 'styled-components'

const ContainerDiv = styled.div `
    background: white;
    width: 200px;
 
    height: 300px;
    padding: 20px;
    margin: 20px;
  
`
 
function Cards(props) {
    console.log(props)
    const { name, height, mass, hairColor, skinColor, eyeColor } = props

    return (
        <div>
            <ContainerDiv>
                <h1>{name}</h1>
                <p><span>Height: </span>{height}</p>
                <p><span>Mass: </span>{mass}</p>
                <p><span>Hair Color: </span>{hairColor}</p>
                <p><span>Skin Color:</span>{skinColor}</p>
                <p><span>Eye Color:</span>{eyeColor}</p>
            </ContainerDiv>
        </div>
    )
}

export default Cards;