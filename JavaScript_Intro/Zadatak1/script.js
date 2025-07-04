let odgovor = prompt("Unesite neki tekst", "Primjer nekog teksta (default)");
let obrnuto = "";
for (let i = odgovor.length - 1; i >= 0; i--) {
  obrnuto += odgovor[i];
}
if (odgovor != null && odgovor != "") {
  let r = confirm(
    "Pritisnite OK da prikažete ime u alert box-u, ili Cancel za prikaz direktno na stranici"
  );
  if (r) {
    alert(obrnuto);
  } else {
    document.write(obrnuto);
  }
}
