# Portfolio Website

A modern, professional portfolio website built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## Features

- 🎨 Modern and beautiful UI with gradient effects
- ✨ Smooth animations using Framer Motion
- 📱 Fully responsive design
- 🚀 Built with Next.js 14 (App Router)
- 💅 Styled with TailwindCSS
- ⚡ Optimized for performance

## Sections

- **Hero**: Eye-catching introduction with gradient text
- **About**: Detailed professional background
- **Skills**: Interactive skill cards organized by category
- **Projects**: Showcase of past work (ready for project additions)
- **Contact**: Links to GitHub, LinkedIn, phone, and location

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Adding Projects

Edit `components/Projects.tsx` and add your projects to the `projects` array:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    technologies: ["React", "TypeScript", "Next.js"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://yourproject.com",
  },
];
```

### Updating Contact Information

Edit `components/Contact.tsx` and modify the `contactInfo` array with your details.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## License

This project is open source and available for personal use.

