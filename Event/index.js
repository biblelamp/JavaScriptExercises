// server url
const SRV_NAME = 'http://34.68.240.57'; // 34.68.240.57;

// server port
const SRV_PORT = 8080;

// calling the async function
getapi(SRV_NAME + ':' + SRV_PORT + '/event/all');

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
            <th colspan="2">Actions</th>
        </tr>`;

    // loop to access all rows
    for (let item of data) {
        console.log(item);
        table += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.city}</td>
            <td><a href="update-event.html?id=${item.id}&name=${item.name}&city=${item.city}">edit</a></td>
            <td>
                <button onclick="deleteEvent('${SRV_NAME}:${SRV_PORT}/event/delete/${item.id}')">
                    delete
                </button>
            </td>
        </tr>`;
    }

    // setting innerHTML as tab variable
    document.getElementById("table").innerHTML = table;
}

// delete event
async function deleteEvent(url) {

    const fetchOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    window.location.replace("index.html");
}