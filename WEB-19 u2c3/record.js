// fill in javascript code here
let myform = document.querySelector("form");
let inpName = document.getElementById("name");
let inpEmploy = document.getElementById("employeeID");
let depName = document.getElementById("department");
let inpExp = document.getElementById("exp");
let inpEmail = document.getElementById("email");
let inpMob = document.getElementById("mb");
let alltask = [];
let tbody = document.querySelector("tbody");
tbody.innerHTML = "";
myform.addEventListener("submit", function (e) {

  e.preventDefault();
  let data = {
    Name: inpName.value,
    EmployeeId: inpEmploy.value,
    Department: depName.value,
    Experience: inpExp.value,
    Email: inpEmail.value,
    mobile: inpMob.value,
  };

  if (data.Experience > 5) {
    data.Role = "Senior";
  } else if (data.Experience >= 2 && data.Experience <= 5) {
    data.Role = "Junior";
  } else {
    data.Role = "Fresher";
  }
  alltask.push(data);
  inpName.value = "";
  inpEmploy.value = "";
  depName.value = "";
  inpExp.value = "";
  inpEmail.value = "";
  inpMob.value = "";
  tbody.innerHTML = "";

  alltask.map((ele) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    td1.innerText = ele.Name;
    td2.innerText = ele.EmployeeId;
    td3.innerHTML = ele.Department;
    td4.innerHTML = ele.Experience;

    td5.innerText = ele.Email;
    td6.innerText = ele.mobile;
    let tdRole = document.createElement("td");
    let tdDelete = document.createElement("td");
    let bButton = document.createElement("button");
    bButton.innerText = "Delete";

    bButton.addEventListener("click", function () {
      
      tr.remove();
    });

    tdRole.innerText = ele.Role;
    tdDelete.appendChild(bButton);
    tr.append(td1, td2, td3, td4, td5, td6, tdRole, tdDelete);
    tbody.append(tr);
  });
});
