import React from 'react'
import MovieItem from './MovieItem'

export default function Movie(props) {
    console.log(props.data)
    
  return (
    <div className='movie'>
        <MovieItem dataItem={props.data[0]} handleClick={props.handleClick} />
        <MovieItem dataItem={props.data[1]} handleClick={props.handleClick} />
        <MovieItem dataItem={props.data[2]} handleClick={props.handleClick} />
        <MovieItem dataItem={props.data[3]} handleClick={props.handleClick} />
        <MovieItem dataItem={props.data[4]} handleClick={props.handleClick} />
        <MovieItem dataItem={props.data[5]} handleClick={props.handleClick} />
        <MovieItem dataItem={props.data[6]} handleClick={props.handleClick} />
        <MovieItem dataItem={props.data[7]} handleClick={props.handleClick} />
    </div>
  )
}
