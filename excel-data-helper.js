// Helper script to update YouTube IDs from Excel data
// Run this in browser console after loading the Excel data

function updateYouTubeData(excelData) {
    // Example usage:
    // const data = {
    //     "HENG_HOCKLEE": "VIDEO_ID_HERE",
    //     "VENG_PITOU": "VIDEO_ID_HERE",
    //     // ... etc
    //     "TEAM": "TEAM_VIDEO_ID_HERE"
    // };
    // updateYouTubeData(data);

    console.log("Updating YouTube data...");

    // Update individual players
    playersData.forEach((player, index) => {
        const key = player.name.en.replace(" ", "_");
        if (excelData[key]) {
            playersData[index].youtubeId = extractYouTubeId(excelData[key]);
            console.log(`Updated ${player.name.en}: ${playersData[index].youtubeId}`);
        }
    });

    // Update team video
    if (excelData.TEAM) {
        teamYoutubeId = extractYouTubeId(excelData.TEAM);
        console.log(`Updated team video: ${teamYoutubeId}`);
    }

    // Re-render the page
    renderTeamVideo();
    renderPlayers();

    console.log("YouTube data updated successfully!");
}

function extractYouTubeId(url) {
    if (!url) return "";

    // Handle different YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
        return match[2];
    }

    // If it's already just an ID
    if (url.length === 11 && /^[a-zA-Z0-9_-]+$/.test(url)) {
        return url;
    }

    return "";
}

// Make functions available globally
window.updateYouTubeData = updateYouTubeData;
window.extractYouTubeId = extractYouTubeId;