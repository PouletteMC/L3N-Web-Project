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
    // const newRow = document.createElement('tr')
    // const image = document.createElement('td')
    // const name = document.createElement('td')
    // const agency = document.createElement('td')
    // const wikipedia = document.createElement('td')

    // name.classList.add('name')
    // agency.classList.add('agency')

    // image.innerHTML = `<img src="${data.image}" alt="${data.name}" class="image" >`
    // name.innerText = data.name
    // agency.innerText = data.agency
    // wikipedia.innerHTML = `<a href="${data.wikipedia}" target="_blank" class='button' >Read more</a>`

    // newRow.appendChild(image)
    // newRow.appendChild(name)
    // newRow.appendChild(agency)
    // newRow.appendChild(wikipedia)

    // document.querySelector('tbody').appendChild(newRow)
    // document.getElementById('count').innerText = `Total: ${data.count}`

    const card = document.createElement('div')
    const cardInner = document.createElement('div')
    const cardFront = document.createElement('div')
    const cardBack = document.createElement('div')

    cardInner.classList.add('flip-card-inner')
    cardFront.classList.add('flip-card-front')
    cardBack.classList.add('flip-card-back')

    cardFront.innerHTML = `<img src="${data.image}" alt="${data.name}" class="image" >`
    cardBack.innerHTML = `<h2>${data.name}</h2> <p>${data.agency}</p> <a href="${data.wikipedia}" target="_blank" class='button' >Read more</a>`

    card.classList.add('flip-card')
    card.appendChild(cardInner)
    cardInner.appendChild(cardFront)
    cardInner.appendChild(cardBack)

    document.getElementById('crew').appendChild(card)



}