function getRockets(){
    fetch('https://api.spacexdata.com/v4/rockets')
    .then(response => response.json())
    .then(handleData)
}

function handleData(rockets){
    for(let rocket in rockets){
        const name = rockets[rocket].name
        const dimensions = rockets[rocket].height.meters + 'm x ' + rockets[rocket].diameter.meters + 'm'
        const mass = rockets[rocket].mass.kg + 'kg'
        const engines = `${rockets[rocket].engines.number} x ${rockets[rocket].engines.type} ${rockets[rocket].engines.version}`
        const thrust = `${rockets[rocket].engines.thrust_sea_level.kN}kN / ${rockets[rocket].engines.thrust_vacuum.kN}kN`
        const cost = '$' + rockets[rocket].cost_per_launch.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        const success = rockets[rocket].success_rate_pct + '%'
        const firstFlight = new Date(rockets[rocket].first_flight).toLocaleString()
        const active = rockets[rocket].active ? 'Yes' : 'No'
        const wikipedia = rockets[rocket].wikipedia

        const data = {
            name,
            dimensions,
            mass,
            engines,
            thrust,
            cost,
            success,
            firstFlight,
            active,
            wikipedia
        }
        appendData(data)
    }
}

function appendData(data){
    const newRow = document.createElement('tr')
    const name = document.createElement('td')
    const dimensions = document.createElement('td')
    const mass = document.createElement('td')
    const engines = document.createElement('td')
    const thrust = document.createElement('td')
    const cost = document.createElement('td')
    const success = document.createElement('td')
    const firstFlight = document.createElement('td')
    const active = document.createElement('td')
    const wikipedia = document.createElement('td')

    name.innerText = data.name
    dimensions.innerText = data.dimensions
    mass.innerText = data.mass
    engines.innerText = data.engines
    thrust.innerText = data.thrust
    cost.innerText = data.cost
    success.innerText = data.success
    firstFlight.innerText = data.firstFlight
    active.innerText = data.active
    wikipedia.innerHTML = `<a href="${data.wikipedia}" target="_blank" class='wikipedia' >Read more</a>`
    
    newRow.appendChild(name)
    newRow.appendChild(dimensions)
    newRow.appendChild(mass)
    newRow.appendChild(engines)
    newRow.appendChild(thrust)
    newRow.appendChild(cost)
    newRow.appendChild(success)
    newRow.appendChild(firstFlight)
    newRow.appendChild(active)
    newRow.appendChild(wikipedia)

    document.querySelector('tbody').appendChild(newRow)
}