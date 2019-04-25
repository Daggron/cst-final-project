
var name="";
var plane="";
var flight="";
var time="";


    function thanos() {
        name=document.getElementById('name_of').value;
        plane=document.visiting.flight_time.value;
        flight=document.visiting.flight_name.value;
        time=document.visiting.flight_sham.value;
        localStorage.setItem("Name",name);
        localStorage.setItem("plane",plane);
        localStorage.setItem("flight",flight);
        localStorage.setItem("time",time);
        window.location.replace('ticket.html');
        }


    function retrive() {
      //  console.log(localStorage.getItem("Name"));
       // console.log(localStorage.getItem("plane"));
        document.getElementById('name_here').innerHTML = localStorage.getItem("Name");
        document.getElementById('ticket_time').innerHTML=localStorage.getItem("plane");
        document.getElementById('ticket_name').innerHTML=localStorage.getItem("flight");
        document.getElementById('ticket_sham').innerHTML=localStorage.getItem("time");
    }

