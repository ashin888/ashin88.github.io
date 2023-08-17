function convertLink() {
            var driveLink = document.getElementById("driveLink").value;
            var fileId = driveLink.match(/\/d\/(.+?)\/view/)[1];
            var directDownloadLink = "https://drive.google.com/uc?export=download&id=" + fileId;
            document.getElementById("output").innerHTML = `<p>Direct Download Link:</p><a href="${directDownloadLink}">${directDownloadLink}</a> <button id="copyButton" onclick="copyLink()">Copy</button>`;
        }

        function copyLink() {
            var copyText = document.createElement("input");
            copyText.value = document.querySelector("#output a").href;
            document.body.appendChild(copyText);
            copyText.select();
            document.execCommand("copy");
            document.body.removeChild(copyText);
            alert("Link copied to clipboard");
        }
