// file: app/projects/weather-analytics/page.js
import WeatherAnalyticsHeader from '@/components/WeatherAnalyticsHeader';

export default function WeatherAnalytics() {
    return (
        <main>
            <WeatherAnalyticsHeader/>
            <VietnamCitiesSection/>
            <AsianCitiesSection/>
        </main>
    )
}

function VietnamCitiesSection() {
    // Mock weather data for Vietnam cities
    let vietnamCities = [
        {
            city: "Hanoi",
            country: "Vietnam",
            temperature: 28,
            feelsLike: 31,
            condition: "Partly Cloudy",
            humidity: 75,
            windSpeed: 12,
            icon: "⛅"
        },
        {
            city: "Ho Chi Minh",
            country: "Vietnam",
            temperature: 32,
            feelsLike: 36,
            condition: "Sunny",
            humidity: 68,
            windSpeed: 8,
            icon: "☀️"
        },
        {
            city: "Da Nang",
            country: "Vietnam",
            temperature: 30,
            feelsLike: 33,
            condition: "Clear",
            humidity: 70,
            windSpeed: 15,
            icon: "☀️"
        },
        {
            city: "Hue",
            country: "Vietnam",
            temperature: 29,
            feelsLike: 32,
            condition: "Cloudy",
            humidity: 78,
            windSpeed: 10,
            icon: "☁️"
        },
        {
            city: "Hai Phong",
            country: "Vietnam",
            temperature: 27,
            feelsLike: 30,
            condition: "Light Rain",
            humidity: 82,
            windSpeed: 18,
            icon: "🌧️"
        },
        {
            city: "Can Tho",
            country: "Vietnam",
            temperature: 31,
            feelsLike: 35,
            condition: "Partly Cloudy",
            humidity: 72,
            windSpeed: 9,
            icon: "⛅"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Vietnam Cities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vietnamCities.map((cityData, index) => (
                        <WeatherCard key={index} {...cityData} />
                    ))}
                </div>
            </section>
        </div>
    );
}

function AsianCitiesSection() {
    // Mock weather data for major Asian cities
    let asianCities = [
        {
            city: "Beijing",
            country: "China",
            temperature: 15,
            feelsLike: 13,
            condition: "Hazy",
            humidity: 45,
            windSpeed: 20,
            icon: "🌫️"
        },
        {
            city: "Tokyo",
            country: "Japan",
            temperature: 22,
            feelsLike: 21,
            condition: "Clear",
            humidity: 60,
            windSpeed: 14,
            icon: "☀️"
        },
        {
            city: "Seoul",
            country: "South Korea",
            temperature: 18,
            feelsLike: 16,
            condition: "Cloudy",
            humidity: 55,
            windSpeed: 16,
            icon: "☁️"
        },
        {
            city: "Singapore",
            country: "Singapore",
            temperature: 31,
            feelsLike: 37,
            condition: "Thunderstorms",
            humidity: 85,
            windSpeed: 11,
            icon: "⛈️"
        },
        {
            city: "Jakarta",
            country: "Indonesia",
            temperature: 30,
            feelsLike: 35,
            condition: "Humid",
            humidity: 80,
            windSpeed: 7,
            icon: "🌤️"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Major Asian Cities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {asianCities.map((cityData, index) => (
                        <WeatherCard key={index} {...cityData} />
                    ))}
                </div>
            </section>
        </div>
    );
}

function WeatherCard({city, country, temperature, feelsLike, condition, humidity, windSpeed, icon}) {
    return (
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6">
            {/* City Header */}
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                        {city}
                    </h3>
                    <p className="text-xs text-gray-500">{country}</p>
                </div>
                <span className="text-4xl">{icon}</span>
            </div>

            {/* Temperature */}
            <div className="mb-4">
                <p className="text-4xl font-bold text-gray-900">
                    {temperature}°C
                </p>
                <p className="text-sm text-gray-600">
                    Feels like {feelsLike}°C
                </p>
            </div>

            {/* Condition */}
            <p className="text-sm font-medium text-gray-700 mb-4">
                {condition}
            </p>

            {/* Additional Details */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200">
                <div>
                    <p className="text-xs text-gray-500">Humidity</p>
                    <p className="text-sm font-medium text-gray-900">{humidity}%</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500">Wind Speed</p>
                    <p className="text-sm font-medium text-gray-900">{windSpeed} km/h</p>
                </div>
            </div>
        </div>
    );
}
