var scrollpos = window.scrollY;
var navbar = document.getElementById("navbar");

function add_class_on_scroll(){
  navbar.classList.add("navbar-small");
}

function remove_class_on_scroll(){
  navbar.classList.remove("navbar-small");
}

window.addEventListener("scroll", function(){
  //  Here you forget to update the value
  if(scrollpos > 10){
    add_class_on_scroll();

  }else{
    remove_class_on_scroll()

  }
  console.log(scrollpos)
});
  //  Get Year 

  document.getElementById("year").innerHTML = new Date().getFullYear();
