import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'

const Nav = () => {
    const [movies,setMovies]= useContext(MovieContext);
    return (
        <div>
            <div>Nav working!</div>
            <div>Total:{movies.length}</div>
        </div>
    )
}

export default Nav
