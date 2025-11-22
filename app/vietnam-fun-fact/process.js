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
    // Do something here
    return provinces.length
}

function countCommunes(provinces) {
    let totalCommunes = 0
    for (let i = 0; i < provinces.length; i++) {
        totalCommunes += provinces[i].communes.length
    }
    return totalCommunes
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

function main() {
    let numberOfProvinces = countProvinces(ProvincesData)
    let numberOfCommunes = countCommunes(ProvincesData)
    console.log("Total number of provinces: " + numberOfProvinces + " with " + numberOfCommunes + " communes.")
    let biggestProvinceByArea = findBiggestProvinceByArea(ProvincesData)
    console.log("The biggest province is " + biggestProvinceByArea.name + " with area of " + biggestProvinceByArea.areaInKm2 + " km2.")
    let smallestProvinceByArea = findSmallestProvinceByArea(ProvincesData)
    console.log("The smallest province is " + smallestProvinceByArea.name + " with area of " + smallestProvinceByArea.areaInKm2 + " km2.")

    let mostPopulatedProvince = findMostPopulatedProvince(ProvincesData)
    console.log("The most population province is " + mostPopulatedProvince.name + " with population of " + mostPopulatedProvince.population + ".")

    let leastPopulatedProvince = findLeastPopulatedProvince(ProvincesData)
    console.log("The least population province is " + leastPopulatedProvince.name + " with population of " + leastPopulatedProvince.population + ".")
}

main()