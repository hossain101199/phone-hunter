const input =document.getElementById("inpute-value").value;
const resultContainer =document.getElementById("result-container")

const searchbutton=()=>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=${input}`)
    .then(res => res.json())
    .then(data => phoneResult(data.data))
}

const phoneResult =(phones)=>{
for(const phone of phones){
    console.log(phone.brand)
    console.log(phone.phone_name)
const div = document.createElement("div");
div.classList.add("col-lg-4");
div.classList.add("mb-2");
div.innerHTML=`
<div class="card border-primary m-3" style="width: 18rem;">
        <img src="${phone.image}" style="width: 14rem;" class="card-img-top img-fluid m-3">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <h6 class="card-text">Brand: ${phone.brand}</h6>
          <a class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
`
resultContainer.appendChild(div);
}
}

