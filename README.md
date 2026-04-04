# Priya Mishra - Portfolio

A modern, production-ready 3D personal portfolio website built with Next.js, React Three Fiber, and Tailwind CSS.

## 🌟 Features

- **3D Hero Section** - Animated particle background with floating geometric shapes and stylized 3D avatar
- **Responsive Design** - Fully optimized for all device sizes (mobile-first approach)
- **Dark/Light Mode** - Theme toggle with system preference detection
- **Smooth Animations** - Framer Motion powered UI animations and transitions
- **Interactive Projects** - Project showcase with category filters and detailed modals
- **Contact Form** - Professional contact form with Resend email integration
- **Performance Optimized** - Code splitting, lazy loading, and optimized assets
- **SEO Ready** - Comprehensive metadata and OpenGraph tags
- **Accessibility** - WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

### Core
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library

### 3D Graphics
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Three.js** - 3D graphics library

### Animations
- **Framer Motion** - Production-ready animation library

### Email
- **Resend** - Modern email API for developers

### Icons
- **Lucide React** - Beautiful consistent icon pack

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_db
NEXT_PUBLIC_BASE_URL=http://localhost:3000
CORS_ORIGINS=*
RESEND_API_KEY=your_resend_api_key
SENDER_EMAIL=your_verified_email@example.com
```

4. Run the development server:
```bash
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── [[...path]]/
│   │       └── route.js          # API routes (contact form)
│   ├── globals.css            # Global styles and theme
│   ├── layout.js              # Root layout with theme provider
│   ├── page.js                # Main portfolio page
│   └── not-found.js           # Custom 404 page
├── components/
│   ├── 3d/
│   │   ├── Avatar3D.js        # 3D avatar component
│   │   └── HeroScene.js       # 3D hero background
│   ├── sections/
│   │   ├── About.js           # About section
│   │   ├── Achievements.js    # Achievements section
│   │   ├── Contact.js         # Contact form
│   │   ├── Experience.js      # Experience timeline
│   │   ├── Hero.js            # Hero section
│   │   ├── Projects.js        # Projects showcase
│   │   └── TechStack.js       # Tech stack with progress bars
│   └── ui/
│       ├── BackToTop.js       # Scroll to top button
│       ├── Navbar.js          # Navigation bar
│       ├── ScrollProgress.js  # Scroll progress indicator
│       ├── ThemeToggle.js     # Dark/light mode toggle
│       └── dialog.jsx         # Modal dialog component
├── lib/
│   └── utils.js               # Utility functions
├── public/
│   ├── images/
│   │   └── profile.jpg        # Profile image
│   └── resume.pdf             # Resume file
├── .env                       # Environment variables
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
└── README.md                  # Project documentation
```

## ⚙️ Configuration

### Email Integration (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Create an API key from the dashboard
3. Add your API key to `.env`:
```env
RESEND_API_KEY=re_your_api_key
SENDER_EMAIL=your_verified_email@example.com
```

**Note:** In test mode, Resend only allows sending to your verified email. To send to any recipient, verify your domain at resend.com/domains.

### Customization

#### Update Personal Information
- Edit `components/sections/Hero.js` for name and title
- Update `components/sections/About.js` for bio and specializations
- Modify `components/sections/TechStack.js` for skills
- Edit `components/sections/Projects.js` for project details
- Update `components/sections/Experience.js` for work history
- Modify `components/sections/Achievements.js` for certifications

#### Replace Profile Image
- Add your image to `public/images/profile.jpg`
- The 3D avatar will automatically use this image

#### Update Resume
- Replace `public/resume.pdf` with your resume

#### Theme Colors
- Edit color scheme in `app/globals.css` (CSS variables)
- Modify gradient colors in components (from-blue-500 to-violet-500)

## 🎨 Design System

### Color Palette
- **Primary**: Deep navy (#0F172A)
- **Accent**: Electric blue (#3B82F6)
- **Highlight**: Soft violet (#8B5CF6)
- **Text**: Off-white (#F8FAFC)
- **Background**: Dark with subtle gradients

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold with gradient text effects
- **Body**: Clean, readable font sizes

## 💡 Performance Optimization

- **Code Splitting**: Dynamic imports for 3D components
- **Lazy Loading**: Images and heavy components load on demand
- **Suspense Boundaries**: Smooth loading states
- **Optimized 3D**: Low-poly models and efficient rendering
- **Image Optimization**: Next.js automatic image optimization
- **Bundle Size**: Tree-shaking and module optimization

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

Vercel automatically optimizes Next.js applications for production.

### Other Platforms

Build the production bundle:
```bash
yarn build
yarn start
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO_URL` | MongoDB connection string | No |
| `DB_NAME` | Database name | No |
| `NEXT_PUBLIC_BASE_URL` | Public URL of the site | Yes |
| `RESEND_API_KEY` | Resend API key for emails | Yes |
| `SENDER_EMAIL` | Verified sender email | Yes |

## 🐛 Known Issues

- WebGL warnings in console (performance notices, doesn't affect UX)
- Resend test mode limits emails to verified address only
- 3D avatar may take a moment to load on slower connections

## 🛣️ Roadmap

- [ ] Add blog section
- [ ] Implement admin dashboard for content management
- [ ] Add analytics integration
- [ ] Create case study pages for projects
- [ ] Add testimonials section
- [ ] Implement multi-language support

## 📜 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Priya Mishra**
- Email: prixmishra090311@gmail.com
- LinkedIn: [linkedin.com/in/priya-mishra](https://linkedin.com/in/priya-mishra)
- GitHub: [github.com/priyamishra](https://github.com/priyamishra)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - 3D graphics
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Resend](https://resend.com/) - Email API
- [Lucide](https://lucide.dev/) - Icons

---

Built with ♥️ and lots of ☕