# How to Use Custom QR Codes

Your QR code component now supports multiple ways to provide custom QR codes! Here are three methods:

## Method 1: Custom URL/Data

Generate a QR code for a specific URL or text data:

```html
<!-- Custom URL -->
<qr-code url="https://example.com"></qr-code>

<!-- Custom text/data -->
<qr-code data="Your custom text here"></qr-code>

<!-- Custom title -->
<qr-code url="https://example.com" title="Visit My Site"></qr-code>

<!-- Custom size -->
<qr-code url="https://example.com" size="200"></qr-code>
```

## Method 2: Custom QR Code Image

If you have your own QR code image file:

1. **Upload your QR code image** to your project (e.g., in an `images/` folder)
2. **Or use an external URL** to your QR code image

```html
<!-- Local image file -->
<qr-code image="images/my-qr-code.png" title="Scan Me"></qr-code>

<!-- External image URL -->
<qr-code image="https://example.com/qr-code.png" title="My QR Code"></qr-code>
```

## Method 3: Edit in HTML

You can directly edit the `index.html` file:

```html
<!-- Current usage (auto-generates from current page URL) -->
<qr-code url="${window.location.href}"></qr-code>

<!-- Change to custom URL -->
<qr-code url="https://your-custom-url.com" title="Visit Us"></qr-code>

<!-- Or use custom image -->
<qr-code image="path/to/your/qr-code.png" title="Scan to Connect"></qr-code>
```

## Available Attributes

- `url` - URL to encode in QR code
- `data` - Any text/data to encode (alternative to URL)
- `image` - Path to custom QR code image file
- `size` - Size of QR code (default: 120, e.g., "200" for 200x200px)
- `title` - Custom title text above QR code

## Examples

### Example 1: Link to Social Media
```html
<qr-code url="https://instagram.com/yourprofile" title="Follow Us"></qr-code>
```

### Example 2: Contact Information
```html
<qr-code data="BEGIN:VCARD
VERSION:3.0
FN:Your Name
TEL:+1234567890
EMAIL:your@email.com
END:VCARD" title="Save Contact"></qr-code>
```

### Example 3: Custom Image
```html
<qr-code image="qr-codes/my-custom-qr.png" title="Scan Me"></qr-code>
```

## Quick Edit Guide

To change your QR code right now:

1. Open `index.html`
2. Find the line: `<qr-code url="${window.location.href}"></qr-code>`
3. Replace with one of the examples above
4. Save and push to GitHub!

Your changes will be live on your site automatically!
