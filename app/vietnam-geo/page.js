import Provinces from "@/app/vietnam-geo/data";
import {
    countProvinces,
    countCities,
    countCommunes,
    countWards,
    countSpecializedZones,
    findBiggestProvinceByArea,
    findSmallestProvinceByArea,
    findMostPopulatedProvince,
    findLeastPopulatedProvince,
    findProvinceWithHighestDensity,
    findProvinceWithLowestDensity,
    findTop10PopularCommuneNames

} from "@/app/vietnam-geo/process";

export default function VietnamGeo() {
    let numberOfProvinces = countProvinces(Provinces)
    let numberOfCities = countCities(Provinces)
    let numberOfCommunes = countCommunes(Provinces)
    let numberOfWards = countWards(Provinces)
    let numberOfSpecializedZones = countSpecializedZones(Provinces)
    let totalCommunes = numberOfCommunes + numberOfWards + numberOfSpecializedZones
    let biggestProvince = findBiggestProvinceByArea(Provinces)
    let smallestProvince = findSmallestProvinceByArea(Provinces)
    let mostPopulatedProvince = findMostPopulatedProvince(Provinces)
    let leastPopulatedProvince = findLeastPopulatedProvince(Provinces)
    let highestDensityProvince = findProvinceWithHighestDensity(Provinces)
    let lowestDensityProvince = findProvinceWithLowestDensity(Provinces)

    return (
        <div>
            <h1>Địa lý Việt Nam</h1>
            <p>Việt Nam có tổng số {numberOfProvinces + numberOfCities} tỉnh thành,
                trong đó có {numberOfCities} thành phố, và {numberOfProvinces} tỉnh.
            </p>
            <p>Có tất cả {totalCommunes} đơn vị cấp xã, trong đó có:</p>
            <ul>
                <li>{numberOfCommunes} xã</li>
                <li>{numberOfWards} phường</li>
                <li>{numberOfSpecializedZones} đặc khu</li>
            </ul>

            <p>Tỉnh {biggestProvince.name} có diện tích lớn nhất với diện tích: {biggestProvince.areaInKm2}</p>
            <p>Tỉnh {smallestProvince.name} có diện tích nhỏ nhất với diện tích: {smallestProvince.areaInKm2}</p>

            <p>Tỉnh đông dân nhất: {mostPopulatedProvince.name} với dân số: {mostPopulatedProvince.population}</p>
            <p>Tỉnh ít dân nhất: {leastPopulatedProvince.name} với dân số: {leastPopulatedProvince.population}</p>

            <p>Tỉnh có mật độ dân số lớn nhất: {highestDensityProvince.name} với mật
                độ: {highestDensityProvince.population / highestDensityProvince.areaInKm2} người/km2</p>
            <p>Tỉnh có mật độ dân số nhỏ nhất: {lowestDensityProvince.name} với mật
                độ: {lowestDensityProvince.population / lowestDensityProvince.areaInKm2} người/km2</p>
        </div>
    )
}
