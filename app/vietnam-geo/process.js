export function countProvinces(provinces) {
    let count = 0
    for (let i= 0; i < provinces.length; i++) {
        if (provinces[i].type === "Tỉnh") {
            count += 1
        }
    }
    return count;
}

export function countCities(provinces) {
    let count = 0
    for (let i = 0; i < provinces.length; i++) {
        if (provinces[i].type === "Thành phố") {
            count += 1
        }
    }
    return count;
}


export function countCommunes(provinces) {
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

export function countWards(provinces) {
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

export function countSpecializedZones(provinces) {
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
