import React from "react";

function Cards(props) {
    console.log(props)
    const { name, height, mass, hairColor, skinColor, eyeColor } = props

    return (
        <div>
            <h1>{name}</h1>
            <p><span>Height: </span>{height}</p>
            <p><span>Mass: </span>{mass}</p>
            <p><span>Hair Color: </span>{hairColor}</p>
            <p><span>Skin Color:</span>{skinColor}</p>
            <p><span>Eye Color:</span>{eyeColor}</p>
        </div>
    )
}

export default Cards;