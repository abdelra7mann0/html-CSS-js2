let vector = document.getElementById("vectorr")
let collection = document.querySelectorAll(".vect");
let collection2 = document.querySelectorAll(".raster");
let collection3 = document.querySelectorAll(".ui");
let collection4 = document.querySelectorAll(".printing");
let collection5 = document.querySelectorAll(".card");


let h = document.getElementById("home")
let p = document.getElementById("Portfiolio")
let s = document.getElementById("Services")
let t = document.getElementById("Testimonial")


let roww = document.getElementById("row")
let rast = document.getElementById("raster")
let uii = document.getElementById("ui")
let printt = document.getElementById("printing")
let activee = document.getElementById("active")
let arr =document.getElementById("arrow")
let submitt =document.getElementById("submit")

let emm = document.getElementById("em")


///// bar sow/hide nav in mediascreen
document.getElementById("hdbar").onclick=()=>{
    

    if(document.getElementById("hdul").style.display== "none"){
        document.getElementById("hdul").style.display= "block"
    }else{
        document.getElementById("hdul").style.display= "none"
    }
}
/////


//// fixed navbar when you down
window.onscroll=()=>{
    if(document.documentElement.scrollTop > 100 && window.matchMedia("(min-width: 1000px)")){
        document.getElementById("navv").classList.add("onscroll")
    }else{
        document.getElementById("navv").classList.remove("onscroll")

    }
   

}
/////


//// scroll ul li navbar 
h.onclick=()=>{
    window.scroll({
        top: 0,
        behavior: "smooth",
      });
}




p.onclick=()=>{
    window.scroll({
        top: 800,
        behavior: "smooth",
      });
}

s.onclick=()=>{
    window.scroll({
        top: 2900,
        behavior: "smooth",
      });
}
t.onclick=()=>{
    window.scroll({
        top: 3900,
        behavior: "smooth",
      });
}
//////



///////section cards show
vector.onclick=()=>{
    vector.classList.add("active")
    rast.classList.remove("active")
    uii.classList.remove("active")
    printt.classList.remove("active")
    activee.classList.remove("active")




    roww.innerHTML = "";
    for(let z=0 ; z < collection.length ; z++){

        roww.innerHTML+=collection[z].outerHTML
      }
}


rast.onclick=()=>{

    vector.classList.remove("active")
    rast.classList.add("active")
    uii.classList.remove("active")
    printt.classList.remove("active")
    activee.classList.remove("active")


    roww.innerHTML = "";
    for(let z=0 ; z < collection2.length ; z++){

        roww.innerHTML+=collection2[z].outerHTML
      }
}




uii.onclick=()=>{
    vector.classList.remove("active")
    rast.classList.remove("active")
    uii.classList.add("active")
    printt.classList.remove("active")
    activee.classList.remove("active")


    roww.innerHTML = "";
    for(let z=0 ; z < collection3.length ; z++){

        roww.innerHTML+=collection3[z].outerHTML
      }
}






printt.onclick=()=>{
    vector.classList.remove("active")
    rast.classList.remove("active")
    uii.classList.remove("active")
    printt.classList.add("active")
    activee.classList.remove("active")

    roww.innerHTML = "";
    for(let z=0 ; z < collection4.length ; z++){

        roww.innerHTML+=collection4[z].outerHTML
      }
}







activee.onclick=()=>{
    vector.classList.remove("active")
    rast.classList.remove("active")
    uii.classList.remove("active")
    printt.classList.remove("active")
    activee.classList.add("active")

    roww.innerHTML = "";
    for(let z=0 ; z < collection5.length ; z++){

        roww.innerHTML+=collection5[z].outerHTML
      }
}


//////

// window.onscroll=()=>{
//      console.log(window.scrollY)
// }

   

arr.onclick=()=>{
 if(emm.value == ""){
    emm.style.border="2px solid red"
    submitt.style.display="none"

 }else{
    submitt.style.display="block"
     emm.style.border="none"

 }

}

emm.oninput=()=>{
    emm.style.border="none"

}
