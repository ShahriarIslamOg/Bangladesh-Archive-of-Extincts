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
            <ul>
                <li class="entimage"><span class="imagecont"><img src="${entity.entityImage}"/ alt="${entity.entityName}" width="100px" height="auto"></span></li>
                <li class="enname"><strong>Name:</strong> <span>${entity.entityName}</span></li>
                <li class="bnname"><strong>বাংলা:</strong> <span>${entity.entityNamebn}</span></li>
                <li class="extype"><strong>Extinct Type:</strong> <span>${entity.entityExtinctType}</span></li>
                <li class="sciname"><strong>Scientific Name:</strong> <span>${entity.entitySciName}</span></li>
            </ul>
            <hr/>
        `;
    });
}

fetchJsonData();
