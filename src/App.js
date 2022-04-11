import MovieCard from './MovieCard';

//want to get data from omdbapi as soon as our component loads
// so we will use the hook useState
import { Component, useEffect, useState } from 'react';

//import styles and icon
import './App.css';
import SearchIcon from './search.svg'

//used to fetch data about movies
const API_URL = 'http://www.omdbapi.com?apikey=6348349c';

//to check if it's working
const movie1 = {

    "Title": "Thor",
    "Year": "2011",
    "imdbID": "tt0800369",
    "Type": "movie",
    "Poster": "N/A"

}

const App = () => {




    // we will create a new state and set the default value
    // of our movies to an empty array. this will give us access
    // to the setMovies setter function. and instead of
    // console logging like ( console.log(data.Search); )
    // we can now pass the data.Search 
    const [movies, setMovies] = useState([]);

    //now we want to get the search function to work.
    // we will need another state for that. You can have
    // multiple states and even multiple useEffect hooks per 
    // one Component. there is no limit. So we will say 
    // const [searchTerm, setSearchTerm] = useState(''); and
    // it will have an empty string because our searchTerm at the 
    //start is empty. so now we go back down to our input in our
    // div class that is named search
    const [searchTerm, setSearchTerm] = useState('');


    //call a function that will fecth our movies
    // so create a new function const searchMovies,
    // make it equal ot an async arrow function
    // async means async data meaning it takes some time
    // to fetch these movies. And the search movies
    // is gonna accept a search title that we want to search by
    // for example 'superman'. 
    const searchMovies = async (title) => {

        //inside of fetch use a template string ` 
        // then dynamically specify the API_URL and then say
        // &s is equal to the specified title
        //so this is going to call our API
        //The dollar sign is commonly used as a shortcut to 
        //the function document.getElementById()
        const response = await fetch(`${API_URL}&s=${title}`)

        //so once we get the reponse we must get the data from it
        // so we set data equal to response.json();
        // so inside of this data object, we should have the data
        //about the movies. 
        const data = await response.json();

        //put a console.log(data) for now to
        //check and make sure that's happening.
        // console.log(data.Search);
        // so after we finish debugging
        //instead of the console.log(data.search) we instead
        // will use setMovies(data.Search); so this will give
        // us access to our movies. So now in our
        // container, now that we have this we
        // can dynamically pass movies and then 0 into
        // movie1. this will allow us to pipulate movies.
        setMovies(data.Search);




    }



    //call it here, it will accept a call back function and
    // an empty dependency array as the second one if we
    // only want to call it at the start
    useEffect(() => {

        //when trying to debug and in console on the actual site
        //we would need to call searchMovies() with a string of
        // a movie title. so searchMovies('Thor') for example.
        searchMovies('Thor');
        //as soon as we save this file, we will notice in the console
        //on the website, if we open the arrow, we will notice we get
        // search, the response, and total results. we only want to see
        //the movies array so we can do console.log(data.Search) to just
        //get rid of the other info for now if we want.
        //so if we get the movies we requested in the search
        //it means our api works. Now we need to be able to render
        //the data and be able to show it inside of our application


    }, []);


    return (
        // wrap everything in a div called app
        <div className="app">
            <h1> MovieBase</h1>

            <div className="search">
                {/* an input is a self closing tag that has to have a few */}
                {/* properties, like a place holder (search for movies),
             value (for now let's set it as a static string of Superman.)
              so you will notice the input has the value of superman. If you try
              to type something, you won't be able to because the value is
              statically set. How do we change it?
              for us to change it we have othave an onchange which accepts a callback
              funciton. for now we left it empty like this:
                    placeholder="Search for movies..."
                    value="Superman"
                    onChange={() => {}}

                    later on when we implement the state, wer're going to make
                    it actually changeable and it's oging to recall out api
            
                inside of this search input we can dynamically change our
                search term so our value will no longer be static anymore
                aka value = "Superman." so we will use {searchTerm} so now it's
                dynamic and you will see now, it will be empty at the start so
                you you can only see a placeholder. To be able to type in it,
                we need to do a similiar thign we've done before with the clickevent
                when we change that counter ( in another project). so we need
                to set the setSearchTerm and then we call it and pass in the 
                e.target.value and the e we are talking about in e.target.value
                 is coming from the call back function {(e)} in {(e) => {}}

            */}
                <input
                    placeholder="Search for movies..."
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value)}}
                />

                {/* next we will have a self closing image tag
                remember all image tags must always have a alt tag. we call it
                search, which is useful for screen readers
                this shows the magnifying class icon. the magnifying glass icon 
                will also serve as a button so we can add an onclick property
                and add an empty call back function because later on we will call
                our above API, straight from here but for now we are building jsx.
                */}
                <img

                // so how can we use that state "setSearchterm" to dynamically re-render
                // our array of movies? for that we will use the on click listener 
                //method in our img tag below. So we can recall our searchMovies
                // function and pass in a new title. we can do that by calling
                // searchMovies. Then we will pass not a specific title which
                //would be static but rather we can pass in the searchTerm which
                //is a dynamic state.So now everytime we type somethign in the
                //search and click it, the state will dynamically change. we
                //will get a new search.
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm) }
                />
            </div>

            {/* below this search div, we create a new div and name it container
            to test this out, go to insptect, console, array, take a movie and 
            ccopy the entire object by right click, and copy object, go to the top
            and type(inside the brackets paste the info)  -> const movie1 = {
             "Title": "Thor",
             "Year": "2011",
             "imdbID": "tt0800369",
             "Type": "movie",
             "Poster": "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
              }
              so we will use the above as static data just to render out something
              so we know what jsx we are writing.
            */}
            {/* <div className="container"> */}
            {/*  
            {/* so instead of all of this, we will just use <MovieCard/> */}
            {/* because this code will be called from the MovieCard.jsx file */}
            {/* but remember we have to pass in a prop called  */}
            {/* movie1={movie1} */}
            {/* we can dynamically pass movies and then 0 into 
                 movie1.like <MovieCard movie1 = {movies[0]} 
                  this will allow us to populate movies.
                 so now what we can do instead just leave it as {movies}
                 So above the container,we will put a dynamic block
                 of code and check if movies?.length is greater
                 than zero. if that is the case we want to render
                 our MovieCard then we take that movie card and put
                 it into movies?.length and then else so if there are
                 no movies we want to render something else which will be
                 a div and give it a classname equal to empty and then
                 create an h2 element inside of there that will say 
                 "no movies found" remember we have movies in our array
                 right now. we will only see this message if there are no
                 movies int he array. at this point we are only still
                 seeing one static card because 
                 we are using <MovieCard movie1 ={movie1} />
                 looks like:
                 {
                     movies?.length > 0 ? (
                         <div className="container">
                         <movieCard movie1 = {movie1} />
                         </div>
                     ) : (
                         <div className = "empty" >
                         <h2> no Movies Found </h2>
                         </div>
                     )
                 }

                 instead we must use 
                       {movies.map((movie) => (
                            <MovieCard />
                        ))}



                */}

            {movies?.length > 0
                ? (
                    <div className="container">
                        {/* <MovieCard movie1 ={movie1} />
                        so instead of showing the one single card
                        above we can open a dynamic block
                        of code {movies} and then map over movies
                        {movies.map} and then map over them. usally we
                        map over arrays which are plural, and then inside
                        of the map we will get a singular movie {movies.map((movie)
                        for each iteration of the map. so what we want to render for
                        for each iteration fo the map will be, a MovieCard component
                        <MovieCard/> but remember we need to pass a movie prop. so
                        let's pass a movie prop = to movie. it will look like
                        <MovieCard movie = {movie}/> , now this will be able to
                        dynamically change. so now we go back up in MovieCard and change
                        movie1 to movie and so now we are able to dynamically loop
                        over our movies array witch is fetched from an api we're takign each
                        indiviual movie and we're dynamically passing it as a prop to our MovieCard.
                        */}
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>

                )
            }

            {/* inside of this div we will have a classname = to movie 
            and inside of that div we will render a div and inside of that div 
            we will have a paragraph 
            */}
            {/* <div className="movie"> */}
            {/* <div> */}
            {/* here we want to show there year of the movie
                        so we will use movie1.year */}
            {/* <p>{movie1.Year}</p> */}
            {/* </div> */}

            {/* below this div we will create another div and 
                this will be a div that contains our image. so the img src
                will be equal to movie1.Poster and an alterntive tag that will be 
                equal to movie1.Title
                */}
            {/* <div> */}
            {/* add a check for the movie poster so if Poster is not
                    equal to 'N/A' (this is how this API declares movies that have no image)
                    then we can render a movie.poster but if there is no  then we can render
                    https://via.placeholder.com/400 this is a place holder image. remeber to define
                    Poster by using image1.Poster!-- 'N/A'
                    
                    ( Poster!== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400' ) 
                    */}
            {/* <img src={movie1.Poster!== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
                </div> */}

            {/* below this div we will add another div
                which will have a span element inside of it and there 
                and we can render movie1.Type so if you save an hover over
                it you will see it has the type of movie. another type could be
                a tv show. we also will render the title.
                */}
            {/* <div>
                    <span>{movie1.Type}</span>
                    <h3>{movie1.Title}</h3>
                    </div>
                    

                </div>
            */}

            {/* </div>  */}

            {/* We want to fetch the data for all the movies
            the first step will be extracting the code
            for this one movie into it's own custom component.
            the reason we want to do that is because we will have many
            cards that we will want to show. so we will create
            a custom component so we can do that in an almost single line
            So first we copy the entire dive with the class name of movie,
            create a new file inside of the src folder called MovieCard.jsx

            */}

        </div>
    );
}

export default App;