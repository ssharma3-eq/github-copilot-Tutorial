# Try Digital - Digital Marketing Agency Website

A complete, professional static website for Try Digital, a digital marketing agency based in Rohtak, Haryana, India.

## Project Overview

Try Digital is a full-service digital marketing agency offering SEO, Social Media Marketing, Email Marketing, Creative Design, Content Marketing, PPC Advertising, Web Development, and Analytics services.

## Features

✅ Fully Responsive Design - Mobile, Tablet, and Desktop compatible
✅ Modern UI/UX Design - Professional and engaging interface
✅ Multiple Pages - Home, About, Services, and Contact pages
✅ Contact Form - Functional contact form with validation
✅ Service Showcase - Detailed service listings
✅ Team Section - Team member profiles
✅ Statistics Section - Company achievements
✅ Google Maps Integration - Location display
✅ Social Media Links - Easy social connection
✅ Performance Optimized - Fast loading and smooth animations
✅ SEO Friendly - Proper meta tags and structure

## File Structure

```
github-copilot-Tutorial/
│
├── index.html          # Homepage with hero section and services preview
├── about.html          # About company page with mission, vision, and team
├── services.html       # Detailed services page with all offerings
├── contact.html        # Contact page with form and location map
├── styles.css          # Complete CSS styling with responsive design
├── script.js           # JavaScript for interactivity and form handling
└── README.md           # This file
```

## Pages Description

### 1. **index.html** - Homepage
- Hero section with call-to-action buttons
- Features section highlighting company strengths
- Services preview with 6 main services
- About preview section
- Statistics section showing company achievements
- Call-to-action section
- Footer with contact info and social links

### 2. **about.html** - About Page
- Company background and mission
- Mission, Vision, and Values cards
- Why Choose Us section
- Team members section
- Company statistics
- Footer with navigation

### 3. **services.html** - Services Page
- Detailed service cards for 8 services:
  - SEO Optimization
  - Social Media Marketing
  - Email Marketing
  - Creative Design
  - Content Marketing
  - PPC Advertising
  - Web Development
  - Analytics & Reporting
- Service features and benefits listed
- Process section showing workflow
- Call-to-action section

### 4. **contact.html** - Contact Page
- Contact information section
- Phone, email, and address details
- Business hours
- Contact form with validation
- Benefits of working with the company
- Google Maps integration
- Social media links
- Call-to-action section

## Styling (styles.css)

The website uses a modern, professional color scheme:
- **Primary Color**: #2563eb (Blue)
- **Secondary Color**: #1e40af (Dark Blue)
- **Light Background**: #f8fafc (Light Gray)

### Key Features:
- Mobile-first responsive design
- CSS Grid and Flexbox layouts
- Smooth transitions and hover effects
- Professional typography
- Optimized for all screen sizes

### Responsive Breakpoints:
- Desktop: 1200px and above
- Tablet: 768px to 1199px
- Mobile: Below 768px
- Small Mobile: Below 480px

## JavaScript (script.js)

### Features:
- Contact form validation
- Success/error message handling
- Email validation
- Smooth scroll behavior
- Navigation active state management
- Scroll animations for page elements
- Intersection Observer API for performance
- Event tracking and analytics support

## Setup Instructions

1. **Save the files** in your project directory
2. **No dependencies needed** - Pure HTML, CSS, and JavaScript
3. **Open index.html** in your web browser to view the website
4. **No server required** - Works on local file system

## Customization Guide

### Change Company Details

Edit the following in all HTML files:
- **Email**: Change `info@trydigital.com` to your email
- **Phone**: Change `+91-9876543210` to your phone
- **Location**: Change `Rohtak, Haryana, India` to your location
- **Company Name**: Change `Try Digital` to your company name

### Change Colors

Edit `/root` colors in `styles.css`:
```css
:root {
    --primary-color: #2563eb;      /* Change primary blue */
    --secondary-color: #1e40af;    /* Change secondary blue */
    --text-color: #333;             /* Change text color */
    --light-bg: #f8fafc;            /* Change background */
}
```

### Modify Services

Edit the service cards in `services.html` to match your offerings.

### Add Social Links

Replace social media links in footer and contact page with your actual profiles.

### Enable Form Submission

To make the contact form fully functional, integrate with a backend service like:
- Formspree
- EmailJS
- Node.js backend
- Third-party form service

Example with Formspree (add to script.js):
```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
    });
    // Handle response
});
```

## Browser Compatibility

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Minified CSS and JavaScript recommended for production
- Images optimized and compressed
- Lazy loading implemented in script.js
- Fast DOM manipulation
- CSS Grid for efficient layouts

## SEO Optimization

- Semantic HTML structure
- Proper meta tags
- Mobile-responsive design
- Fast page load times
- Structured content
- Internal linking between pages

## Future Enhancements

Potential additions:
- Blog section
- Testimonials/Client reviews
- Portfolio/Case studies
- Video background
- Live chat support
- Backend database integration
- Admin panel for content management
- Newsletter signup
- Client login area

## License

This website template is provided as-is for Try Digital company use.

## Support

For issues or customization needs, refer to the comments in:
- `styles.css` - CSS organization guide
- `script.js` - JavaScript function descriptions
- Individual HTML files - Section comments

## Credits

Created with modern web development practices using:
- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons (CDN)
- Google Maps Embed API

---

**Try Digital** - Rohtak, Haryana, India
Digital Marketing Agency | Web Development | SEO Services

For more information, visit our website or contact us!
