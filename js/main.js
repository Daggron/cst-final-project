function thanos() {

    setTimeout(function () {
        window.location.replace("home.html");

    },3000)

}

function change() {
    window.location.replace("home.html");

}



let  x= new Date();
let year = x.getFullYear();
year=year+"";
document.getElementById('year').innerHTML='<h1> '+year+' </h1>';


