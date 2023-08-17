function shortenUrl() {
  const longUrl = document.getElementById("longUrl").value;
  
  // Generate a random 4-character alphanumeric string
  const shortCode = generateShortCode();

  // Construct the short URL
  const shortUrl = "https://ashin888.github.io/short/" + shortCode;
  
  document.getElementById("shortUrl").textContent = "Short URL: " + shortUrl;
}

function generateShortCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let shortCode = "";
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    shortCode += characters.charAt(randomIndex);
  }
  return shortCode;
}
