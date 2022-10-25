    // get the modal
    var modal = document.getElementById("myModal");
    // get the btn that opens the modal
    var btn = document.getElementById("myBtn");
    // get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // when the suer clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }
    // when the user clicks on the <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
        // when the user clicks anywhere outside the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    
        }