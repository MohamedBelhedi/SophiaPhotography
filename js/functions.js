function bilder()
{

var bilder=document.querySelector('.bilder')




// if(bilder)

// {


//     alert("Hallo ich Bin Sophia Nofz")


// }


}


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
    text: "Mit dem Klicken auf dem Whatapp Button erklären Sie sich damit einverstanden, das sie diesen Service der Facebook Gruppe nutzen um mit mir zu kommunizieren, wenn Sie diese nicht wünschen dann bitte auf abbrechen Klicken",
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