export default function InquiryTable({ }) {


    const inquiries = [
        {
            email: "user1@example.com",
            subject: "Product Inquiry",
            message: "I want to know more about your product."
        },
        {
            email: "user2@example.com",
            subject: "Support",
            message: "I am having trouble logging in."
        },
    ];


    return (
        <div className="overflow-x-auto p-4">
            <div className="min-w-full bg-white border border-gray-200 rounded-xl shadow-md">
                <table className="min-w-full divide-y divide-gray-200">
                    {/* Table Header */}
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Subject
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Message
                            </th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="bg-white divide-y divide-gray-200">
                        {inquiries && inquiries.length > 0 ? (
                            inquiries.map((inquiry, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {inquiry.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {inquiry.subject}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        {inquiry.message}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                                    No inquiries found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
