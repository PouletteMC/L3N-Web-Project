function getStarlinks(){
    fetch('https://api.spacexdata.com/v4/starlink')
    .then(response => response.json())
    .then(handleData)
}

function handleData(starlinks){
    for( let starlink in starlinks ) {
        const name = starlinks[starlink].spaceTrack.OBJECT_NAME
        const version = starlinks[starlink].version
        const launch = starlinks[starlink].spaceTrack.LAUNCH_DATE.toLocaleString()
        const altitude = starlinks[starlink].height_km ? starlinks[starlink].height_km.toString().split('.')[0] + ' km' : 'Retired'
        const positon = starlinks[starlink].longitude && starlinks[starlink].latitude ? starlinks[starlink].longitude + ', ' + starlinks[starlink].latitude : 'Retired'
        const velocity = starlinks[starlink].velocity_kms ? starlinks[starlink].velocity_kms.toString().split('.')[0] + ' km/s' : 'Retired'

        const data = {
            name,
            version,
            launch,
            altitude,
            positon,
            velocity
        }
        appendData(data)
    }
}

function appendData(data){
    console.table(data)
    const newRow = document.createElement('tr')
    const name = document.createElement('td')
    const version = document.createElement('td')
    const launch = document.createElement('td')
    const altitude = document.createElement('td')
    const positon = document.createElement('td')
    const velocity = document.createElement('td')

    name.innerText = data.name
    version.innerText = data.version
    launch.innerText = data.launch
    altitude.innerText = data.altitude
    positon.innerText = data.positon
    velocity.innerText = data.velocity

    newRow.appendChild(name)
    newRow.appendChild(version)
    newRow.appendChild(launch)
    newRow.appendChild(altitude)
    newRow.appendChild(positon)
    newRow.appendChild(velocity)

    document.querySelector('tbody').appendChild(newRow)
}