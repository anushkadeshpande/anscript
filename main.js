const terminalInput = document.querySelector(".terminal-input");

const terminalHistory = document.querySelector(".terminal-history");

terminalInput.style.borderRight = "10px solid #fff";
terminalInput.focus();


// focus on input on clicking anywhere on the screen
window.addEventListener('click', () => {
  terminalInput.focus()
})

var ipText = "";
const inputHandler = (e) => {
  if (e.key == "Enter") {
    terminalInput.innerText = ""
    terminalInput.style.width = '0px'
    terminalHistory.innerHTML += `<li>> ${ipText}</li>`
    handleCommand(ipText)
    ipText = ""

  } else if (e.key.length === 1) {
    ipText += e.key;
    terminalInput.style.width = ipText.length == 0 ? 1 * 10 + "px" : ipText.length * 9 + "px";
  } else if (e.key === "Backspace") {
    ipText = ipText.slice(0, -1);
    terminalInput.style.width = ipText.length == 0 ? "10px" : ipText.length * 9 + "px";
  }
  else {
    console.log("do nothing")
  }
};

terminalInput.addEventListener("keydown", inputHandler);

const pingResponses = ["Yeah! I'm listening. Go ahead!", "Am I audible?", "Hi! How can I help you?", "Ya! What do you want now?", "Hmm?"]


const invalidResponses = ["Sorry I didn't catch that!", "Huh?", "Huh? Come again?", "Pardon?", "I do not understand", "What are you trying to say?", "Invalid command!"]


const handleCommand = command => {
  console.log(command)
  let response = ""
  if(command == "anna ping") {
    response =  pingResponses[Math.floor(Math.random() * pingResponses.length)]
  }

  else if(command == "anna -n") {
    response = "Anushka"
  }

  else if(command == "anna -v") {
    let birthDate = new Date("09/08/2000")
    let today = new Date()
    let diff = today.getTime() - birthDate.getTime()
    let diffDate = diff / (1000 * 3600 * 24)
    let diffYears = Math.floor(diffDate / 360)
    let remainingDays = Math.floor(diffDate % 360)
    let remainingMonths = Math.floor(remainingDays / 30)
    let remains = Math.floor(remainingDays % 30)
    response = diffYears+"."+remainingMonths+"."+remains
  }

  else 
    response =  invalidResponses[Math.floor(Math.random() * invalidResponses.length)]
  logResponse(response)
}


const logResponse = response => {
  terminalHistory.innerHTML += ""
  terminalHistory.innerHTML += `<li> ${response}</li>`
}