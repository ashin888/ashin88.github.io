document.getElementById('generateButton').addEventListener('click', function () {
  const longUrl = document.getElementById('longUrl').value;
  if (longUrl) {
    const shortUrl = generateShortUrl();
    const shortUrlContainer = document.getElementById('shortUrlContainer');
    shortUrlContainer.innerHTML = `<p>Short URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a></p>`;
    setTimeout(function () {
      window.location.href = longUrl;
    }, 2000);
  }
});

function generateShortUrl() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let shortUrl = '';
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    shortUrl += characters.charAt(randomIndex);
  }
  return `http://ashin888.github.io/${shortUrl}`;
}
