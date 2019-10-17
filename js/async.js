// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/yagosansz');

// // Some request methods like GET do not have a body.
// xhr.send(null);

// xhr.responseType = 'json';

// xhr.onreadystatechange = function() {
//     if(xhr.readyState == 4) {
//         console.log(xhr.response);
//     }
// }

// var myPromise = function() {
//     return new Promise(function(resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/yagosansz');
//         xhr.send(null);

//         xhr.onreadystatechange = function() {
//             if(xhr.readyState == 4) {
//                 if (xhr.status == 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     reject('Request Error!');
//                 }
//             }
//         }
//     });
// }

// myPromise()
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.warn(error);
//     });

// Wrapper around XMLTHttpRequest
axios.get('https://api.github.com/users/yagosansz')
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(error) {
        console.warn(error);
    });
