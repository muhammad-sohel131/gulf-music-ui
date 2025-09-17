const MakePut = async (endpoint, data) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        // Check if the response is successful
        if (!response.ok) {
            console.error(`PUT request failed with status: ${response.status}`);
            return false;
        }

        const res = await response.json();
        return res; // Return the actual response data

    } catch (error) {
        console.error("PUT request error:", error);
        return false;
    }
};

export default MakePut;
