export default function SetupPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Setup Guide</h1>

                    <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
                        {/* Prerequisites */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prerequisites</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Node.js 22+ (LTS)</li>
                                <li>MongoDB Atlas account or local MongoDB instance</li>
                                <li>VS Code with recommended extensions</li>
                            </ul>
                        </section>

                        {/* Installation */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        1. Clone the repository
                                    </h3>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                                        <code>git clone https://github.com/yourusername/staudiyokehak.git</code>
                                    </pre>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        2. Install dependencies
                                    </h3>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                                        <code>npm install</code>
                                    </pre>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        3. Set up environment variables
                                    </h3>
                                    <p className="text-gray-600 mb-2">Create a .env.local file:</p>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                                        <code>
                                            {`DATABASE_URL="mongodb://localhost:27017/staudiyokehak"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"`}
                                        </code>
                                    </pre>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        4. Initialize the database
                                    </h3>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                                        <code>
                                            {`npx prisma generate
npx prisma db push`}
                                        </code>
                                    </pre>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        5. Start the development server
                                    </h3>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                                        <code>npm run dev</code>
                                    </pre>
                                </div>
                            </div>
                        </section>

                        {/* Testing */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Running Tests</h2>
                            <div className="space-y-2">
                                <div>
                                    <p className="text-gray-600 mb-2">Unit tests:</p>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                                        <code>npm run test:unit</code>
                                    </pre>
                                </div>
                                <div>
                                    <p className="text-gray-600 mb-2">E2E tests:</p>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                                        <code>npm run test:e2e</code>
                                    </pre>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
