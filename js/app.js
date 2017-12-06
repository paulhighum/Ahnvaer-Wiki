const APIurl = "https://the-ahnvaer-wiki.herokuapp.com/"
let pageRace = document.querySelector("h3").textContent
let pageRaceDescription = document.querySelector(".description")
let pageRaceRegions = document.querySelector(".regions")
let pageRaceCities = document.querySelector(".cities")

fetch(APIurl)
  .then(resp => resp.json())
  .then(resp => {
    console.log(resp)
    console.log(pageRace)
    addRaceInfoToPage(resp)
    return
  })

function addRaceInfoToPage (raceArray) {
  raceArray.forEach(race => {
    if(race.name === pageRace) {
      pageRaceDescription.textContent = race.description
      let regionSentenceStart = `${race.name}s primarily live in the `
      let citiesSentenceStart = ""
      switch (race.geography.regions.length) {
        case 1:
          pageRaceRegions.textContent = `${regionSentenceStart} ${race.geography.regions[0]} region.`
          citiesSentenceStart = "Within this region they make up a large percentage of the population in the "
          break
        case 2:
          pageRaceRegions.textContent = `${regionSentenceStart} ${race.geography.regions[0]} and ${race.geography.regions[1]} regions.`
          citiesSentenceStart = "Within these regions they make up a large percentage of the population in the "
          break
        default:
      }
      switch (race.geography.cities.length) {
        case 1:
          pageRaceCities.textContent = `${citiesSentenceStart} city of ${race.geography.cities[0]}`
          break;
        case 2:
          pageRaceCities.textContent = `${citiesSentenceStart} cities of ${race.geography.cities[0]} and ${race.geography.cities[1]}`
          break
        case 3:
          pageRaceCities.textContent = `${citiesSentenceStart} cities of ${race.geography.cities[0]}, ${race.geography.cities[1]}, and ${race.geography.cities[2]}`
          break
        case 4:
          pageRaceCities.textContent = `${citiesSentenceStart} cities of ${race.geography.cities[0]}, ${race.geography.cities[1]}, ${race.geography.cities[2]}, and ${race.geography.cities[3]}`
          break
        case 5:
          pageRaceCities.textContent = `${citiesSentenceStart} cities of ${race.geography.cities[0]}, ${race.geography.cities[1]}, ${race.geography.cities[2]}, ${race.geography.cities[3]}, and ${race.geography.cities[4]}`
          break
        default:

      }
      console.log(citiesSentenceStart)
    }
  })
}
