
let error =document.getElementById("errormsg");
const resultContainer =document.getElementById("result-container");
// search .................................................................................................................
const searchbutton=()=>{
  resultContainer.innerHTML="";
    let input =document.getElementById("inpute-value").value;
    if(input==""){
        error.innerHTML=`<h4>You have to search by name</h4>`;
    }
    else{
        fetch(`https://openapi.programming-hero.com/api/phones?search=${input}`)
        .then(res => res.json())
        .then(data => phoneResult(data.data))
        input="";
        error.innerHTML="";
    }
}

const phoneResult =(phones)=>{
if(phones == ""){
  console.log("ball")
  const h4 = document.createElement("h4");
  h4.innerText=`Sorry, we didn't find any phone`;
  resultContainer.appendChild(h4);
}
else{
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
          <a href="#" onclick="seeDetailsbutton('${phone.slug}')" class="btn btn-primary">See Details</a>
        </div>
      </div>
`;
resultContainer.appendChild(div);
}
}
}
// see details ..............................................................................
const seeDetailsbutton = (slug)=>{
  error.innerHTML="";
fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
        .then(res => res.json())
        .then(data => seeDetailsbox(data.data))
}

const seeDetailsbox =(allinfo)=>{
    const div = document.createElement("div");
    div.classList.add("col-12");
    div.classList.add("mb-2");
    div.innerHTML=`
    <div class="card border-info m-3">
            <img src="${allinfo.image}" style="width: 14rem;" class="card-img-top img-fluid m-3">
            <div class="card-body">
              <h5 class="card-title">${allinfo.name}</h5>
              <h6 class="card-text"><b>Brand:</b> ${allinfo.brand}</h6>
              <p class="card-text"><b>Release Date:</b> ${allinfo.releaseDate}</p>
              <p class="card-text"><b>Sensors:</b> ${allinfo.mainFeatures.sensors}</p>
              <p class="card-text"><b>Chip Set:</b> ${allinfo.mainFeatures.chipSet}</p>
              <p class="card-text"><b>Display Size:</b> ${allinfo.mainFeatures.displaySize}</p>
              <p class="card-text"><b>Memory:</b> ${allinfo.mainFeatures.memory}</p>
              <p class="card-text"><b>Storage:</b> ${allinfo.mainFeatures.storage}</p>
              <p class="card-text"><b>Others:</b> <u>Bluetooth:</u> ${allinfo?.others?.Bluetooth}, <u>GPS:</u> ${allinfo?.others?.GPS}, <u>NFC:</u> ${allinfo?.others?.NFC}, <u>Radio:</u> ${allinfo?.others?.Radio}, <u>USB:</u> ${allinfo?.others?.USB}, <u>WLAN:</u> ${allinfo?.others?.WLAN},</p>
            </div>
          </div>
    `
    error.appendChild(div);
}