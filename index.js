// Write your code here...
fetch("http://localhost:3000/menu")
.then((res) => res.json())
.then((data) => {
    console.log(data);
    for(let i of data) {
        renderImage(data)
    }
});

function renderImage(data) {

}
