# QRly.io

A simple, elegant tool for generating QR codes from text or URLs with one click.

## 📋 Overview

QRly.io is a lightweight web application that allows you to instantly create QR codes from any text input or links. The generated QR codes can be downloaded for use in your marketing materials, business cards, websites, or any other creative projects.

## ✨ Features

- Generate QR codes from any text or URL
- Clean, intuitive user interface
- Instant QR code generation
- One-click download functionality
- Responsive design for mobile and desktop
- No installation required - works directly in browser

## 🚀 Getting Started

No installation required! Simply access the application through your web browser.

### Local Development

If you want to run this project locally:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/QRly.io.git
   cd QRly.io
   ```

2. Open the `index.html` file in your browser or use a local server.
   
   For example, with Python's built-in server:
   ```
   python -m http.server
   ```
   Then visit `http://localhost:8000` in your browser.

## 💻 Usage

1. Enter any text or URL in the input field
2. Click "Generate QR Code"
3. Your QR code will be displayed instantly
4. Click "Download QR Code" to save the QR code as a PNG file

## 💻 How It Works

QRly.io uses the free QR Code API from [QR Server](https://goqr.me/api/) to generate QR codes based on user input. When you click the "Generate QR Code" button, your text or URL is sent to the API, which returns a QR code image. You can then download this image with a single click.

```javascript
// Core generation function
function generateQR() {
    if (qrText.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        imageBox.classList.add("show-img");
        downloadBtn.style.display = "block";
    }
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Digambar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📱 Browser Compatibility

- Chrome
- Firefox
- Safari
- Edge
- Opera

Works on both desktop and mobile devices.

## 🙏 Acknowledgements

- [QR Server API](https://goqr.me/api/) - For providing the QR code generation service
- Google Fonts for the Poppins font family
