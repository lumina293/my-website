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
            <UnitStatCards/>
            <ComparisonCards/>
        </main>
    )
}

function UnitStatCards() {
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

function ComparisonCards() {
    let biggestProvinceByArea = findBiggestProvinceByArea(Provinces)
    let smallestProvinceByArea = findSmallestProvinceByArea(Provinces)
    const areaData = {
        category: "Area",
        unit: "km²",
        highest: {name: biggestProvinceByArea.name, value: biggestProvinceByArea.areaInKm2},
        lowest: {name: smallestProvinceByArea.name, value: smallestProvinceByArea.areaInKm2}
    };
    let mostPopulatedProvince = findMostPopulatedProvince(Provinces)
    let leastPopulatedProvince = findLeastPopulatedProvince(Provinces)
    const populationData = {
        category: "Population",
        unit: "people",
        highest: {name: mostPopulatedProvince.name, value: mostPopulatedProvince.population},
        lowest: {name: leastPopulatedProvince.name, value: leastPopulatedProvince.population}
    };
    let highestDensityProvince = findProvinceWithHighestDensity(Provinces)
    let lowestDensityProvince = findProvinceWithLowestDensity(Provinces)
    const densityData = {
        category: "Density",
        unit: "people/km²",
        highest: {
            name: highestDensityProvince.name,
            value: highestDensityProvince.population / highestDensityProvince.areaInKm2
        },
        lowest: {
            name: lowestDensityProvince.name,
            value: lowestDensityProvince.population / lowestDensityProvince.areaInKm2
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Comparisons
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ComparisonCard {...areaData} />
                    <ComparisonCard {...populationData} />
                    <ComparisonCard {...densityData} />
                </div>
            </section>
        </div>
    );
}

function ComparisonCard({category, unit, highest, lowest}) {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-4">
                {category}
            </h3>
            <div className="space-y-4">
                {/* Highest */}
                <div>
                    <p className="text-xs text-green-600 font-medium mb-1">
                        HIGHEST
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                        {highest.name}
                    </p>
                    <p className="text-sm text-gray-600">
                        {highest.value.toLocaleString()} {unit}
                    </p>
                </div>

                {/* Separator */}
                <div className="border-t"/>

                {/* Lowest */}
                <div>
                    <p className="text-xs text-blue-600 font-medium mb-1">
                        LOWEST
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                        {lowest.name}
                    </p>
                    <p className="text-sm text-gray-600">
                        {lowest.value.toLocaleString()} {unit}
                    </p>
                </div>
            </div>
        </div>
    );
}

