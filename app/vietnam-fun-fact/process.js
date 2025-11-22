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

function main() {
    let numberOfProvinces = countProvinces(ProvincesData)
    let numberOfCommunes = countCommunes(ProvincesData)
    console.log("Total number of provinces: " + numberOfProvinces + " with " + numberOfCommunes + " communes.")
}

main()