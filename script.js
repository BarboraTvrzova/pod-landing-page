const mail = document.querySelector("#mail")
const button = document.querySelector("button")
const hidden = document.querySelector(".wrong-mail")

function ValidateEmail(mail) {
  button.disabled = false
  var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
  
  if(mail.value.match(mailformat)) {
    console.log("valid email")
    button.disabled = false
    hidden.classList.add("hidden")
    return true
  }
  else {
    console.log("invalid email")
    button.disabled = true
    hidden.classList.remove("hidden")
    // document.querySelector(".main-content").addEventListener("click", (e) => {
    //   if(!e.target.classList.contains("mail")) {
    //     button.disabled = false;
    //     hidden.classList.add("hidden")
    //     mail.value = ""
    //   }
    // })
    return false
  }
}