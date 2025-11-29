'use client';

import {usePathname} from 'next/navigation';
import Link from 'next/link';

export default function Header({title, subtitle}) {
    const pathname = usePathname();

    // Generate breadcrumbs based on current path
    const generateBreadcrumbs = () => {
        const paths = pathname.split('/').filter(Boolean);
        const breadcrumbs = [{label: 'Home', path: '/'}];

        let currentPath = '';
        paths.forEach((segment, index) => {
            currentPath += `/${segment}`;

            // Don't add the current page as a breadcrumb
            if (index < paths.length - 1) {
                breadcrumbs.push({
                    label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
                    path: currentPath
                });
            }
        });

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    return (
        <header className="border-b bg-white">
            <div className="container mx-auto px-4 py-6">
                {/* Breadcrumbs */}
                {breadcrumbs.length > 0 && (
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        {breadcrumbs.map((crumb, index) => (
                            <div key={crumb.path} className="flex items-center gap-2">
                                <Link
                                    href={crumb.path}
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    {crumb.label}
                                </Link>
                                {index < breadcrumbs.length - 1 && (
                                    <span className="text-gray-400">/</span>
                                )}
                            </div>
                        ))}
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-medium">{title}</span>
                    </nav>
                )}

                {/* Title and Subtitle */}
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
