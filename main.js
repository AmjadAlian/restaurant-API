var httpRequest = new XMLHttpRequest();
var recipes = [];
function getFood(category) {
    httpRequest.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${category}`);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4) {
            recipes = JSON.parse(httpRequest.response).recipes;
            printData();
        }
    }
}

function printData() {
    var data = "";
    for (var i = 0; i < recipes.length; i++) {
        data += `
        <div class="col-lg-3">
        <h2>${recipes[i].title}</h2>
        <img src ="${recipes[i].image_url}" class= "img-fluid"></>
        <p>${recipes[i].social_rank} </p>
        <a href ="restaurant.html?rId=${recipes[i].recipe_id}"> read more </a>
        </div>`;
    }
    document.getElementById("postSection").innerHTML = data;
}
var allLinks = document.querySelectorAll(".btn");
for (var i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener('click', function (e) {
        getFood(e.target.innerHTML);
    })
}

var url = document.URL;
var newUrl=new URL(url);
var searchId = newUrl.searchParams;
var food_id = searchId.get('rId');
console.log(food_id);
var httpIdRequest = new XMLHttpRequest();
var recipes_id = [];
function getId(food_id) {
    httpIdRequest.open("GET", `https://forkify-api.herokuapp.com/api/get?rId=${food_id}`);
    httpIdRequest.send();
    httpIdRequest.onreadystatechange = function () {
        if (httpIdRequest.readyState == 4) {
        recipes_id = JSON.parse(httpIdRequest.response).recipe;
        console.log(recipes_id);
        printIdData();
    }

}

}
function printIdData() {
    var id_data = "";
        id_data += `
        <div class="col-lg-3">
        <h2> ${recipes_id.title} </h2>
        <p>${recipes_id.source_url} </p>
        <img src ="${recipes_id.image_url}" class= "img-fluid"></>
        <p>${recipes_id.publisher_url} </p>
        </div>`;
    
    document.getElementById("Id_data").innerHTML=id_data;

}
getId(food_id);
