const inputbox=document.getElementById("input-box");
const listc=document.getElementById("list-container");
const result=document.getElementById("result");

function addtask(){
    if(inputbox.value==='')
    { 
        result.innerHTML=("You must write something first....");
        result.style.color="red";
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listc.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
        result.remove();
    }
    inputbox.value=""
    savedata();

}

listc.addEventListener("click", function(e){
   
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    savedata();
    }

},false);

function savedata(){
    localStorage.setItem("data",listc.innerHTML);
}

function showlist()
{
    listc.innerHTML=localStorage.getItem("data");
}

showlist();