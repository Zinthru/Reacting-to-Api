import React from 'react';

const FilmCard = ({title,date}) => {
    return (
        <div className ='card'>
            <div className='card-header'>{title}</div>
            <div className='card-body'>{date}</div>
        </div>
    )
}

export default FilmCard