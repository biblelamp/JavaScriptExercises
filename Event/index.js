// calling the async function
getapi('http://localhost:8080/event');

// defining async function
async function getapi(url) {

    // storing response
    const response = await fetch(url);

    // storing data in JSON
    var data = await response.json();
    //console.log(data);

    var table = `
        <tr>
            <th>Id</th>
            <th>Event Name</th>
            <th>City</th>
        </tr>`;

    // loop to access all rows
    for (let item of data) {
        console.log(item);
        table += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.city}</td>
        </tr>`;
    }

    // setting innerHTML as tab variable
    document.getElementById("table").innerHTML = table;
}