import { getPets, getWalkers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target


        if (itemClicked.id.startsWith("pet")) {

            const [, petPrimaryKey] = itemClicked.id.split("--")

            let matchPet = null

            for (const pet of pets) {
                if (parseInt(petPrimaryKey) === pet.id) {
                    matchPet = pet
                }
            }
            let matchWalker = null
            for (const walker of walkers) {
                if (matchPet.walkerId === walker.id) {
                    matchWalker = walker
                }
            }
            window.alert(`${matchPet.name} is being walked by ${matchWalker.name}`)
        }
    }
)

const pets = getPets()
const walkers = getWalkers()


export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

