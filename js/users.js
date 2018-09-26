axios.get('https://jsonplaceholder.typicode.com/users?12345')
    .then(function(response) {
        // handle success
        //console.log(response.data);

        response.data.forEach(printt);
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    })
    .then(function() {
        console.log('sd')
            // always executed
    });

let data;

axios.get('https://jsonplaceholder.typicode.com/posts?123456')
    .then(function(response) {
        // handle success
        data = response.data;
        // post(response.data);


    })
    .catch(function(error) {
        // handle error
        console.log(error);
    })

function printt(details) {
    // console.log('hi');
    //console.log(details);

    // $('#myModal').modal('show');
    var newElement = document.createElement('div')
    newElement.id = 'ingrid';

    let d1 = document.createElement('button');
    d1.className = 'grid-item item1';
    // d1.innerHTML = 'Full Name :';
    let d111 = document.createElement('div');


    d111.innerHTML = details.name + ' ' +
        '<button class="btn btn-primary" data-toggle="modal" data-target="#myModal" href="#myModal" onclick=post(' + details.id + ')> <h6> More Info </h6></button>';
    d1.appendChild(d111);
    newElement.appendChild(d1);










    let d2 = document.createElement('div');
    //d2.className = 'grid-item item';
    d2.innerHTML = 'Username : ' + details.username;
    // newElement.appendChild(d2);

    let d3 = document.createElement('button');
    d3.className = 'grid-item item4';
    d3.innerHTML = ' E-mail : ';
    let d31 = document.createElement('a');
    d31.innerHTML = details.email;
    d3.appendChild(d31);
    newElement.appendChild(d3);

    let d4 = document.createElement('button');
    d4.className = 'grid-item item5';
    d4.innerHTML = details.address.street + ' , ' + details.address.suite + ' , ' + details.address.city + ' , ' + details.address.zipcode;
    newElement.appendChild(d4);

    let d5 = document.createElement('div');
    d5.innerHTML = details.address.geo.lat;
    //newElement.appendChild(d5);

    let d6 = document.createElement('div');
    d6.innerHTML = details.address.geo.lng;
    //newElement.appendChild(d6);

    let d7 = document.createElement('button');
    d7.className = 'grid-item item3';
    d7.innerHTML = details.phone;
    newElement.appendChild(d7);

    let d8 = document.createElement('button');
    d8.className = 'grid-item item9';
    let d888 = document.createElement('a');
    d888.innerHTML = details.website;
    d8.appendChild(d888);
    newElement.appendChild(d8);

    let d9 = document.createElement('button');
    d9.className = 'grid-item item6';
    d9.innerHTML = '<h4>' + details.company.name + '</h4>';
    newElement.appendChild(d9);

    let d10 = document.createElement('button');
    d10.className = 'grid-item item7';
    d10.innerHTML = details.company.catchPhrase;
    newElement.appendChild(d10);


    let d11 = document.createElement('button');
    d11.className = 'grid-item item8';
    d11.innerHTML = details.company.bs;
    newElement.appendChild(d11);





    // newElement.innerHTML = 'UserId : ' + details.id + '<br> Full Name : ' + details.name + '<br> Username : ' + details.username + '<br> Email : ' + details.email + '<br> Address : <br>Street : ' + details.address.street + '<br>Suite : ' + details.address.suite + '<br>City : ' + details.address.city + '<br>Zipcode : ' + details.address.zipcode + '<br>Geography : <br>Lattitude : ' + details.address.geo.lat + '<br>Longitutde : ' + details.address.geo.lng;
    //newElement.textContent = 'Id : ' + details.pas ;

    var divv = document.getElementById('demo');

    divv.appendChild(newElement);

    //    details.display = true;

}

function post(details2) {
    // console.log(details2, data)



    //console.log(data.id);
    data.forEach(function(d1) {
        var newElement = document.createElement('div')

        if (d1.userId === details2) {
            console.log(d1)



            let i1 = document.createElement('a');
            i1.innerHTML = 'PostId : ' + d1.id;
            newElement.appendChild(i1);

            let i2 = document.createElement('div');
            i2.innerHTML = '<br> Title : ' + d1.title;
            newElement.appendChild(i2);

            let i3 = document.createElement('div');
            i3.innerHTML = '<br> Body : ' + d1.body;
            newElement.appendChild(i3);
        }
        var bb = document.getElementById('blog');
        bb.appendChild(newElement);
    })


}

$('#myModal').on('hidden.bs.modal', function() {

    var bb = document.getElementById('blog');
    bb.innerHTML = '';

})