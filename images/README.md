# Images Folder

This folder is for storing custom QR code images and other assets for your website.

## How to Use Custom QR Code Images

1. **Add your QR code image** to this folder (e.g., `my-qr-code.png`)
2. **Update the HTML** to use your custom image:

```html
<!-- In index.html, change this line: -->
<qr-code url="${window.location.href}"></qr-code>

<!-- To this: -->
<qr-code image="images/my-qr-code.png" title="Scan Me"></qr-code>
```

## Supported Image Formats
- PNG (recommended)
- JPG/JPEG
- SVG
- WebP

## Image Guidelines
- **Size**: 120x120px or larger (will be scaled down)
- **Format**: Square aspect ratio works best
- **Quality**: High contrast black and white QR codes work best

## Example Usage

```html
<!-- Custom QR code for social media -->
<qr-code image="images/instagram-qr.png" title="Follow Us"></qr-code>

<!-- Custom QR code for contact info -->
<qr-code image="images/contact-qr.png" title="Save Contact"></qr-code>

<!-- Custom QR code for app download -->
<qr-code image="images/app-download-qr.png" title="Download App"></qr-code>
```

## Quick Steps
1. Place your QR code image in this folder
2. Edit `index.html` line 43
3. Replace the QR code attributes with your image path
4. Save and push to GitHub
5. Your custom QR code will be live!
