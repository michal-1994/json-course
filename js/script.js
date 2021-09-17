// Pople from js
(function() {
    let people = [
        { name: "Brad", age: 35 },
        { name: "John", age: 45 },
        { name: "Sara", age: 34 }
    ]
    
    let html = '';

    people.forEach(person => {
        html += `<li>My name ${person.name} and I am ${person.age} years old.</li>`;
    });

    document.getElementById('people').innerHTML = html;
})();

// Pople from data json by fetch
(function() {
    let url = '../data/people.json';
    fetch(url)
    .then(
        res => res.json()
    ).then(data => {
        let html = '';

        data.people.forEach(person => {
            html += `<li>My name ${person.name} and I am ${person.age} years old.</li>`;
        });

        document.getElementById('people1').innerHTML = html;
    }).catch(err => console.log("Something went wrong!"));
})();

// Pople from data json by HTTP Request
(function() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4) {
            let data = JSON.parse(xhttp.response);
            let people = data.people;
            let html = '';

            people.forEach(person => {
                html += `<li>My name ${person.name} and I am ${person.age} years old.</li>`;
            });
    
            document.getElementById('people2').innerHTML = html;
        }     
    }
    xhttp.open("GET", "../data/people.json", true);
    xhttp.send();
})();