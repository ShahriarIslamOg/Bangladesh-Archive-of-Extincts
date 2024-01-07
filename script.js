function fetchJsonData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => displayJsonData(data))
        .catch(error => console.error('Error fetching JSON:', error));
}

function displayJsonData(data) {
    var extinctListDiv = document.getElementById('extinctList');

    data.extincts.forEach(entity => {
        extinctListDiv.innerHTML += `
            <table>
                <tr><td colspan="2" class="entimage"><span class="imagecont"><img src="${entity.entityImage}" alt="${entity.entityName}" width="100px" height="auto"/></span></td></tr>
                <tr><th class="enname"><strong>Name:</strong></th> <td><span>${entity.entityName}</span></td></tr>
                <tr><th class="bnname"><strong>বাংলা:</strong></th> <td><span>${entity.entityNamebn}</span></td></tr>
                <tr><th class="extype"><strong>Extinct Type:</strong></th> <td><span>${entity.entityExtinctType}</span></td></tr>
                <tr><th class="sciname"><strong>Scientific Name:</strong></th> <td><span>${entity.entitySciName}</span></td></tr>
            </table>
            <hr/>
        `;
    });
}

fetchJsonData();
