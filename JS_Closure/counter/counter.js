let brojacModul = (function () {
  let brojac = 0;

  return {
    dodaj: function () {
      return (brojac += 1);
    },
    resetuj: function () {
      brojac = 0;
      return brojac;
    },
  };
})();

console.log(brojacModul.dodaj()); // 1
console.log(brojacModul.dodaj()); // 2
brojacModul.resetuj(); // 0
