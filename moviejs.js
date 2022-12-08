// function promiseState(promise, callback) {
//     // Symbols and RegExps are never content-equal
//     var uniqueValue = window['Symbol'] ? Symbol('unique') : /unique/
//
//     function notifyPendingOrResolved(value) {
//         if (value === uniqueValue) {
//             return callback('pending')
//         } else {
//             return callback('fulfilled')
//         }
//     }
//
//     function notifyRejected(reason) {
//         return callback('rejected')
//     }
//
//     var race = [promise, Promise.resolve(uniqueValue)]
//     Promise.race(race).then(notifyPendingOrResolved, notifyRejected)
// }



// $( document ).ready(function() {
const movieKey = apikey; //
const url = "https://stirring-vaulted-laundry.glitch.me/movies";

//This gets the live update of the POST request
fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))


//Btn search by either value of the search, title, year, or plot.
$('#submit-btn').click((event) => {
    event.preventDefault();
    let search = $('#search').val()
    getMovies(search);
});


//+++++++++++++++++++++++++++++++++++++++++++++GET ME +++++++++++++++++++++++++++++++++++++++++++++


const getMovies = (search) => {
    console.log(search);
    let promise = fetch(`https://www.omdbapi.com?apikey=${movieKey}&s=${search}`)
        // if (promise ===)
        .then(response => response.json())//then... return json
        .then(function (data) { //then return data
            console.log('get data', data);
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
        console.log(" Get data: ", data[i])
        const {Title, Year, Poster, imdbID, Type} = data[i]
        html +=
            `<div class="container parent${i++}" id="parent${i++}">
                         <button type="button" class="btn-close remove-card" id="delete" onclick="deleteMovie(event);parentNode.remove()"></button> <br>
                         <div class="card" style="width: 25rem;">
                         <img src="${Poster}" class="card-img-top" alt="${Poster}">
                         <div class="card-body">
                        <h5 class="card-title"><p>Movie Title: ${Title}</p></h5>
                         <p>Year: ${Year}</p>
                         <p>Movie ID: ${imdbID}</p>
                         <p>Type: ${Type}</p>
                         </div>
                         </div>
                         </div>`;

    }
    return html
}



//+++++++++++++++++++++++++++++++++++++++++++++POST ME+++++++++++++++++++++++++++++++++++++++++++++

function postMovie (movie) {
    movie.preventDefault()
//TODO: get the length of database (data)
//     console.log("hello")
    // movie.preventDefault()
    const movieObj = {title: `${movie.target[0].value}`, body: '2'}
    const option =   {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObj),
    };
    console.log('post option', option)
    fetch(url, option)
        .then(response => response.json())
        .then(function (data) {
            alert('Post successful')
            console.log('data', data);
        })
        .catch((error) => {
            console.log(error);
        })

}
let post= document.getElementById('new-movie')
post.addEventListener('submit', postMovie)



//+++++++++++++++++++++++++++++++++++++++++++++PUT ME+++++++++++++++++++++++++++++++++++++++++++++



// function putMovie (id) {
//     movie.preventDefault()
//
//     console.log("hello")
//     // movie.preventDefault()
//     const movieObj = {title: "Hello", body: '3'}
//     const option =   {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(movieObj),
//     };
//     console.log('put option', option)
//     fetch(`https://invented-fantastic-sense.glitch.me/movies/${id}`, option)
//         .then(response => response.json())
//         .then(function (data) {
//             alert('movie was good to watch')
//             console.log('data', data);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//
// }
//
//
// let inputMovie= document.getElementById('new-movie')
// inputMovie.addEventListener('submit', putMovie)

//+++++++++++++++++++++++++++++++++++++++++++++DELETE ME+++++++++++++++++++++++++++++++++++++++++++++

function deleteMovie(search) {
    search.preventDefault()
    console.log("hello")
    const movieObj = {title: "Hello", body: '1'}
    const url = "https://www.round-walnut-snow.glitch.me"
    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObj),
    };
    console.log('delete option', option)
    fetch(`${url}${search}`, option)
        // fetch(url, option)
        .then(response => response.json())
        .then(function (data) {
            alert(`was deleted`)
            console.log(' delete data', data);
        })
        .catch((error) => {
            alert('could not delete');
            console.log(error);
        })

}





//-------------------------------FETCH REQUEST LOADING ANIMATION-----------------------------------
// // selecting dom element
//     const textInput = document.querySelector("#inputPart");
// const textOutput = document.querySelector("#showOutput");
// const btn = document.querySelector("#submitInput");
//
// // adding event listener to button
// btn.addEventListener("click", fetchHandler);
//
// // selecting loading div
// const loader = document.querySelector("#loading");
//
// // showing loading
// function displayLoading() {
//     loader.classList.add("display");
//     // to stop loading after some time
//     setTimeout(() => {
//         loader.classList.remove("display");
//     }, 5000);
// }
//
// // hiding loading
// function hideLoading() {
//     loader.classList.remove("display");
// }
//
// // dummy url
// const url = "https://www.neighborly-delirious-fin.glitch.me/movies"
//
// function fetchHandler(event) {
//     displayLoading()
//     let input = textInput.value;
//     let finalURL = buildURL(input);
//
//     fetch(finalURL)
//         .then(response => response.json())
//         .then(json => {
//             hideLoading()
//             textOutput.innerText = json.contents.translated;
//         })
// }
// // creating url format
// // we need
// // https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="your input"
//
// function buildURL(inputData) {
//     return `${url}?text=${inputData}`;
// }
//