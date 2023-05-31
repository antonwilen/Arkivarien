//hämtar från k-samsök utifrån städer
//plockar ut fotona

//discarded cities: "uppsala", "linkoping", "helsingborg",  "norrköping", "borås", "lund", "västerås", "örebro", "karlstad", "halmstad", "gävle", "boden", "falun", "luleå", "jönköping", 
//"stockholm", "göteborg", "malmö", "umeå", "sundsvall", "visby", "kiruna", "karlstad"
let cities = ["Stockholm", "Göteborg", "Malmö", "Umeå", "Sundsvall", "Kiruna", "Gotland", "Örebro"]
const buildingTypes = ["Byggnad", "Kyrka", "Slott", "Station", "Gård", "Skola", "Hamn", "Herrgård"]

let city = ""
let totalHits
let foundImages = []
let shownImages = []

//resets HomeView
export function resetCities() {
    console.log("RESETTING cities.js")
    cities = ["Stockholm", "Göteborg", "Malmö", "Umeå", "Sundsvall", "Kiruna", "Gotland", "Örebro"]
    city = ""
    emptyImageStores()
}

// Gets a random city and a random building type, then fetches from k-samsök
// If the total hits are less than 5, it tries again
export async function getCultureObject() {
    randomizeCity()
    const buildingType = buildingTypes[Math.floor(Math.random() * buildingTypes.length)]
    //const url = `https://kulturarvsdata.se/ksamsok/api?method=search&startRecord=10&hitsPerPage=5&x-api=%22test%22&query=item=%22${buildingType}%22+and%20thumbnailExists=j%20and%20place=%22${city}%22%20and%20create_fromTime%3E=1950`

    let response = await fetch("https://kulturarvsdata.se/ksamsok/api?method=search&startRecord=1&hitsPerPage=100&x-api=%22test%22&query=item=%22" + buildingType + "%22+and%20thumbnailExists=j%20and%20place=%22" + city + "%22%20and%20create_fromTime%3E=1950",
        { headers: { 'Accept': 'application/json' } })
    let data = await response.json()
    console.log(data)

    totalHits = data.result.totalHits
    if (totalHits < 5) {
        console.log(city + " " + buildingType)
        await getCultureObject()
    } else {

        console.log(buildingType, city)
        if (totalHits > 100) {
            totalHits = 100
        }
        await getPicture(data)

    }
}

function randomizeCity() {
    city = cities[Math.floor(Math.random() * cities.length)]
}

// Sorts out the images from the data and puts them in foundImages[]
// Then calls mountImage()
async function getPicture(data) {
    let objectArray
    let randomObjects = []
    let randomResult
    for (let i = 0; i < 5; i++) {
        randomResult = (Math.floor(Math.random() * totalHits))
        while (randomObjects.includes(randomResult)) {
            randomResult = (Math.floor(Math.random() * totalHits))
        }
        randomObjects.push(randomResult)
    }
    console.log(randomObjects)
    for (let result of randomObjects) {

        objectArray = data.result.records[result].record['@graph']
        await objectArray.forEach(element => {
            if (element.hasOwnProperty('lowresSource')) {
                foundImages.push(element.lowresSource)
            } else if (element.hasOwnProperty('highresSource')) {
                foundImages.push(element.highresSource['@value'])
            }
        })
    }
    //console.log(images)
    mountImage();

}

// Gets a new city and updates the list of cities
export function nextGuess() {
    updateCityList();
    emptyImageStores();
}

export function getTargetCity() {
    return city
}

export function getCities() {
    return cities.sort()
}

export function getShownImages() {
    return shownImages
}

export function emptyImageStores() {
    shownImages = []
    foundImages = []
}

//hämtar ut o skickar EN bild ur foundImages[] till shownImages[], tar bort den ur foundImages[] oxå
//mountar den bilden ur foundImages[]
export function mountImage() {
    let image = foundImages.pop()
    shownImages.push(image)
}

// Removes the target city from the list of cities
export function updateCityList() {
    let index = cities.indexOf(getTargetCity())
    cities.splice(index, 1)
}

