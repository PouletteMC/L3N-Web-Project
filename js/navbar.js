function navbar() {
    const pageName = window.location.pathname.split("/").pop()
    const navbar = document.getElementById("navbar")

    const home = document.createElement("a")
    home.href = "index.html"
    home.innerText = "Home"
    home.classList.add("nav-link")
    navbar.appendChild(home)
    
    const rockets = document.createElement("a")
    rockets.href = "rockets.html"
    rockets.innerText = "Rockets"
    rockets.classList.add("nav-link")
    navbar.appendChild(rockets)

    const starlinks = document.createElement("a")
    starlinks.href = "starlinks.html"
    starlinks.innerText = "Starlinks"
    starlinks.classList.add("nav-link")
    navbar.appendChild(starlinks)

    const launches = document.createElement("a")
    launches.href = "launches.html"
    launches.innerText = "Launches"
    launches.classList.add("nav-link")
    navbar.appendChild(launches)

    const crew = document.createElement("a")
    crew.href = "crew.html"
    crew.innerText = "Crew"
    crew.classList.add("nav-link")
    navbar.appendChild(crew)

    const about = document.createElement("a")
    about.href = "about.html"
    about.innerText = "About"
    about.classList.add("nav-link")
    navbar.appendChild(about)

    // Add the active class to the current page
    if(pageName === "index.html"){
        home.classList.add("active")
    } else if(pageName === "rockets.html"){
        rockets.classList.add("active")
    } else if(pageName === "launches.html"){
        launches.classList.add("active")
    } else if(pageName === "crew.html"){
        crew.classList.add("active")
    } else if(pageName === "about.html"){
        about.classList.add("active")
    } else if(pageName === "starlinks.html"){
        starlinks.classList.add("active")
    }
}