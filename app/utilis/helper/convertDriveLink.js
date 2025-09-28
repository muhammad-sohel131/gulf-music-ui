function convertDriveLink(shareLink) {
    try {
        const match = shareLink.match(/\/d\/([a-zA-Z0-9_-]+)\//);
        if (match && match[1]) {
            const fileId = match[1];
            return `https://drive.google.com/uc?export=download&id=${fileId}`;
        }
        return null;
    } catch (error) {
        console.error("Invalid Google Drive link:", error);
        return null;
    }
}


export default convertDriveLink;