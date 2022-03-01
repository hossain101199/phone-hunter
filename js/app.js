
let error =document.getElementById("errormsg");
const resultContainer =document.getElementById("result-container");

const searchbutton=()=>{
    let input =document.getElementById("inpute-value").value;
    if(input==""){
        error.innerText="You have to search by name";

        input="";
        resultContainer.innerHTML="";
    }
    else{
        resultContainer.innerHTML="";
        fetch(`https://openapi.programming-hero.com/api/phones?search=${input}`)
        .then(res => res.json())
        .then(data => phoneResult(data.data))

        input="";
        error.innerText="";
        
    }
}

const phoneResult =(phones)=>{
const the20Result = phones.slice(0, 20);
for(const phone of the20Result){
const div = document.createElement("div");
div.classList.add("col-lg-4");
div.classList.add("mb-2");
div.innerHTML=`
<div class="card border-primary m-3" style="width: 18rem;">
        <img src="${phone.image}" style="width: 14rem;" class="card-img-top img-fluid m-3">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <h6 class="card-text">Brand: ${phone.brand}</h6>
          <a class="btn btn-primary">See Details</a>
        </div>
      </div>
`
resultContainer.appendChild(div);
}
}


// fetch(`https://openapi.programming-hero.com/api/phones?search=`)
//         .then(res => res.json())
//         .then(data => console.log(data.data))

// fetch(`https://openapi.programming-hero.com/api/phone/apple_iphone_13_mini-11104`)
//         .then(res => res.json())
//         .then(data => console.log(data))