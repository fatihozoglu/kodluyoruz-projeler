import axios from "axios";

async function getData(number) {
    try {
        console.log(await (await axios(`https://jsonplaceholder.typicode.com/users/${number}`)).data);
        console.log(await (await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)).data);
    }
    catch (e) {
        console.log(e);
    }
}

export default getData;