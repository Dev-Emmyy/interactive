


function submit() {
    document.getElementById("img").style.display = "block";
    let selectedEL = document.getElementById("selected-num")
    let thankEL = document.getElementById("thank-you")
    let appreciateEL = document.getElementById("appreciate")



    let output = "You selected 4 out 0f 5"
    let thank = "Thank you!"
    let message = "We appreciate you taking the time to give a rating.if you ever ned more support, don't hesitate to get in touch!"

    selectedEL.textContent = output
    thankEL.textContent = thank
    appreciateEL.textContent = message

}