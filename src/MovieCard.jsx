import React from 'react';

// normally we get access to the props by putting it in the () below
// and then we would have to do props.movie1.Year ect for each everytime
// we can use object destructuring so instead just destructre 
// the props, this means simply put a pair of curley braces
// inside const MovieCard = ({}) and then get something that
// you passed inside of those props so we put movie1. so inside
// of App.js we can import at the top MovieCard
// so now we go back up in MovieCard and change movie1 to movie
// so from : const MovieCard = ({ movie1 }) => {
//     return (
//         to
//         const MovieCard = ({movie})
const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div>
                {/* here we want to show there year of the movie
                        so we will use movie1.year at first as we check
                        for one particular movie. now we cna use move.Year
                        and the same with others
                <p>{movie1.Year}</p>*/}
                <p>{movie.Year}</p>
            </div>

            {/* below this div we will create another div and 
                this will be a div that contains our image. so the img src
                will be equal to movie1.Poster and an alterntive tag that will be 
                equal to movie1.Title
                */}
            <div>
                {/* add a check for the movie poster so if Poster is not
                    equal to 'N/A' (this is how this API declares movies that have no image)
                    then we can render a movie.poster but if there is no  then we can render
                    https://via.placeholder.com/400 this is a place holder image. remeber to define
                    Poster by using image1.Poster!-- 'N/A'
                    
                    ( Poster!== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400' ) 
                    
                <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
                */}
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>

            {/* below this div we will add another div
                which will have a span element inside of it and there 
                and we can render movie1.Type so if you save an hover over
                it you will see it has the type of movie. another type could be
                a tv show. we also will render the title.
                */}
            <div>
                {/* <span>{movie1.Type}</span>
                <h3>{movie1.Title}</h3> */}
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>



        </div>

    );

}

export default MovieCard;