let row = document.querySelector(".row");

fetch('https://api.disneyapi.dev/character').then(resp => resp.json()).then(list => {


list.data.forEach(element => {
  row.innerHTML += ` 
  <div class="col-3">
   <div class="card" style="width: 18rem;">
   <img class="w-100"  height="250px" src="${element.imageUrl}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${element.name}</h5>
         <a href="#" class="btn btn-primary">Details</a>
       </div>
       </div>
     </div>`
    console.log(element._id);
})
}
)
 


