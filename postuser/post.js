axios.get('https://jsonplaceholder.typicode.com/posts?12345')
    .then(function(response) {
        // handle success
        console.log(response.data);

        response.data.forEach(post);
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    })
    .then(function() {
        console.log('sd')
            // always executed
    });

function post(details) {
    console.log('hi');
    console.log(details);

    var newElement = document.createElement('div')
    newElement.id = 'ingrid';


    let d1 = document.createElement('label');
    d1.className = 'grid-item item 1';
    d1.innerHTML = 'Id : ' + details.id;
    newElement.appendChild(d1);



    let d2 = document.createElement('button');
    d2.className = 'grid-item item3';
    // d1.innerHTML = 'Full Name : ';
    let d211 = document.createElement('span');
    d211.innerHTML = details.title;
    d2.appendChild(d211);
    newElement.appendChild(d2);




    let d3 = document.createElement('div');
    d3.className = 'grid-item item4';
    d3.innerHTML = 'Body : ';
    let d31 = document.createElement('a');
    d31.innerHTML = details.body;
    d3.appendChild(d31);
    newElement.appendChild(d3);


    var divv = document.getElementById('demo');

    divv.appendChild(newElement);



}