import Provinces from "@/app/vietnam-geo/data";
import {countProvinces, countCities, countCommunes, countWards, countSpecializedZones} from "@/app/vietnam-geo/process";

export default function VietnamGeo() {
    let numberOfProvinces = countProvinces(Provinces)
    let numberOfCities = countCities(Provinces)
    let numberOfCommunes = countCommunes(Provinces)
    let numberOfWards = countWards(Provinces)
    let numberOfSpecializedZones = countSpecializedZones(Provinces)
    let totalCommunes = numberOfCommunes + numberOfWards + numberOfSpecializedZones

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
        </div>
    )
}
