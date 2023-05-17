const main = document.querySelector(".container")
axios.get('https://api.tvmaze.com/shows').then(res =>{
    for (let i = 0; i < res.data.length; i++) {
        // console.log(res.data[i]);
        main.innerHTML += `
        <div class="card m-4" style="width: 18rem;">
            <img src="${res.data[i].image.medium}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${res.data[i].name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${res.data[i].rating.average}</li>
              <li class="list-group-item">${res.data[i].language}</li>
            </ul>
            <div class="card-body">
              <button class="btn btn-outline-primary"> <a href="">See More</a></button>
            </div>
          </div>`
    }
})