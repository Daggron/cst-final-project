function thanos() {

    setTimeout(function () {
        window.location.replace("index.html");

    },3000)

}

function change() {
    window.location.replace("index.html");

}



let  x= new Date();
let year = x.getFullYear();
year=year+"";
document.getElementById('year').innerHTML='<h1> '+year+' </h1>';


