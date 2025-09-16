const playersData = [
    {
        name: { en: "HENG HOCKLEE", km: "HENG HOCKLEE" },
        photo: "HENG_HOCKLEE.jpg",
        matches: [
            { title: { en: "Match 1", km: "ការប្រកួតទី១" }, youtubeId: "jz3ewJGraa8", startTime: 2124 },
            { title: { en: "Match 2", km: "ការប្រកួតទី២" }, youtubeId: "jz3ewJGraa8", startTime: 2295 }
        ]
    },
    {
        name: { en: "VENG PITOU", km: "VENG PITOU" },
        photo: "VENG_PITOU.jpg",
        matches: [
            { title: { en: "Match 1", km: "ការប្រកួតទី១" }, youtubeId: "GqaeQYOtGHY", startTime: 2031 },
            { title: { en: "Match 2", km: "ការប្រកួតទី២" }, youtubeId: "GqaeQYOtGHY", startTime: 2202 }
        ]
    },
    {
        name: { en: "VENG SEAVLONG", km: "VENG SEAVLONG" },
        photo: "VENG_SEAVLONG.jpg",
        matches: [
            { title: { en: "Match 1", km: "ការប្រកួតទី១" }, youtubeId: "at7h64hXE8E", startTime: 3811 },
            { title: { en: "Match 2", km: "ការប្រកួតទី២" }, youtubeId: "at7h64hXE8E", startTime: 4208 }
        ]
    },
    {
        name: { en: "BROS MEAS", km: "BROS MEAS" },
        photo: "BROS_MEAS.jpg",
        matches: [
            { title: { en: "Match 1", km: "ការប្រកួតទី១" }, youtubeId: "GqaeQYOtGHY", startTime: 651 },
            { title: { en: "Match 2", km: "ការប្រកួតទី២" }, youtubeId: "GqaeQYOtGHY", startTime: 707 }
        ]
    },
    {
        name: { en: "NHOEK CHHEANG", km: "NHOEK CHHEANG" },
        photo: "NHOEK_CHHEANG.jpg",
        matches: [
            { title: { en: "Match 1", km: "ការប្រកួតទី១" }, youtubeId: "cVyeDK15kJg", startTime: 3392 },
            { title: { en: "Match 2", km: "ការប្រកួតទី២" }, youtubeId: "cVyeDK15kJg", startTime: 3501 }
        ]
    },
    {
        name: { en: "THA SREYNUTH", km: "THA SREYNUTH" },
        photo: "THA_SREYNUTH.jpg",
        matches: [
            { title: { en: "Match 1", km: "ការប្រកួតទី១" }, youtubeId: "t50VVvL_cdY", startTime: 2824 }
        ]
    },
    {
        name: { en: "DY SOPHA", km: "DY SOPHA" },
        photo: "DY_SOPHA.jpg",
        matches: [
            { title: { en: "Match 1", km: "ការប្រកួតទី១" }, youtubeId: "mO0fncKK4CQ", startTime: 4732 }
        ]
    }
];

const teamMatches = [
    { title: { en: "Team Match 1", km: "ការប្រកួតក្រុមទី១" }, youtubeId: "RO7u8HpW3qs", startTime: 462 },
    { title: { en: "Team Match 2", km: "ការប្រកួតក្រុមទី២" }, youtubeId: "RO7u8HpW3qs", startTime: 3471 }
];

let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');

    document.querySelectorAll('[data-en]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });

    if (lang === 'km') {
        document.body.classList.add('khmer-text');
    } else {
        document.body.classList.remove('khmer-text');
    }

    renderPlayers();
}

function getYouTubeEmbedUrl(videoId, startTime) {
    if (!videoId) return null;
    const baseUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
    return startTime ? `${baseUrl}&start=${startTime}` : baseUrl;
}

function renderTeamVideo() {
    const teamVideoContainer = document.getElementById('team-video');

    const teamMatchesHtml = teamMatches.map((match, index) => {
        const matchTitle = match.title[currentLang];
        const embedUrl = getYouTubeEmbedUrl(match.youtubeId, match.startTime);

        return `
            <div class="match-container">
                <h4 class="match-title">${matchTitle}</h4>
                <div class="video-container">
                    <iframe src="${embedUrl}"
                            allowfullscreen>
                    </iframe>
                </div>
            </div>
        `;
    }).join('');

    teamVideoContainer.innerHTML = teamMatchesHtml;
}

function renderPlayers() {
    const playersGrid = document.getElementById('players-grid');
    playersGrid.innerHTML = '';

    playersData.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';

        const playerName = player.name[currentLang];

        // Generate HTML for all matches
        const matchesHtml = player.matches.map((match, index) => {
            const matchTitle = match.title[currentLang];

            if (match.youtubeId) {
                return `
                    <div class="match-container">
                        <h4 class="match-title">${matchTitle}</h4>
                        <div class="player-video">
                            <iframe src="${getYouTubeEmbedUrl(match.youtubeId, match.startTime)}"
                                    allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="match-container">
                        <h4 class="match-title">${matchTitle}</h4>
                        <div class="no-video">
                            <p>${currentLang === 'en' ? 'Match video will be available soon' : 'វីដេអូការប្រកួតនឹងមានក្នុងពេលឆាប់ៗ'}</p>
                        </div>
                    </div>
                `;
            }
        }).join('');

        playerCard.innerHTML = `
            <div class="player-banner">
                <img src="${player.photo}" alt="${playerName}" class="player-photo">
                <div class="player-info">
                    <h3>${playerName}</h3>
                    <p class="match-count">${currentLang === 'en' ? `${player.matches.length} Match${player.matches.length > 1 ? 'es' : ''}` : `ការប្រកួត ${player.matches.length}`}</p>
                </div>
            </div>
            <div class="matches-container">
                ${matchesHtml}
            </div>
        `;

        playersGrid.appendChild(playerCard);
    });
}

async function loadExcelData() {
    try {
        console.log('Excel data would be loaded here from AKT_youtube-shortcuts.xlsx');
    } catch (error) {
        console.warn('Could not load Excel data:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    renderTeamVideo();
    renderPlayers();
    loadExcelData();
});

window.switchLanguage = switchLanguage;