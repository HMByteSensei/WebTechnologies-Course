function calculateVolume(event) {
  event.preventDefault();

  const radiusInput = document.getElementById("radius");
  const volumeInput = document.getElementById("volumen");

  const radius = parseFloat(radiusInput.value);
  if (isNaN(radius) || radius <= 0) {
    alert("Unesite validan poluprečnik!");
    return;
  }

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volumeInput.value = volume.toFixed(4);
}
