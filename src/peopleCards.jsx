import React,{ useState,useEffect} from 'react';

const App = () => {
    const [people,setPeople]=useState();

    useEffect(()=> {
        fetch('https://ghibliapi.herokuapp.com/people/')
        .then((res) => res.json())
        .then(people => setPeople(people));
    }, []);


const PeopleCard = ({name,gender,age}) => {
    return (
        <div className ='card'>
            <div className='card-header'>{name}</div>
            <div className='card-body'>{gender,age}</div>
        </div>
    )
}

export default PeopleCard