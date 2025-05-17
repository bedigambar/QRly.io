let imageBox = document.getElementById("imageBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");
let downloadBtn = document.getElementById("downloadBtn");

function generateQR() {
    if (qrText.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        imageBox.classList.add("show-img");
        downloadBtn.style.display = "block";
    }
    else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
        downloadBtn.style.display = "none";
    }
}

function downloadQR() {
    const link = document.createElement('a');
    link.href = qrImg.src;
    link.download = 'qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}