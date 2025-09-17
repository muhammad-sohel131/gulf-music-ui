const MakeGetAll = async (endpoint, auth = null) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };

        if (auth) {
            headers["Authorization"] = `Bearer ${auth}`;
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}`, {
            method: "GET",
            headers,
        });

        if (!response.ok) {
            console.error(`GET request failed with status: ${response.status}`);
            return false;
        }

        const res = await response.json();
        return res; // Returns all data from endpoint

    } catch (error) {
        console.error("GET request error:", error);
        return false;
    }
};

export default MakeGetAll;
