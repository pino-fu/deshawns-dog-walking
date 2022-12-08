import { getWalkers, getWalkerCities, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()
const walkerCities = getWalkerCities()


const walkerCitiesperWalker = (walker) => {
    let assignmentArr = []

    for (const walkerTown of walkerCities) {
        if (walkerTown.walkerId === walker.id) {
            assignmentArr.push(walkerTown)
        }
    }
    return assignmentArr
}


const CitiesWhereYouWork = (assignArr) => {
    let citiesMatched = ""

    for (const assigned of assignArr) {
        for (const town of cities) {
            if (town.id === assigned.cityId) {
                citiesMatched = `${citiesMatched} ${town.name}`
            }
        }
    }
    return citiesMatched
}


document.addEventListener(
    "click",  
    (clickEvent) => {
   
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("walker")) {

            const [, walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {

                if (walker.id === parseInt(walkerId)) {
                    const assignments = walkerCitiesperWalker(walker)
                    const cities = CitiesWhereYouWork(assignments)

                    window.alert(`${walker.name} services ${cities}`)
                }    
            }    
        }    
    }    
)    


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

