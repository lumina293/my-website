import ProvincesData from "./data.js"

/*
JavaScript:

function doSomething(param) {
    // do something here
    return result
}

Python

def do_something(param):
    # do something here
    return result
*/

function countProvinces(provinces) {
    let count = 0
    for (let i= 0; i < provinces.length; i++) {
        if (provinces[i].type === "Tỉnh") {
            count += 1
        }
    }
    return count;
}

function countCities(provinces) {
    let count = 0
    for (let i = 0; i < provinces.length; i++) {
        if (provinces[i].type === "Thành phố") {
            count += 1
        }
    }
    return count;
}


function countCommunes(provinces) {
    let totalCommunes = 0
    for (let i = 0; i < provinces.length; i++) {
        for (let j = 0; j < provinces[i].communes.length; j++) {
            if (provinces[i].communes[j].type === "Xã" ) {
                totalCommunes += 1;
            }
        }
    }
    return totalCommunes
}

function countWards(provinces) {
    let totalWards = 0
    for(let i = 0; i < provinces.length; i++) {
        for (let j = 0; j < provinces[i].communes.length; j++) {
            if (provinces[i].communes[j].type === "Phường") {
                totalWards += 1;
            }
        }
    }
    return totalWards;
}

function countSpecializedZones(provinces) {
    let totalSpecializedZones = 0
    for (let i = 0; i < provinces.length; i++) {
        for (let j = 0; j < provinces[i].communes.length; j++) {
            if (provinces[i].communes[j].type === "Đặc khu") {
                totalSpecializedZones += 1;
            }
        }
    }
    return totalSpecializedZones;
}

function findBiggestProvinceByArea(provinces) {
    let biggestProvince = provinces[0]
    for (let i = 1; i < provinces.length; i++) {
        if (provinces[i].areaInKm2 > biggestProvince.areaInKm2) {
            biggestProvince = provinces[i];
        }
    }
    return biggestProvince;
}

function findSmallestProvinceByArea(provinces) {
    let smallestProvince = provinces[0]
    for (let i = 1; i < provinces.length; i++) {
        if (provinces[i].areaInKm2 < smallestProvince.areaInKm2) {
            smallestProvince = provinces[i];
        }
    }
    return smallestProvince;
}

function findMostPopulatedProvince(provinces) {
    let mostPopulatedProvince = provinces[0]
    for (let i = 1; i < provinces.length; i++) {
        if (provinces[i].population > mostPopulatedProvince.population) {
            mostPopulatedProvince = provinces[i];
        }
    }
    return mostPopulatedProvince;
}

function findLeastPopulatedProvince(provinces) {
    let p = provinces[0]
    for (let i = 1; i < provinces.length; i++) {
        if (provinces[i].population < p.population) {
            p = provinces[i];
        }
    }
    return p;
}

function findProvinceWithHighestDensity(provinces) {
    let highestDensityProvince = provinces[0]
    let density = provinces[0].population / provinces[0].areaInKm2
    for (let i = 1; i < provinces.length; i++) {
        let currentDensity = provinces[i].population / provinces[i].areaInKm2
        if (currentDensity > density) {
            highestDensityProvince = provinces[i];
            density = currentDensity
        }
    }
    return highestDensityProvince;
}

function findProvinceWithLowestDensity(provinces) {
    let lowestDensityProvince = provinces[0]
    let density = provinces[0].population / provinces[0].areaInKm2
    for (let i = 1; i < provinces.length; i++) {
        let currentDensity = provinces[i].population / provinces[i].areaInKm2
        if (currentDensity < density) {
            lowestDensityProvince = provinces[i];
            density = currentDensity
        }
    }
    return lowestDensityProvince;
}

function findTop10PopularCommuneNames(provinces) {
    let communeNameCounts = new Map()
    for (let i = 0; i < provinces.length; i++) {
        for (let j = 0; j < provinces[i].communes.length; j++) {
            let name = provinces[i].communes[j].name
            if ( name in communeNameCounts) {
                communeNameCounts[name] += 1
            } else {
                communeNameCounts[name] = 1
            }
        }
    }

    let communeNameCountArr = []
    for (let name in communeNameCounts) {
        communeNameCountArr.push( { name: name, count: communeNameCounts[name] } )
    }

    communeNameCountArr.sort( (a, b) => b.count - a.count )
    return communeNameCountArr.slice(0, 10)
}

function main() {

    let biggestProvinceByArea = findBiggestProvinceByArea(ProvincesData)
    console.log("The biggest province is " + biggestProvinceByArea.name + " with area of " + biggestProvinceByArea.areaInKm2 + " km2.")
    let smallestProvinceByArea = findSmallestProvinceByArea(ProvincesData)
    console.log("The smallest province is " + smallestProvinceByArea.name + " with area of " + smallestProvinceByArea.areaInKm2 + " km2.")

    let mostPopulatedProvince = findMostPopulatedProvince(ProvincesData)
    console.log("The most population province is " + mostPopulatedProvince.name + " with population of " + mostPopulatedProvince.population + ".")

    let leastPopulatedProvince = findLeastPopulatedProvince(ProvincesData)
    console.log("The least population province is " + leastPopulatedProvince.name + " with population of " + leastPopulatedProvince.population + ".")

    let highestDensityProvince = findProvinceWithHighestDensity(ProvincesData)
    console.log("The highest density province is " + highestDensityProvince.name + " with population of " + highestDensityProvince.population + " and area of " + highestDensityProvince.areaInKm2 + " km2.")

    let lowestDensityProvince = findProvinceWithLowestDensity(ProvincesData)
    console.log("The lowest density province is " + lowestDensityProvince.name + " with population of " + lowestDensityProvince.population + " and area of " + lowestDensityProvince.areaInKm2 + " km2.")

    let citiesCount = countCities(ProvincesData)
    console.log("Total number of cities: " + citiesCount)

    let provincesCount = countProvinces(ProvincesData)
    console.log("Total number of provinces: " + provincesCount)

    let communesCount = countCommunes(ProvincesData)
    console.log("Total number of communes: " + communesCount)

    let wardsCount = countWards(ProvincesData)
    console.log("Total number of wards: " + wardsCount)

    let specializedZonesCount = countSpecializedZones(ProvincesData)
    console.log("Total number of specialized zones: " + specializedZonesCount)

    let top10PopularCommuneNames = findTop10PopularCommuneNames(ProvincesData)
    console.log("Top 10 popular commune names:")
    for (let i = 0; i < top10PopularCommuneNames.length; i++) {
        console.log( (i + 1) + ". " + top10PopularCommuneNames[i].name + " - " + top10PopularCommuneNames[i].count + " communes")
    }
}

main()