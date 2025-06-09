import React from 'react'

function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <h1 className="text-7xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
            <p className="text-gray-500 mb-8">
                Sorry, the page you are looking for does not exist.
            </p>
        </div>
    )
}

export default NotFoundPage