function generateShortUrl() {
    const originalUrl = document.getElementById('originalUrl').value;
    if (!originalUrl) {
        alert('Please enter a URL');
        return;
    }

    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortCode = '';
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * randomChars.length);
        shortCode += randomChars.charAt(randomIndex);
    }

    const shortUrl = 'https://ashin888.github.io/short/' + shortCode;
    document.getElementById('shortUrl').textContent = shortUrl;
    document.getElementById('shortUrl').setAttribute('href', shortUrl);
}
