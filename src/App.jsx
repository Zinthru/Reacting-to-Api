import React,{useState,useEffect} from 'react';
import filmCards from './filmCards';
import peopleCards from './peopleCards';

const App = () => {
    const [films,setFilms]=useState();
    
    handleShowFilm = () => 
   this.setFilms({ isFilmClicked: false });

   
   handleShowPeople = () => 
   this.setPeople({ isPeopleClicked: false });

    useEffect(()=> {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then((res) => res.json())
        .then(films => setFilms(films));
    }, []);

    if (!films || !peopleCards()) {
        return <h1>Loading...</h1>
    }

    if(isPeopleClicked || isFilmClicked == false) {
        return <h1>Loading lists...</h1>
    }


    return (
        <>
        <div>
        {films.map(film => (
            <filmCards key={`film-key-items-${film.id}`} title={film.title} date={film.release_date} description={film.description} />
        ))}
        </div>
        <button onClick={() => this.setFilms({visible: true})}></button>
        <div>
        {people.map(people => (
            <peopleCards key={`people-key-items-${people.id}`} name={people.name} age={people.age} gender={people.gender} />
        ))} 
        </div>
        ,<button onClick={() => this.setPeople({visible: true})}></button>
        </>
    )
}


export default App;