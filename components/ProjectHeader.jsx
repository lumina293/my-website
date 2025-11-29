export default function ProjectHeader({title, subtitle}) {
    return (
        <header className="border-b bg-white">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold text-gray-900">
                        {title}
                    </h1>
                    <p className="text-sm text-gray-600">
                        {subtitle}
                    </p>
                </div>
            </div>
        </header>
    );
}
