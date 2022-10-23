/* === JavaScript Fetch Data === */


// fetch data to text file:---------
fetch('./text-content/data.txt')
    .then(res => res.text())
    .then(data => showTextData(data))
    .catch((err) => {
        console.log(err);
    });

function showTextData(data) {
    document.getElementById('demo1').innerText = data;
}



// fetch data to json server:--------- 
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => showSecondData(data))
    .catch(err => {
        console.log(err);
    });

function showSecondData(data) {
    const demo2 = document.querySelector('.demo2');

    data.forEach(element => {
        const h3 = document.createElement('h3');

        h3.innerHTML = `${element.name} - ${element.email} - ${element.address.city} <br>`;

        demo2.appendChild(h3);
    });
}

