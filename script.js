document
  .getElementById("converterForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const temperature = parseFloat(
      document.getElementById("temperature").value
    );
    const scaleFrom = document.getElementById("scaleFrom").value;
    const scaleTo = document.getElementById("scaleTo").value;

    let result;

    if (scaleFrom === scaleTo) {
      result = temperature;
    } else if (scaleFrom === "celsius" && scaleTo === "fahrenheit") {
      result = (temperature * 9) / 5 + 32;
    } else if (scaleFrom === "celsius" && scaleTo === "kelvin") {
      result = temperature + 273.15;
    } else if (scaleFrom === "fahrenheit" && scaleTo === "celsius") {
      result = ((temperature - 32) * 5) / 9;
    } else if (scaleFrom === "fahrenheit" && scaleTo === "kelvin") {
      result = ((temperature - 32) * 5) / 9 + 273.15;
    } else if (scaleFrom === "kelvin" && scaleTo === "celsius") {
      result = temperature - 273.15;
    } else if (scaleFrom === "kelvin" && scaleTo === "fahrenheit") {
      result = ((temperature - 273.15) * 9) / 5 + 32;
    } else {
      result = "Kesalahan dalam konversi";
    }

    document.getElementById(
      "resultText"
    ).textContent = `Nilai suhu dalam ${scaleTo} adalah ${result.toFixed(2)}`;
    document.getElementById("result").style.display = "block";
  });
