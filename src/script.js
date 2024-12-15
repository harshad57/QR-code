let imgbox=document.querySelector(".imgbox");
let img=document.querySelector(".img");
let text=document.querySelector(".text");

function generateQR() {
if(text.value.length > 0) {
   img.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value; }
else{     
text.classList.add("error");
  }
}
