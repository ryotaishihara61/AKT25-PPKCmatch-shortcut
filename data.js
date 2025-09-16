// This file contains YouTube video IDs and other data
// Please update the YouTube IDs based on the Excel file (AKT_youtube-shortcuts.xlsx)

const videoData = {
    team: {
        youtubeId: "" // Add team video YouTube ID here
    },
    players: {
        "HENG_HOCKLEE": "",
        "VENG_PITOU": "",
        "VENG_SEAVLONG": "",
        "BROS_MEAS": "",
        "NHOEK_CHHEANG": "",
        "THA_SREYNUTH": "",
        "DY_SOPHA": ""
    }
};

// Function to extract YouTube ID from URL
function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}