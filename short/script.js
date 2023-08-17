document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generateButton");
    const longUrlInput = document.getElementById("longUrl");
    const shortUrlLink = document.getElementById("shortUrl");

    generateButton.addEventListener("click", function() {
        const longUrl = longUrlInput.value;
        if (longUrl === "") {
            alert("Please enter a valid long URL.");
            return;
        }

        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let shortUrl = "";
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            shortUrl += characters.charAt(randomIndex);
        }

        const shortUrlPageContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta http-equiv="refresh" content="0;url=${longUrl}">
            </head>
            <body>
                Redirecting...
            </body>
            </html>
        `;

        const shortUrlBlob = new Blob([shortUrlPageContent], { type: "text/html" });
        const url = URL.createObjectURL(shortUrlBlob);

        shortUrlLink.href = url;
        shortUrlLink.textContent = url;
    });
});
