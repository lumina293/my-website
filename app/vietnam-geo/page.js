import VietnamGeoHeader from '@/components/VietnamGeoHeader';
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

    return (
        <main>
            <VietnamGeoHeader/>
            <StatSection/>
        </main>
    )
}

function StatSection() {
    let numberOfProvinces = countProvinces(Provinces)
    let numberOfCities = countCities(Provinces)
    const provincialData = {
        title: "Provincial Units",
        total: numberOfProvinces + numberOfCities,
        breakdown: [
            {label: "Provinces", value: numberOfProvinces},
            {label: "Cities", value: numberOfCities}
        ]
    };

    let numberOfCommunes = countCommunes(Provinces)
    let numberOfWards = countWards(Provinces)
    let numberOfSpecializedZones = countSpecializedZones(Provinces)
    let totalCommunes = numberOfCommunes + numberOfWards + numberOfSpecializedZones
    const communalData = {
        title: "Communal Units",
        total: totalCommunes,
        breakdown: [
            {label: "Communes", value: numberOfCommunes},
            {label: "Wards", value: numberOfWards},
            {label: "Specialized zones", value: numberOfSpecializedZones}
        ]
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Administrative Units
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <StatCard {...provincialData} />
                    <StatCard {...communalData} />
                </div>
            </section>
        </div>
    )
}

function StatCard({title, total, breakdown}) {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">
                {title}
            </h3>
            <p className="text-4xl font-bold text-gray-900 mb-4">
                {total.toLocaleString()}
            </p>
            {breakdown && breakdown.length > 0 && (
                <div className="space-y-1 text-sm text-gray-600">
                    {breakdown.map((item, index) => (
                        <p key={index}>• {item.label}: {item.value.toLocaleString()}</p>
                    ))}
                </div>
            )}
        </div>
    );
}
