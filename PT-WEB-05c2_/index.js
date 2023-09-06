let myform = document.querySelector("form");
myform.addEventListener("submit", function (e) {
  e.preventDefault();
  let inpName = document.getElementById("name").value;
  let docid = document.getElementById("docID").value;
  let depar = document.getElementById("dept").value;
  let exper = document.getElementById("exp").value;
  let myEmail = document.getElementById("email").value;
  let mob = document.getElementById("mb").value;

  let role;
  if (exper > 5) {
    role = "Senior";
  } else if (exper > 2 && exper < 5) {
    role = "Junior";
  } else {
    role = "Fresher";
  }

  let tbody1 = document.querySelector("tbody");
  let row = document.createElement("tr");
  let data = [inpName, docid, depar, exper, myEmail, mob, role];

  data.forEach((ele) => {
    let td1 = document.createElement("td");
    td1.innerText = ele;
    row.appendChild(td1);
  });
  

  let tdeelete = document.createElement("td");
  let tbtn = document.createElement("button");

  tbtn.innerText = "delete";
  tbtn.addEventListener("click", function () {
    tbody1.removeChild(row);
  });

  tdeelete.appendChild(tbtn);
  row.appendChild(tdeelete);
  tbody1.appendChild(row);
  tbtn.style.background = "red";

  document.getElementById("name").value = "";
  document.getElementById("docID").value = "";
  document.getElementById("dept").value = "";
  document.getElementById("exp").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mb").value = "";
  
});
