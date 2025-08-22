# 📱 TechTalks – Casual Chats with Tech & Trends

A modern web application built with Next.js, TypeScript, and advanced animations, featuring a multi-step form experience with smooth transitions and accessibility-first design.

## 🚀 Features

- **Homepage** with Lottie animations and GSAP transitions
- **Walkthrough Tutorial** using Swiper.js with elegant slide transitions
- **Multi-step Form** with validation and reusable components
- **Results Page** with user data summary and celebration animation
- **Smooth Scrolling** powered by Lenis
- **Responsive Design** optimized for mobile-first approach
- **Accessibility** compliant with WCAG guidelines
- **CSS Variables** for consistent theming
- **TypeScript** for type safety

## 🛠 Tech Stack

- **Framework:** Next.js 14 with TypeScript
- **Styling:** CSS Variables with custom component styles
- **Animations:** GSAP + Lottie React
- **Smooth Scrolling:** Lenis
- **Slider:** Swiper.js
- **State Management:** React hooks

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd juicebox-assessment
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
juicebox-assessment/
├── components/          # Reusable React components
│   ├── ui/             # Basic UI components (Button, TextInput, Layout)
│   ├── LottieAnimation.tsx
│   ├── WalkthroughSlider.tsx
│   └── MultiStepForm.tsx
├── pages/              # Next.js pages
├── styles/             # CSS files with variables and component styles
├── lib/               # Utility functions and animations
├── types/             # TypeScript type definitions
└── public/            # Static assets
```

## 🎨 Key Components

### Layout Component

- Responsive header with navigation
- Mobile-optimized design
- Accessibility features

### Button Component

- Multiple variants (primary, secondary, ghost)
- Size variations (sm, md, lg)
- Full accessibility support with focus states

### TextInput Component

- Form validation with error states
- ARIA labels and descriptions
- Responsive design

### MultiStepForm

- Progressive form completion
- Real-time validation
- Step indicator with progress bar

## 🎭 Animations

- **GSAP** for smooth page transitions and element animations
- **Lottie** for complex vector animations
- **Lenis** for buttery smooth scrolling
- **Swiper** for touch-friendly slide transitions

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader optimization

## 📱 Responsive Design

- Mobile-first approach
- Flexible grid system using CSS Grid and Flexbox
- Responsive typography with CSS clamp()
- Touch-friendly interface elements

## 🚦 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🎯 Performance Optimizations

- Next.js automatic code splitting
- Lazy loading of animations
- Optimized asset delivery
- Minimal runtime dependencies

## 🔧 Configuration

### CSS Variables

All design tokens are defined in `styles/variables.css`:

- Colors and gradients
- Typography scales
- Spacing system
- Component styles

### TypeScript

Strict type checking with custom interfaces in `types/index.ts`

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy to Vercel
```

### Manual Deployment

```bash
npm run build
npm run start
```

## 📝 Notes

- Form data is temporarily stored in sessionStorage for demo purposes
- Lottie animations require JSON animation files (add your own in `/public/animations/`)
- GSAP and Lenis provide smooth, performant animations
- All components are built for reusability and maintainability

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for assessment purposes.

```

This completes the full project structure! The code includes:

1. **Complete Next.js setup** with TypeScript
2. **All required components** (Homepage, Walkthrough, Form, Results)
3. **GSAP and Lottie integration** for animations
4. **Swiper.js implementation** for tutorial slides
5. **Multi-step form** with validation
6. **CSS variables** for consistent theming
7. **Accessibility features** throughout
8. **Responsive design** optimized for mobile
9. **Smooth scrolling** with Lenis
10. **Comprehensive README** with setup instructions

To get started:
1. Create a new Next.js project
2. Copy all the code into the respective files
3. Install the dependencies from package.json
4. Add your Lottie animation JSON files to the `/public/animations/` folder
5. Run `npm run dev` to start developing!

The design matches the mobile screens you shared, with a dark theme, gradient elements, and smooth transitions between all sections.

```
