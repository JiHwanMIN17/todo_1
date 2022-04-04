const deleteAll=document.getElementById("deleteAll");
const ul=document.querySelector("ul");
const form=document.querySelector("form");

function deleteOrCheck(event){
    if(event.target.className=='delete'){
        deleteList(event);
    }
    else{
        checkList(event);
    }
}




//x span 누르면 삭제
function deleteList(event){
    // let removedLi=event.target.parentNode;
    // let Ul=removedLi.parentNode;
    // Ul.removeChild(removedLi);

    let removedLi=event.target.parentNode;
    let Ul=removedLi.parentNode;
    Ul.removeChild(removedLi);
}
// 이벤트가 일어난 체크항목의 형제노드인 span색을 연하게
function checkList(event){
    const todo=event.target.nextSibling;
    if( event.target.checked){
        todo.style.color="blue";
    }
    else{
        todo.style.color="#000000";
    }
}


//목록 전체삭제
function clearList(event){
    let ul=document.querySelector("ul");
    ul.innerHTML="";
}

//ul에 리스트 추가 add테스크에 입력한 것 추가 
// function addList(event){
//     event.preventDefault();
//     let adlival=document.querySelector('input');
//     if(adlival.value!==''){
//         addTask(adlival);
//         adlival.value='';
//     }
// }
function addList(event){
    event.preventDefault();
    let adlival=document.querySelector('input');
    if(adlival.value!==''){
        addTask(adlival.value);
        adlival.value="";
    }
}

//ul과 li의 관계 설정 li에 삭제span ,누르면 span이 하얘지는 check박스

function addTask(value){
    let ul=document.querySelector("ul");
    let li=document.createElement("li");
    li.innerHTML=`<span class='delete'>x</span><input type="checkbox"><label>${value}</label></input>`;
    ul.appendChild(li);
    document.querySelector(".todolist").style.display="block";
}

form.addEventListener("submit",addList);
deleteAll.addEventListener("click",clearList);
ul.addEventListener("click",deleteOrCheck);
