function checkAge(age) {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(() => (age > 18) ? resolve() : reject() , 2000);
    });
    return promise;
}

checkAge(20)
    .then(function() {
        console.log('You are 19 or older.');
    })
    .catch(function() {
        console.log('You are 18 or younger.');
    });

function getRepos() {
    var repos = document.querySelector('#main ul');
    var listElement = document.createElement('li');
    var listText = document.createTextNode('Loading...');
    listElement.appendChild(listText);
    clearList(repos);
    repos.appendChild(listElement);
    return new Promise(function(resolve, reject) {
        var userName = document.querySelector('input[name=user]').value;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.github.com/users/${userName}/repos`);
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Error!');
                }
            }
        }

    }).then(function(response) {
        clearList(repos);
        for(repo of response) {
            listElement = document.createElement('li');
            listText = document.createTextNode(repo.name);
            listElement.appendChild(listText);
            repos.appendChild(listElement);
        }
    }).catch(function(error) {
        clearList(repos);
        listElement = document.createElement('li');
        listText = document.createTextNode('Repos not found!');
        listElement.appendChild(listText);
        repos.appendChild(listElement);
    });
}

function clearList(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
