
console.log(window.innerWidth);

    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                if (!items[i].classList.contains("in-view")) {
                    items[i].classList.add("in-view");
                }
            }
        }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);




    function additional() {
        var listCode='';
        var count=document.getElementById('members').value;
        for (var i = 0; i < count; i++) {
            var listID = 'list_' + i.toString();
            var divID = 'div_' + i.toString();
            listCode +='<div><label>Name:</label><br> <input type= "text" name="members_name" placeholder="Members Name"/> <label>Age:</label><input type= "text" name="members_name" placeholder="Members Age"/> </div>';
        }
        document.getElementById('additional-members').innerHTML = listCode;
        document.getElementById('book-flights').style.height=(150+count*10)+"vh";


    }


    function focus_grab() {
        document.getElementById(this).style.border='3px solid #e6891d';

    }

    var name;

  function throw_name() {
      window.location.replace("ticket.html");
  }

  window.onload()
