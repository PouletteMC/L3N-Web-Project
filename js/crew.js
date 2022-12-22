function getCrew(){
    fetch('https://api.spacexdata.com/v4/crew')
    .then(response => response.json())
    .then(handleData)
}

function handleData(crewMembers){
    const count = crewMembers.length
    for( let crewMember in crewMembers ) {
        const name = crewMembers[crewMember].name
        const agency = crewMembers[crewMember].agency
        const image = crewMembers[crewMember].image
        const wikipedia = crewMembers[crewMember].wikipedia

        const crew = {
            name,
            agency,
            image,
            wikipedia,
            count
        }

        appendData(crew)
    }
}

function appendData(data){
    const newRow = document.createElement('tr')
    const image = document.createElement('td')
    const name = document.createElement('td')
    const agency = document.createElement('td')
    const wikipedia = document.createElement('td')

    name.classList.add('name')
    agency.classList.add('agency')

    image.innerHTML = `<img src="${data.image}" alt="${data.name}" class="image" >`
    name.innerText = data.name
    agency.innerText = data.agency
    wikipedia.innerHTML = `<a href="${data.wikipedia}" target="_blank" class='button' >Read more</a>`

    newRow.appendChild(image)
    newRow.appendChild(name)
    newRow.appendChild(agency)
    newRow.appendChild(wikipedia)

    document.querySelector('tbody').appendChild(newRow)
    document.getElementById('count').innerText = `Total: ${data.count}`
}