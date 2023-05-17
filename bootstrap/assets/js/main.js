const row = document.querySelector(".row") 
axios.get('https://api.disneyapi.dev/character').then(res =>{
    console.log(res.data.data[2]);
    for (let i = 0; i < res.data.data.length; i++) {
      row.innerHTML += `
        <div class="card m-4 " style="width: 18rem;">
        <img src="${res.data.data[i].imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${res.data.data[i].name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${res.data.data[i].name}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`
      
    }
})