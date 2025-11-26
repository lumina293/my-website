"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
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
    findProvinceWithMostCommunalUnits,
    findProvinceWithLeastCommunalUnits,
    findTop10PopularCommuneNames

} from "@/app/vietnam-geo/process";

export default function VietnamGeo() {
    return (
        <main>
            <VietnamGeoHeader/>
            <UnitStatCards/>
            <ComparisonCards/>
            <TopCommuneMetricsCharts/>
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

    let mostCommunesProvince = findProvinceWithMostCommunalUnits(Provinces)
    let leastCommunesProvince = findProvinceWithLeastCommunalUnits(Provinces)
    const communalUnitData = {
        category: "Communal units",
        unit: "units",
        highest: {
            name: mostCommunesProvince.name,
            value: mostCommunesProvince.communes.length
        },
        lowest: {
            name: leastCommunesProvince.name,
            value: leastCommunesProvince.communes.length
        }
    };
    return (
        <div className="container mx-auto px-4 py-8">
            <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Comparisons
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <ComparisonCard {...areaData} />
                    <ComparisonCard {...populationData} />
                    <ComparisonCard {...densityData} />
                    <ComparisonCard {...communalUnitData} />
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

function TopCommuneMetricsCharts() {
    let top10popularCommuneNames = findTop10PopularCommuneNames(Provinces)

    let top10popularWords = [
        {name: "Tân", count: 890},
        {name: "Hòa", count: 745},
        {name: "Phú", count: 623},
        {name: "Thành", count: 567},
        {name: "Long", count: 489},
        {name: "An", count: 456},
        {name: "Bình", count: 398},
        {name: "Thạnh", count: 376},
        {name: "Đông", count: 334},
        {name: "Mỹ", count: 298}
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Popular Commune Names Analysis
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <BarChartCard
                        title="Top 10 Popular Commune Names"
                        data={top10popularCommuneNames}
                    />
                    <BarChartCard
                        title="Top 10 Popular Words in Commune Names"
                        data={top10popularWords}
                    />
                </div>
            </section>
        </div>
    );
}

function BarChartCard({title, data}) {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-4">
                {title}
            </h3>
            <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 60 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis
                            dataKey="name"
                            tick={{ fill: '#6b7280', fontSize: 11 }}
                            angle={-45}
                            textAnchor="end"
                            height={80}
                        />
                        <YAxis tick={{ fill: '#6b7280', fontSize: 11 }} />
                        <Tooltip
                            formatter={(value) => value.toLocaleString()}
                            contentStyle={{
                                backgroundColor: 'white',
                                border: '1px solid #e5e7eb',
                                borderRadius: '6px',
                                fontSize: '12px'
                            }}
                        />
                        <Bar
                            dataKey="count"
                            fill="#3b82f6"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
