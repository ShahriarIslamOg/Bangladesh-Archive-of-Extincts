let displayedItems = 10;
const itemsPerPage = 10;

function fetchJsonData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => displayJsonData(data))
        .catch(error => console.error('Error fetching JSON:', error));
}

function displayJsonData(data) {
    const extinctListDiv = document.getElementById('extinctList');

    displayItems(data.extincts.slice(0, displayedItems));

    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            if (displayedItems < data.extincts.length) {
                const additionalItems = data.extincts.slice(displayedItems, displayedItems + itemsPerPage);
                displayItems(additionalItems);
                displayedItems += itemsPerPage;
            }
        }
    });
}

function displayItems(items) {
    const extinctListDiv = document.getElementById('extinctList');

    items.forEach(entity => {
        extinctListDiv.innerHTML += `
            <table>
                <tr><td class="entimage"><span class="imagecont"><a href="${entity.entityImage}"><img src="${entity.entityThumb}" alt="${entity.entityName}" width="150px" height="auto"/></a><a href="${entity.entityImageSource}">Image source</a> &#8599;</span></td></tr>
                <tr><th class="enname"><strong>Name:</strong></th> <td><span>${entity.entityName}</span></td></tr>
                <tr><th class="bnname"><strong>বাংলা:</strong></th> <td><span class="bn">${entity.entityNamebn}</span></td></tr>
                <tr><th class="extype"><strong>Type:</strong></th> <td><span>${entity.entityExtinctType}</span></td></tr>
                <tr><th class="sciname"><strong>Sci:</strong></th> <td><span class="sciname">${entity.entitySciName}</span></td></tr>
                <tr><th class="lstseen"><strong>Seen:</strong></th> <td><span class="lstseen">${entity.entityLastSeen}</span></td></tr>
            </table>
            <hr/>
        `;
    });
}

fetchJsonData();
