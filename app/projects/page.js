// file: app/projects/page.js
export default function ProjectsGallery() {
    return (
        <main>
            <ProjectsHeader/>
            <ProjectsGrid/>
        </main>
    )
}

function ProjectsHeader() {
    return (
        <header className="border-b bg-white">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Project Gallery
                    </h1>
                    <p className="text-sm text-gray-600">
                        A collection of data visualization and dashboard projects
                    </p>
                </div>
            </div>
        </header>
    );
}

function ProjectsGrid() {
    // Project data - will expand as you create more projects
    let projects = [
        {
            name: "Vietnam Geo Dashboard",
            description: "Interactive dashboard visualizing Vietnam's administrative geography, including provinces, communes, population, and area statistics with charts and comparisons.",
            path: "/projects/vietnam-geo",
            isPrototype: false
        },
        {
            name: "Finance Dashboard",
            description: "Personal finance tracker with transaction management, category breakdown charts, and spending analysis to monitor income and expenses.",
            path: "/projects/finance-dashboard",
            isPrototype: true
        },
        {
            name: "Weather Analytics",
            description: "Real-time weather dashboard showing current conditions, temperature, humidity, and wind speed for major cities across Vietnam and Asia.",
            path: "/projects/weather-analytics",
            isPrototype: true
        },
        {
            name: "Investment Portfolio",
            description: "Investment portfolio tracker with holdings and transaction management, asset allocation and sector breakdown charts, historical performance visualization, live price updates, and risk metrics for rebalancing.",
            path: "/projects/investment-portfolio",
            isPrototype: true
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.path} {...project} />
                    ))}
                </div>
            </section>
        </div>
    );
}

function ProjectCard({name, description, path, isPrototype}) {
    return (
        <a
            href={path}
            className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-6 group"
        >
            <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {name}
                </h3>
                {isPrototype && (
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-amber-100 text-amber-800">
                        Prototype
                    </span>
                )}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
                {description}
            </p>
            <div className="mt-4 flex items-center text-sm text-blue-600 group-hover:text-blue-700">
                <span>View Project</span>
                <svg
                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </a>
    );
}
