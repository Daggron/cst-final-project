
var name="";


    function thanos() {
        name=document.getElementById('name_of').value;
        localStorage.setItem("Name",name);
        window.location.replace('ticket.html');
        }


    function retrive() {
        console.log(localStorage.getItem("Name"));
        document.getElementById('name_here').innerHTML = localStorage.getItem("Name");
    }
