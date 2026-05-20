const resultDiv = document.getElementById("result");
const urlInput = document.getElementById("urlInput");

async function verifyURL() {
    let url = urlInput.value.trim();

    if (url === "") {
        showResult(
            "⚠ Please enter a URL",
            "invalid"
        );
        return;
    }

    // Auto add https
    if (
        !url.startsWith("http://") &&
        !url.startsWith("https://")
    ) {
        url = "https://" + url;
    }

    // Validate URL structure
    try {
        new URL(url);
    } catch {
        showResult(
            "❌ Invalid URL Format",
            "invalid"
        );
        return;
    }

    showLoading();

    setTimeout(async () => {
        let riskScore = 0;

        const lowerURL = url.toLowerCase();

        // Suspicious Keywords
        const suspiciousWords = [
            "hack",
            "free-money",
            "crack",
            "spam",
            "scam",
            "fake",
            "phishing",
            "bitcoin",
            "xxx",
            "darkweb",
            "cheat"
        ];

        suspiciousWords.forEach(word => {
            if (lowerURL.includes(word)) {
                riskScore += 40;
            }
        });

        // Risky Domains
        const riskyDomains = [
            ".xyz",
            ".tk",
            ".gq",
            ".ml",
            ".co",
            ".ga",
            ".ph",
            ".pl",
            ".cf"
        ];

        riskyDomains.forEach(domain => {
            if (lowerURL.includes(domain)) {
                riskScore += 30;
            }
        });

        // HTTP Warning
        if (url.startsWith("http://")) {
            riskScore += 35;
        }

        // Try Online Reachability Check
        // Note: fetch with mode: 'no-cors' will not throw an error on network issues
        // for cross-origin requests, making it difficult to use for reachability.
        // For a more robust check, you might need a backend proxy or alternative API.
        try {
            await fetch(url, {
                mode: "no-cors"
            });
        } catch (e) {
            // This catch block might not be triggered for network errors in no-cors mode
            // for cross-origin requests, but it's good practice to have.
            console.error("Fetch error:", e);
            riskScore += 25; // Add score if fetch truly fails (e.g., local network error)
        }


        // FINAL RESULT
        if (riskScore >= 60) {
            showResult(
                `❌ Unsafe Website Detected<br><small>High Risk Score: ${riskScore}</small>`,
                "invalid"
            );
        } else if (riskScore >= 30) {
            showResult(
                `⚠ Suspicious Website<br><small>Medium Risk Score: ${riskScore}</small>`,
                "invalid"
            );
        } else {
            showResult(
                `✅ Website Appears Safe<br><small>AI Security Score Passed</small>`,
                "valid"
            );
        }

    }, 1800);
}

function showLoading() {
    resultDiv.style.display = "flex";
    resultDiv.className = "result loading";
    resultDiv.innerHTML = `
        <div class="loader"></div>
        AI Scanning Website...
    `;
}

function showResult(message, type) {
    resultDiv.innerHTML = message;
    resultDiv.className = `result ${type}`;
}

// ENTER KEY
urlInput.addEventListener("keydown", (e) => {

    if(e.key === "Enter"){

        e.preventDefault();

        document
        .getElementById("googleBtn")
        .click();
    }
});

function googleCheck() {
    let url = urlInput.value.trim();

    if (url === "") {
        showResult(
            "⚠ Enter a website first",
            "invalid"
        );
        return;
    }

    // Remove https://
    url = url.replace(/^https?:\/\//, '');

    // Remove paths
    url = url.split('/')[0];

    // Google Search Query
    const query = `is ${url} listed in the Google Safe Browsing database or not? | Answer in one word: It's Safe or It isn't Safe.`;

    // Open Google Search
    window.open(
        `https://www.google.com/search?q=${encodeURIComponent(query)}`,
        "_blank"
    );
}