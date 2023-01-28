
// const myPromise = new Promise((resolve, reject) => {
//     const succes = Math.floor(Math.random() * 2)
//     const data = {a:1, b:2};
//     console.log(succes)

//     if (succes) {
//         console.log("Data fetched");
//         resolve(data)
//     } else {
//         reject(new Error("Fetch helted Sevdaaaaaa"))
//     }
// })

// myPromise
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))

//fetch apı
fetch("https://api.github.com/users")
.then((res) => {
    console.log(res)
    if(!res.ok){
throw new Error("Something went wrong")
    }
    return res.json();
})
.then((data) =>  updateDom(data))
.catch((err) => console.log(err))

const updateDom = (users) => {

    console.log(users)
    const userDiv = document.querySelector(".users");

    users.filter((item) => item.id % 2 !== 0).forEach((user) => {
        const {login, avatar_url} = user;
        userDiv.innerHTML +=
`<h2 class="text-info">${login}</h2> 
       <img src=${avatar_url} width="300px" class="mb-5 rounded-pill"/>
`})
}



