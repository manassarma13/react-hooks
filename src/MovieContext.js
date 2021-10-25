import React,{useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            name: 'BvS',
            price: '$49.99'
        },
        {
            id: 2,
            name: 'Batman',
            price: '$59.99'
        },
        {
            id: 3,
            name: 'JL',
            price: '$69.99'
        },
    ]);
    return (
        <div>
            <MovieContext.Provider value ={[movies, setMovies]}> 
                 {props.children}  
            </MovieContext.Provider>
        </div>
    )
}


