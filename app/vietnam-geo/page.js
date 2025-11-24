import Provinces from "@/app/vietnam-geo/data";
import {countProvinces, countCities} from "@/app/vietnam-geo/process";

export default function VietnamGeo() {
    let numberOfProvinces = countProvinces(Provinces)
    let numberOfCities = countCities(Provinces)

    return (
        <div>
            <h1>Địa lý Việt Nam</h1>
            <p>Việt Nam có tổng số {numberOfProvinces + numberOfCities} tỉnh thành,
                trong đó có {numberOfCities} thành phố, và {numberOfProvinces} tỉnh.
            </p>
        </div>
    )
}
