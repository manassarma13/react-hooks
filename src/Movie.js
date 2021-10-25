import React from 'react'

const Movie = ({name, price}) => {
    return (
        <div>
            <h3>{name}</h3>
            <div>{price}</div>
        </div>
    )
}

export default Movie
