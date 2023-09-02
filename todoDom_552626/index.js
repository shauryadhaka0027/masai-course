let myform=document.querySelector("form")
let inpTask=document.getElementById("task")
let mypriority=document.getElementById("priority")
 let taskarr=[];
 let tbody1=document.querySelector("tbody")
myform.addEventListener("submit",function(e){
    e.preventDefault()
    
     Data ={
        input : inpTask.value,
        priority : mypriority.value


    }
    taskarr.push(Data);
    tbody1.innerHTML="";
taskarr.map((ele)=>{
    const tr=document.createElement("tr");
    const td1=document.createElement("td");
    const td2=document.createElement("td")
    td1.innerText=ele.input;
    td2.innerText=ele.priority;
    tr.append(td1,td2);
    tbody1.append(tr);
})
})
