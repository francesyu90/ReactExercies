import React, { Component } from 'react';

class ListMoviesI extends Component {

    processData() {

        const movies = this.props.movies;

        var data = [];

        Object.keys(movies).map(key => {

            const movie = movies[key];

            const filteredProfiles = this.props.profiles.filter(profile => profile.favoriteMovieID == movie.id);

            const filteredUsers = filteredProfiles.map(profile => this.props.users[profile.userID]);

            const obj = {
                id: movie.id,
                movie: movie.name,
                users: filteredUsers
            }

            data.push(obj);
        })

        console.log(data);
        return data;
    }

    printUsers(users) {

        if(users.length == 0) {
            return <p>None of the current users liked this movie</p>;
        } else {
            return <div><p>Liked By:</p>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul></div>;
        }
    }

    render() {
        return (
            this.processData().map((data) => (
                <div key={data.id}>
                    <h2>{data.movie}</h2>
                    {this.printUsers(data.users)}
                </div>
            ))
        );
    }
}

export default ListMoviesI;