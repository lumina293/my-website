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

function main() {
    let numberOfProvinces = countProvinces(ProvincesData)
    let numberOfCommunes = countCommunes(ProvincesData)
    console.log("Total number of provinces: " + numberOfProvinces + " with " + numberOfCommunes + " communes.")
    let biggestProvinceByArea = findBiggestProvinceByArea(ProvincesData)
    console.log("The biggest province is " + biggestProvinceByArea.name + " with area of " + biggestProvinceByArea.areaInKm2 + " km2.")
    let smallestProvinceByArea = findSmallestProvinceByArea(ProvincesData)
    console.log("The smallest province is " + smallestProvinceByArea.name + " with area of " + smallestProvinceByArea.areaInKm2 + " km2.")
}

main()