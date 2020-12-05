const axios = require('axios').default;
const sleep = require('util').promisify(setTimeout);


// (async () => {
    // console.time("Slept for")
    // await sleep(3000)
    // console.timeEnd("Slept for")
// })()

// console.log(1)
// console.log(2)
// console.log(3)



// async function test() {
    //     const response = await axios.get('https://api.github.com/users/leodev0/repos');
    //     console.log(response);
// }

// test();

// (async () => {
//     const p1 = await axios.get(`https://api.github.com/users/leodev0/repos`)
//     const p2 = await axios.get(`https://api.github.com/users/diego3g/repos`)
//     const p3 = await axios.get(`https://api.github.com/users/torvalds/repos`)

//     console.time()
//     console.log(p1.status)
//     console.log(p2.status)
//     console.log(p3.status)
//     console.timeEnd()
// })()

(async () => {
    console.time()
    const p1 = axios.get(`https://api.github.com/users/leodev0/repos`)
    const p2 = axios.get(`https://api.github.com/users/taniarascia/repos`)
    const p3 = axios.get(`https://api.github.com/users/torvalds/repos`)

    Promise.all([
        p1, p2, p3
    ]).then(values => console.log(values)).catch(error => console.log(`Error: ${error}`));
    console.timeEnd()

})()

// (async () => {
//     try {
//         const res = await axios.get('https://api.github.com/users/leoev0/repos')
//         console.log(res)
//     } catch (error) {
//         console.warn(`Error: ${error}`);
//     }
// })()

// axios.get('https://api.github.com/users/leoev0/repos')
//     .then(res => console.log(res))
//     .catch(error => console.log(`Error: ${error}`))