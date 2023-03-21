let name =""
let birthday =""

function getName() {
    names = document.getElementById("names").value
}

function getBirthday() {
    birthday = document.getElementById("birthday").value
}

function saveData() {
    const dataLocalStorage = JSON.parse(localStorage.getItem("pld")) || [];
    const ul = document.createElement("ul");
    for(let i = 0; i < dataLocalStorage.length; i++) {
        const li = document.createElement("li")
        li.innerHTML = dataLocalStorage[i].names
        ul.appendChild(li)
    }
    document.getElementById("listvuanhap").appendChild(ul)
    const objectInformationOnchange = {
        names,
        birthday
    }
    dataLocalStorage.push(objectInformationOnchange)
    localStorage.setItem("pld", JSON.stringify(dataLocalStorage))

}

function showData() {
    const dataLocalStorage = JSON.parse(localStorage.getItem("pld")) || [];
    const ul = document.createElement("ul");
    const getHTMLIDlistvuanhap = document.getElementsByTagName("ul");
    if(getHTMLIDlistvuanhap.length > 0){
        getHTMLIDlistvuanhap[0].remove();    
    }
    for(let i = 0; i < dataLocalStorage.length; i++) {
        const li = document.createElement("li")
        const dataLiButton = `
        <p> ${dataLocalStorage[i].names} - ${dataLocalStorage[i].birthday}
        <button onclick="xoaData(${i})"> xoa </button>
        <button> sua </button>
        `
        li.innerHTML = dataLiButton
        ul.appendChild(li)
    }
    document.getElementById("listvuanhap").appendChild(ul)
}

function xoaData(i) {
    const dataLocalStorage = JSON.parse(localStorage.getItem("pld"));
    alert(i)
    const deleteDataI = dataLocalStorage.filter((item, index) =>index !== i);
    console.log(deleteDataI)
    const ul = document.createElement("ul");
    const getHTMLIDlistvuanhap = document.getElementsByTagName("ul");
    if(getHTMLIDlistvuanhap.length > 0){
        getHTMLIDlistvuanhap[0].remove();    
    }
    for(let i = 0; i < deleteDataI.length; i++) {
        const li = document.createElement("li")
        const dataLiButton = `
        <p> ${deleteDataI[i].names} - ${deleteDataI[i].birthday}
        <button onclick="xoaData(${i})"> xoa </button>
        <button> sua </button>
        `
        li.innerHTML = dataLiButton
        ul.appendChild(li)
    }
    document.getElementById("listvuanhap").appendChild(ul)
}

// const array = [1,2,3,4,5,6,7,8,10];
// const deleteSo7 = array.filter(item => item !== 7);
// console.log(deleteSo7)

// const arrayObject = [{name:"A" , value:"1"}, {name:"B" , value:"2"}]
// const deleteNameA = arrayObject.filter(item=>item.name !== "A");
// console.log(deleteNameA);




