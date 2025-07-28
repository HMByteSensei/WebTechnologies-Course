function promijeniBoju() {
  const paragrafi = document.querySelectorAll("p"); 
  paragrafi.forEach((paragraf) => {
    paragraf.style.backgroundColor = "red";
  });
}
