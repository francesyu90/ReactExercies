import React, { Component } from 'react';

class ListMovies extends Component {

    processData(profile, movies, users) {
        return `${users[profile.userID].name}'s favorite movie is ${movies[profile.favoriteMovieID].name}`;
    }

    render() {
        return(
           <ol>
               {this.props.profiles.map((profile) => (
                    <li key={profile.id}>
                       {this.processData(profile, this.props.movies, this.props.users)}
                   </li>
               ))}
           </ol>
        );
    }

}

export default ListMovies;