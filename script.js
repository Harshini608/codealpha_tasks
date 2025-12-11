let display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", function (e) {
  if (/[0-9+\-*/.]/.test(e.key)) {
    appendValue(e.key);
  }
  if (e.key === "Enter") {
    calculate();
  }
  if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
});

