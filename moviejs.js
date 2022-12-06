(function(){
    "use strict"

    const movieKey = apikey;
    const url = "https://www.round-walnut-snow.glitch.me";





    const getMovies = (search) => {
        search.preventDefault()
        // console.log(search.target[0].value)
        // console.log('hello')
        fetch(`https://www.omdbapi.com?apikey=${movieKey}&s=${search.target[0].value}`)
            .then(response => response.json())
            .then(function (data) {
                console.log('data', data);

                let movie = data.Search;
                let appendMovies = append(movie)
                $('#append-movies').html(appendMovies)  //I want to take the results and place it in the div w/ ID of movies
            })
            .catch((error) => {
                console.log(error);
            })
    }

    let append = function (data) {
        let html = ``
        for (let i in data) {
            console.log("Data: ", data[i])
            const {Title, Year, Poster, imdbID, Type} = data[i]
            html += `<div>
                         <img src="${Poster}">
                         <p>Movie name: ${Title}</p>
                         <p>Movie Year: ${Year}</p>
                         <button id="delete">Delete</button>
                 
            </div>`
        }
        return html
    }

    let form = document.getElementById('search');
    form.addEventListener('submit', getMovies)



    function putMovie (movie) {
        movie.preventDefault()

        console.log("hello")
        // movie.preventDefault()
        const movieObj = {title: "Hello", body: '1'}
        const option =   {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieObj),
        };
        console.log('option', option)
        fetch(url, option)
            .then(response => response.json())
            .then(function (data) {
                alert('movie was good to watch')
                console.log('data', data);
            })
            .catch((error) => {
                console.log(error);
            })

    }
    let inputMovie= document.getElementById('new-movie')
    inputMovie.addEventListener('submit', putMovie)









})();