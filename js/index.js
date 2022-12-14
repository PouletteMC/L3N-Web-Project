
function getNextLaunch() {
    fetch('https://api.spacexdata.com/v4/launches/next')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('next-launch').innerHTML = data.name
    })
}

function getLaunches() {
    fetch('https://api.spacexdata.com/v4/launches')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}
