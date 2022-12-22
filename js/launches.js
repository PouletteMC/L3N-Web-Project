function getLaunches(){
    fetch('https://api.spacexdata.com/v4/launches')
    .then(response => response.json())
    .then(handleData)
}

function handleData(missions){
    for( let mission in missions ) {
        const number = missions[mission].flight_number
        const name = missions[mission].name
        const date = new Date(missions[mission].date_utc).toLocaleString()
        const status = missions[mission].upcoming ? 'Upcoming' : 'Launched'
        const video = missions[mission].links.webcast

        const launch = {
            number,
            name,
            date,
            status,
            video
        }
        appendData(launch)
    }
}

function appendData(data){
    const newRow = document.createElement('tr')
    const number = document.createElement('td')
    const name = document.createElement('td')
    const date = document.createElement('td')
    const status = document.createElement('td')
    const video = document.createElement('td')

    number.innerText = data.number
    name.innerText = data.name
    date.innerText = data.date
    status.innerText = data.status
    video.innerHTML = `<a href="${data.video}" target="_blank" class='button' >Watch</a>`

    newRow.appendChild(number)
    newRow.appendChild(name)
    newRow.appendChild(date)
    newRow.appendChild(status)
    newRow.appendChild(video)

    document.querySelector('tbody').appendChild(newRow)
}