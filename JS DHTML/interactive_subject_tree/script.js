let prva = document.getElementById("prva");
let druga = document.getElementById("druga");

prva.addEventListener("click", function () {
  toggleYear("prva");
});
druga.addEventListener("click", function () {
  toggleYear("druga");
});

function toggleYear(year) {
  const yearDiv = document.getElementById(year);
  const plusSpan = yearDiv.querySelector("span");

  if (plusSpan.textContent === "+") {
    plusSpan.textContent = "-";
    displaySubjects(year);
  } else {
    plusSpan.textContent = "+";
    removeSubjects(year);
  }
}

function displaySubjects(year) {
  let subjectsDiv = document.createElement("div");
  subjectsDiv.classList.add("subjects");

  let subjects = [];
  if (year === "prva") {
    subjects = ["IM1", "IFI", "TP", "OE"];
  } else if (year === "druga") {
    subjects = ["DM", "OBP", "TP", "RPR"];
  }

  subjects.forEach((subject) => {
    let p = document.createElement("p");
    p.textContent = subject;
    subjectsDiv.appendChild(p);
  });

  year === "prva"
    ? prva.appendChild(subjectsDiv)
    : druga.appendChild(subjectsDiv);
}

function removeSubjects(year) {
  let subjectsDiv =
    year === "prva"
      ? prva.querySelector(".subjects")
      : druga.querySelector(".subjects");
  if (subjectsDiv) {
    subjectsDiv.remove();
  }
}
