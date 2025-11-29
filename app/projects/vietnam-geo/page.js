"use client"

import {Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts"
import VietnamGeoHeader from '@/components/VietnamGeoHeader';
import Provinces from "@/app/projects/vietnam-geo/data";
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
    findTop10PopularCommuneNames,
    findTop10PopularWordsInCommuneName

} from "@/app/projects/vietnam-geo/process";

export default function VietnamGeo() {
    return (
        <main>
            <VietnamGeoHeader/>
            <UnitStatCards/>
            <ComparisonCards/>
            <ProvinceCommunalUnitsChart/>
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

function ProvinceCommunalUnitsChart() {
    let provinces = [
        {name: "Ho Chi Minh", totalUnits: 322, totalCommunes: 58, totalWards: 259, totalSpecializedZones: 5},
        {name: "Hanoi", totalUnits: 584, totalCommunes: 386, totalWards: 194, totalSpecializedZones: 4},
        {name: "Thanh Hoa", totalUnits: 556, totalCommunes: 520, totalWards: 34, totalSpecializedZones: 2},
        {name: "Nghe An", totalUnits: 460, totalCommunes: 425, totalWards: 33, totalSpecializedZones: 2},
        {name: "Dong Nai", totalUnits: 173, totalCommunes: 96, totalWards: 76, totalSpecializedZones: 1},
        {name: "Binh Duong", totalUnits: 91, totalCommunes: 35, totalWards: 55, totalSpecializedZones: 1},
        {name: "Da Nang", totalUnits: 56, totalCommunes: 11, totalWards: 45, totalSpecializedZones: 0},
        {name: "Hai Phong", totalUnits: 178, totalCommunes: 116, totalWards: 61, totalSpecializedZones: 1},
        {name: "Can Tho", totalUnits: 85, totalCommunes: 58, totalWards: 27, totalSpecializedZones: 0},
        {name: "Dong Thap", totalUnits: 134, totalCommunes: 122, totalWards: 12, totalSpecializedZones: 0},
        {name: "Kien Giang", totalUnits: 144, totalCommunes: 130, totalWards: 13, totalSpecializedZones: 1},
        {name: "Lam Dong", totalUnits: 148, totalCommunes: 130, totalWards: 17, totalSpecializedZones: 1},
        {name: "Long An", totalUnits: 184, totalCommunes: 170, totalWards: 13, totalSpecializedZones: 1},
        {name: "Tien Giang", totalUnits: 136, totalCommunes: 119, totalWards: 16, totalSpecializedZones: 1},
        {name: "An Giang", totalUnits: 134, totalCommunes: 119, totalWards: 14, totalSpecializedZones: 1},
        {name: "Ba Ria-Vung Tau", totalUnits: 81, totalCommunes: 60, totalWards: 20, totalSpecializedZones: 1},
        {name: "Bac Giang", totalUnits: 213, totalCommunes: 199, totalWards: 13, totalSpecializedZones: 1},
        {name: "Bac Ninh", totalUnits: 111, totalCommunes: 90, totalWards: 20, totalSpecializedZones: 1},
        {name: "Ben Tre", totalUnits: 155, totalCommunes: 142, totalWards: 12, totalSpecializedZones: 1},
        {name: "Binh Dinh", totalUnits: 165, totalCommunes: 148, totalWards: 16, totalSpecializedZones: 1},
        {name: "Binh Phuoc", totalUnits: 89, totalCommunes: 79, totalWards: 9, totalSpecializedZones: 1},
        {name: "Binh Thuan", totalUnits: 109, totalCommunes: 94, totalWards: 14, totalSpecializedZones: 1},
        {name: "Ca Mau", totalUnits: 107, totalCommunes: 96, totalWards: 10, totalSpecializedZones: 1},
        {name: "Cao Bang", totalUnits: 181, totalCommunes: 173, totalWards: 7, totalSpecializedZones: 1},
        {name: "Dak Lak", totalUnits: 152, totalCommunes: 137, totalWards: 14, totalSpecializedZones: 1},
        {name: "Dak Nong", totalUnits: 71, totalCommunes: 64, totalWards: 6, totalSpecializedZones: 1},
        {name: "Dien Bien", totalUnits: 115, totalCommunes: 110, totalWards: 4, totalSpecializedZones: 1},
        {name: "Gia Lai", totalUnits: 163, totalCommunes: 150, totalWards: 12, totalSpecializedZones: 1},
        {name: "Ha Giang", totalUnits: 193, totalCommunes: 187, totalWards: 5, totalSpecializedZones: 1},
        {name: "Ha Nam", totalUnits: 116, totalCommunes: 106, totalWards: 9, totalSpecializedZones: 1},
        {name: "Ha Tinh", totalUnits: 223, totalCommunes: 204, totalWards: 18, totalSpecializedZones: 1},
        {name: "Hau Giang", totalUnits: 72, totalCommunes: 63, totalWards: 8, totalSpecializedZones: 1},
        {name: "Hoa Binh", totalUnits: 152, totalCommunes: 144, totalWards: 7, totalSpecializedZones: 1},
        {name: "Hung Yen", totalUnits: 152, totalCommunes: 140, totalWards: 11, totalSpecializedZones: 1}
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Communal Unit Breakdown by Province (Mockup data)
                </h2>
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="h-[600px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={provinces}
                                margin={{top: 20, right: 30, left: 20, bottom: 5}}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb"/>
                                <XAxis
                                    dataKey="name"
                                    tick={{fill: '#6b7280', fontSize: 10}}
                                    angle={-45}
                                    textAnchor="end"
                                    height={120}
                                />
                                <YAxis
                                    tick={{fill: '#6b7280', fontSize: 11}}
                                    label={{
                                        value: 'Number of Units',
                                        angle: -90,
                                        position: 'insideLeft',
                                        style: {fontSize: 12, fill: '#6b7280'}
                                    }}
                                />
                                <Tooltip
                                    formatter={(value) => value.toLocaleString()}
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '6px',
                                        fontSize: '12px'
                                    }}
                                />
                                <Legend
                                    wrapperStyle={{fontSize: '12px'}}
                                    verticalAlign="top"
                                    height={36}
                                />
                                <Bar
                                    dataKey="totalCommunes"
                                    stackId="a"
                                    fill="#10b981"
                                    name="Communes"
                                />
                                <Bar
                                    dataKey="totalWards"
                                    stackId="a"
                                    fill="#3b82f6"
                                    name="Wards"
                                />
                                <Bar
                                    dataKey="totalSpecializedZones"
                                    stackId="a"
                                    fill="#f59e0b"
                                    name="Specialized Zones"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>
        </div>
    );
}

function TopCommuneMetricsCharts() {
    let top10popularCommuneNames = findTop10PopularCommuneNames(Provinces)
    let top10popularWords = findTop10PopularWordsInCommuneName(Provinces)

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
                    <BarChart data={data} margin={{top: 5, right: 10, left: 10, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb"/>
                        <XAxis
                            dataKey="name"
                            tick={{fill: '#6b7280', fontSize: 11}}
                            angle={-45}
                            textAnchor="end"
                            height={80}
                        />
                        <YAxis tick={{fill: '#6b7280', fontSize: 11}}/>
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
