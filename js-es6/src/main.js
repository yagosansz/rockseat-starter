// Delay function will trigger .then after 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// function oneSecond() {
//     delay().then(() => {
//         console.log('1s');

//         delay().then(() => {
//             console.log('2s');

//             delay().then(() => {
//                 console.log('3s');
        
//             });
//         });
//     });
// }

async function oneSecond() {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
}

oneSecond();

import axios from 'axios';

// function getUserFromGithub(user) {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.warn('User couldn\'t be found!');
//         })
// }

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch(err) {
        console.warn('User couldn\'t be found!');
    }
}

getUserFromGithub('yagosansz');
getUserFromGithub('yagosBBBBansz');

// class Github {
//     static getRepositories(repo) {
//         axios.get(`https://api.github.com/repos/${repo}`)
//             .then(response => {
//                 console.log(response.data);
//             })
//             .catch(err => {
//                 console.log('Repo couldn\'t be found!');
//             })
//     }
// }

class Github {
    static async getRepositories(repo) {
        try {
            const repo = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch(err) {
            console.log('Repo couldn\'t be found!');
        }
        
    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

// const searchUser = async (user) => {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log('Search user...');
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('User could not be found!');
//         });
// }

const searchUser = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log('Search user...');
        console.log(response.data);
    } catch(err) {
        console.log('User could not be found!');
    }
}

searchUser('yagosansz');