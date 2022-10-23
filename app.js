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



// fetch data in  my json file:---------
fetch('./json/data.json')
    .then(res => res.json())
    .then(data => showThirdData(data))
    .catch(err => {
        console.log(err);
    });

function showThirdData(data) {
    const demo3 = document.querySelector('.demo3')

    data.forEach(ele => {

        const h3 = document.createElement('h3');

        h3.innerHTML = `${ele.name} - ${ele.city} - ${ele.religion} <br>`;

        demo3.appendChild(h3);

    });

}



// Post data
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: JSON.stringify({
        title: 'Foo',
        body: 'Bar',
        userId: '1'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((err) => {
        console.log('Your error is: ', err);
    });

/* Output:-
{
    body: "Bar"
    id: 101
    title: "Foo"
    userId: "1"
}
*/


// Use form and submit:

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title');
    const body = document.getElementById('body');
    const userId = document.getElementById('id');

    const value = {
        title: title.value,
        body: body.value,
        userId: userId.value
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(
            // {
            //     title: title.value,
            //     body: body.value,
            //     userId: userId.value
            // }
            value
        ),
        headers: {
            'Content-type': 'application/json; charset= UTF-8'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch((err) => {
            console.log('Your error is: ', err);
        });

});


// another way post data:------------
document.getElementById('form2').addEventListener('submit', (e) => {
    e.preventDefault();

    const forms = document.forms[1];

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: new FormData(forms),
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch((err) => {
            console.log('Your error is: ', err);
        });

});


// Put data:---------
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'FOO',
        body: 'BAR',
        userId: 1
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
        console.log('Your error is:', err);
    });

// delete data :------------
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
});



// JS Symbol() data structure:---------

const a = Symbol('Hello');
const b = Symbol('Hello');

console.log(a); // output: Symbol(Hello);
console.log(b); // output: Symbol(Hello);
console.log(typeof a); // output: symbol;

console.log(a == b);  // output: false


// Symbol description property:---------
const c = Symbol('JavaScript');
const d = Symbol('JavaScript');

console.log(c.description === d.description);  // output: true


const f = {
    name: 'Hello',
    age: 100,
    [c]: 'hello'
}

console.log(f);
/* Output: 
    {
        name: 'Hello', 
        age:100,
        Symbol(JavaScript): 'hello'
    }
*/

console.log(JSON.stringify(f));
/* Output: 
    {
        "name":"Hello",
        "age":100
    }
*/