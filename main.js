let tittle = document.getElementById("tittle");
let disc = document.getElementById("disc");

let notesEql = document.getElementById("notes");
let notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((element) => {
    addNotes(element);
  });
}

let submit = document.getElementById("submit");
submit.addEventListener("click", subMit);

function subMit(e) {
  e.preventDefault();
  addNotes();
}

function addNotes(obj) {
  let tittleVal = tittle.value;
  let discVal = disc.value;

  if (obj) {
    tittleVal = obj.tittle;
    discVal = obj.disc;
  }

  let card = document.createElement("div");
  card.classList.add("card", "card-list");

  if (tittleVal) {
    card.innerHTML = `
  <h5 class="card-header">${tittleVal}</h5>
      <div class="card-body disc-body">
        <p class="card-text">${discVal}</p>
      </div>
      <div class="card-footer text-muted d-flex justify-content-between">
      <button class="btn btn-success edit">Edit</button>
      <button class="btn btn-danger del">Delete</button>
  </div>
  `;
    notesEql.appendChild(card);
    updateLST();
  }
  let clear = card.querySelector(".del");
  clear.addEventListener("click", () => {
    card.remove();
    updateLST();
  });
}

function updateLST() {
  let card = document.querySelectorAll(".card-list");
  let arr = [];

  card.forEach((element) => {
    arr.push({
      tittle: element.children[0].innerText,
      disc: element.children[1].innerText,
    });
  });

  localStorage.setItem("notes", JSON.stringify(arr));
}
