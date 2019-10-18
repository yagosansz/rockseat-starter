const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Ok!') }, 2000);
})

// async function executePromise() {
//     console.log(await myPromise());
//     console.log(await myPromise());
//     console.log(await myPromise());
// }

// executePromise();

const executePromise = async () => {
    console.log(await myPromise());
    console.log(await myPromise());
    console.log(await myPromise());
};

executePromise();