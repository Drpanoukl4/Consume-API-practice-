
let page = 1

const bs = document.getElementById("bs")
const ba = document.getElementById("ba")

ba.addEventListener("click", () => {
   
   if(page > 1){

      page -= 1; 
      loadmovie()

   }
})
bs.addEventListener("click", () => {
   
   if(page < 1000){

      page += 1; 
      loadmovie()

   }
})



const loadmovie = async() => {

    try{

        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=479a2e23617944d2739306a35ab90d96&page=${page}`)   


     if(res.status === 200){

        const data = await res.json()
     
        console.log(data.results)

        let movies = ''

        data.results.forEach(movie => { console.log(movie.title)});
        data.results.forEach(movie => { movies += `<div class="movie"> <img id="poster" class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"> <h3 class="title">${movie.title}</h3> <span class="tool">Pelicula ${movie.title}</span> </div>`});
        document.getElementById('cont').innerHTML = movies

     }else if(res.status === 401){

        console.log("Unauthorized")

     }else if(res.status === 404){

        console.log("Not Found")

     }else{

        console.log("Fatal Error")


     }

    }
    catch(error){

        console.log(error)

    }
    
}
loadmovie();
