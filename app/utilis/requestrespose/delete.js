const MakeDelete = async (endpoint, auth = null) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };

        if (auth) {
            headers["Authorization"] = `Bearer ${auth}`;
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}`, {
            method: "DELETE",
            headers,
        });

        if (!response.ok) {
            console.error(`DELETE request failed with status: ${response.status}`);
            return false;
        }

        const res = await response.json(); // Optional: use if backend returns deleted data
        return res; // Return deleted data or success message

    } catch (error) {
        console.error("DELETE request error:", error);
        return false;
    }
};

export default MakeDelete;
