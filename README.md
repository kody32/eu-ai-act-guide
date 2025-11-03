# EU AI Act & GDPR: Complete Compliance Guide

A comprehensive, interactive web application designed to help startups and SMEs navigate the European Union's AI Act and GDPR compliance requirements. This guide provides clear explanations, risk classifications, and practical compliance tools.

🌐 **Live Website**: [https://niranjanxprt.github.io/eu-ai-act-guide/](https://niranjanxprt.github.io/eu-ai-act-guide/)

## 🚀 Features

### Core Functionality

- **🎯 Interactive Compliance Checker**
  - Step-by-step questionnaire to determine your AI system's risk classification
  - Automated risk level assessment (Unacceptable, High-Risk, Limited-Risk, Minimal/No Risk)
  - Personalized compliance recommendations based on your answers
  - Deadline and penalty information specific to your risk category

- **📊 Risk Framework Explorer**
  - Detailed breakdown of all 4 risk levels:
    - **Unacceptable Risk** (BANNED) - Prohibited AI systems
    - **High-Risk AI Systems** - Strict regulatory requirements
    - **Limited-Risk AI** - Transparency obligations
    - **Minimal/No Risk** - Mostly unregulated
  - Visual indicators with color-coded status badges
  - Specific examples for each risk category
  - Requirements, deadlines, and penalties clearly outlined

- **🏥 Industry-Specific Guidance**
  - Healthcare AI systems compliance requirements
  - Financial services AI regulations
  - Sector-specific risk assessments and considerations

- **📂 AI Categories Browser**
  - Comprehensive list of AI system types
  - Searchable category explorer with filtering
  - Quick reference for common AI applications

- **🔗 GDPR Connection Analysis**
  - Side-by-side comparison of EU AI Act and GDPR requirements
  - Dual compliance strategies for systems processing personal data
  - Data protection impact assessment (DPIA) guidance

- **📅 Implementation Timeline**
  - Key dates and deadlines from 2024-2027
  - Phase-by-phase rollout schedule
  - Compliance milestone tracker

- **📚 Resources Library**
  - Official EU AI Act portal links
  - Implementation documents and guidelines
  - European AI Office resources
  - Compliance tools and assessment frameworks

- **❓ FAQ Section**
  - Expandable accordion with common questions
  - Answers about GDPR and AI Act intersection
  - SME-specific provisions and benefits
  - Compliance timeline guidance

### User Experience Features

- **🌓 Dark/Light Mode Toggle**
  - System preference detection
  - Persistent theme selection (localStorage)
  - Smooth theme transitions
  - Accessible theme switcher

- **📱 Responsive Design**
  - Mobile-first approach
  - Hamburger navigation for mobile devices
  - Touch-friendly interactive elements
  - Optimized for all screen sizes

- **🔍 Enhanced Navigation**
  - Smooth scroll navigation
  - Sticky navigation header
  - Quick actions menu
  - Category search functionality

- **⚡ Performance Optimized**
  - Fast page load times
  - No external dependencies (vanilla JavaScript)
  - Lightweight and efficient
  - Progressive enhancement

## 🛠️ Self-Hosting Instructions

This is a static website that can be hosted using any web server. Below are instructions for Python and Node.js servers.

### Option 1: Python HTTP Server

#### Using Python 3 (Recommended)

```bash
# Navigate to the project directory
cd eu-ai-act-guide

# Start the server on port 8000
python3 -m http.server 8000

# Or specify a custom port
python3 -m http.server 8080
```

#### Using Python 2

```bash
# Python 2 users can use SimpleHTTPServer
python -m SimpleHTTPServer 8000
```

#### Access the Website

Once the server is running, open your browser and navigate to:
- `http://localhost:8000`
- Or `http://localhost:8080` if you used a custom port

### Option 2: Node.js HTTP Server

#### Using `http-server` (npm package)

```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Navigate to the project directory
cd eu-ai-act-guide

# Start the server
http-server -p 8000

# Or with additional options
http-server -p 8000 -o  # Opens browser automatically
http-server -p 8000 -c-1  # Disables caching (useful for development)
```

#### Using `npx` (without global installation)

```bash
# Navigate to the project directory
cd eu-ai-act-guide

# Run http-server without installing globally
npx http-server -p 8000
```

#### Using `serve` package

```bash
# Install serve globally
npm install -g serve

# Navigate to the project directory
cd eu-ai-act-guide

# Start the server
serve -p 8000

# Or with additional options
serve -s . -p 8000  # Serves as SPA
```

#### Access the Website

Once the server is running, open your browser and navigate to:
- `http://localhost:8000`

### Server Configuration Notes

- **Port Selection**: Use any available port (8000, 3000, 8080, etc.)
- **CORS**: No special CORS configuration needed for local development
- **HTTPS**: For production, consider using a reverse proxy (nginx, Apache) with SSL certificates
- **Static Files**: All files are static, no server-side processing required

### Production Deployment Tips

1. **Use a Production Web Server**: For production, consider:
   - Nginx
   - Apache
   - Caddy
   - Cloudflare Pages
   - Netlify
   - Vercel

2. **Enable Compression**: Configure gzip/brotli compression for CSS and JavaScript files

3. **Set Cache Headers**: Configure appropriate cache headers for static assets

4. **HTTPS**: Always use HTTPS in production

## 📁 Project Structure

```
eu-ai-act-guide/
├── index.html          # Main HTML structure
├── style.css           # All styles and theme definitions
├── app.js              # Application logic and data
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🎨 Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS custom properties (variables)
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **No Build Process**: Works directly in the browser

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This project is designed for educational purposes. Contributions and improvements are welcome!

## 📄 License

This project is provided for educational purposes. Please consult qualified legal professionals for actual compliance guidance.

## 🔗 Links

- **Live Website**: [https://niranjanxprt.github.io/eu-ai-act-guide/](https://niranjanxprt.github.io/eu-ai-act-guide/)
- **GitHub Repository**: [https://github.com/niranjanxprt/eu-ai-act-guide](https://github.com/niranjanxprt/eu-ai-act-guide)

---

**Last Updated**: January 2025

**Note**: This guide is for informational purposes only and does not constitute legal advice. Always consult with qualified legal professionals for compliance guidance specific to your situation.
