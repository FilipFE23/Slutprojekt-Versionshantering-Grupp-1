/*Tests for fetch*/
const url =
    "https://spychat-a5f8e-default-rtdb.europe-west1.firebasedatabase.app/boys/.json";
fetch(url, {
    method: "POST",
    body: JSON.stringify({
        username: 1337,
        password: "Fix my bugs",
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    });

//unfinsished function
function userameAndPassword(name, password) { }
