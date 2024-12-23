// AJAX ntroduction

function loadData() {
    // create a new request 
    const xhr = new XMLHttpRequest();

    // do somthing after request arriving
    xhr.onload = function () {
        const text = document.getElementById('text');
        text.innerHTML = xhr.responseText;
    }

    // respont request mathods: GET, PUT, POST, PATCH, DELETE, OPTIONS 
    xhr.open('GET', 'data.text')

    // send request
    xhr.send();
}





// clouse .................................


// let i = 0;
// function adding() {
//     return i++
// }
// console.log(adding())
// console.log(adding())
// console.log(adding())
// console.log(adding())


function createClouser() {
    let i = 0;
    return function () {
        return i++;
    }
}

const myClouser = createClouser()
console.log(myClouser())
console.log(myClouser())
console.log(myClouser())
// createClouser();