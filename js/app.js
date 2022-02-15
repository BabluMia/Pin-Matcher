function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length != 3) {
    return pin;
  } else {
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}
document.getElementById("key-pad").addEventListener("click", function (event) {
  let number = event.target.innerText;
  let pinInput = document.getElementById("type-pin");
  if (isNaN(number)) {
    if (number == "C") {
      pinInput.value = "";
    }
  } else {
    let previousNumber = pinInput.value;
    let newNumber = previousNumber + number;
    pinInput.value = newNumber;
  }
});
document.getElementById("match").style.display = "none";
document.getElementById("not-match").style.display = "none";
function verifyPin() {
  let genPin = document.getElementById("display-pin").value;
  let typedPin = document.getElementById("type-pin").value;
  if (genPin == typedPin) {
    document.getElementById("match").style.display = "block";
    document.getElementById("not-match").style.display = "none";
  }else{
    document.getElementById('match').style.display = 'none';
    document.getElementById('not-match').style.display = 'block';
  }
}
