// function bilder()
// {

// var bilder=document.querySelector('.bilder')




// // if(bilder)

// // {


// //     alert("Hallo ich Bin Sophia Nofz")


// // }


// }


function insta()
{

window.open("https://instagram.com/sophialouise_fotografie?utm_medium=copy_link","_blank")


}


function whatsapp()
{

// var message=confirm("Mit dem Klicken auf dem Whatapp Button erklären Sie sich damit einverstanden, das sie diesen Service der Facebook Gruppe nutzen um mit mir zu kommunizieren, wenn Sie diese nicht wünschen dann bitte auf abbrechen Klicken")
var text='Hallo Meine Name......., ich möchte einen Fotoshooting'

Swal.fire({
    title: 'Sicher das du über Whatapp mit mir Kommunzieren willst?',
    text: "Mit dem Klicken auf dem Whatapp Button erklären Sie sich damit einverstanden, das sie diesen Service der Facebook-Meta Gruppe nutzen um mit mir zu kommunizieren, wenn Sie diese nicht wünschen dann bitte auf abbrechen Klicken",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Nein',
    confirmButtonText: 'Ja '
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Danke',
        'Du wirst zu meinem Whatapp Chat weitergeleitet',
        'success'
        
      )
      
    setTimeout(function(){

        window.open("https://wa.me/4915757814627?text="+text,"_blank")




    },2300)

    }
  })


// if(message)
// {

//     window.open("https://wa.me/4915757814627?text="+text,"_blank")


// }else
// {

// return false;

// }






}

let modal1=document.querySelector(".modal1")
let modal2=document.querySelector(".modal2")
let modal3=document.querySelector(".modal3")

let bild1=document.getElementById("bild1")
let bild2=document.getElementById("bild2")
let bild3=document.getElementById("bild3")
let bild4=document.getElementById("bild4")

let close1=document.querySelector("#close1")
let close2=document.querySelector("#close2")
let close3=document.querySelector("#close3")
let close4=document.querySelector("#close4")


function modal_open1(){modal1.showModal()}
function modal_open2(){modal2.showModal()}
function modal_open3(){modal3.showModal()}
function modal_open4(){modal4.showModal()}

function close_modal1(){modal1.close();console.log("zu1")}
function close_modal2(){modal2.close();console.log("zu2")}
function close_modal3(){modal3.close();console.log("zu3")}
function close_modal4(){modal4.close();console.log("zu4")}

function service(){

bild1.addEventListener("click",modal_open1)
bild2.addEventListener("click",modal_open2)
bild3.addEventListener("click",modal_open3)
bild4.addEventListener("click",modal_open4)

close1.addEventListener("click",close_modal1)
close2.addEventListener("click",close_modal2)
close3.addEventListener("click",close_modal3)
close4.addEventListener("click",close_modal4)





  // dann hier modals öffnen lassen für service
  // bild.forEach(()=>{

  //   bild[0].addEventListener("click",()=>{modal_open1;console.log("hi1")})
  //   bild[1].addEventListener("click",()=>{modal_open2;console.log("hi2")})
  //   bild[2].addEventListener("click",()=>{modal_open2;console.log("hi3")})
  //   bild[3].addEventListener("click",()=>{modal_open2;console.log("hi4")})
    

  // })

  }
  function webseiten1(){window.open("https://www.google.de")}
  function webseiten2(){window.open("https://www.codepen.io")}
  function webseiten3(){window.open("https://www.stackoverflow.com")}

  
  function links(){

  let links=document.querySelectorAll("#link")

    links.forEach(()=>{

      links[0].addEventListener("click",webseiten1)
      links[1].addEventListener("click",webseiten2)
      links[2].addEventListener("click",webseiten3)



    })



  }



// var bild=document.querySelectorAll("img")

// for(var i=0; i<bild.length;i++)
// {


//   bild[i].addEventListener("click",service)
//   // bild[2].addEventListener("click",service)
//   // bild[3].addEventListener("click",service)



// }
service();
links();

