# Programmer Portfolio

A modern, responsive portfolio website built with React, TypeScript, TailwindCSS, and Vite. Features smooth animations, a clean design, and sections for showcasing your projects, skills, and contact information.

## Features

- ⚡ **Fast & Modern**: Built with Vite for lightning-fast development and optimized builds
- 🎨 **Beautiful UI**: Modern design with TailwindCSS and smooth animations
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🎯 **TypeScript**: Type-safe code for better development experience
- 🌙 **Dark Theme**: Eye-friendly dark color scheme
- 📧 **Contact Form**: Integrated contact section for easy communication
- 🚀 **Performance Optimized**: Fast loading times and smooth interactions

## Sections

- **Hero**: Eye-catching introduction with social links
- **About**: Personal information and highlights
- **Projects**: Showcase your best work with images and descriptions
- **Skills**: Display your technical expertise with progress bars
- **Contact**: Contact form and information
- **Footer**: Additional links and information

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Personal Information

Update the following files with your information:

1. **src/components/Hero.tsx**: Change your name, title, and social links
2. **src/components/About.tsx**: Update your bio and highlights
3. **src/components/Projects.tsx**: Add your projects with images, descriptions, and links
4. **src/components/Skills.tsx**: Modify skill categories and proficiency levels
5. **src/components/Contact.tsx**: Update contact information (email, phone, location)

### Colors & Styling

- Edit `tailwind.config.js` to customize the color scheme
- Modify `src/index.css` for global styles

### Images

Replace project images in `src/components/Projects.tsx` with your own images. You can:
- Use local images in the `public` folder
- Use external URLs (as currently configured)
- Use image hosting services

## 🚀 Live Site

Visit: [https://tanakakim120-afk.github.io/portfolio/](https://tanakakim120-afk.github.io/portfolio/)

## 🛠️ Built With

- React 18
- TypeScript
- Vite
- TailwindCSS
- Lucide Icons

## 📧 Contact

- Email: tanakakim120@gmail.com
- GitHub: [@tanakakim120-afk](https://github.com/tanakakim120-afk)

## Build for Production

Create an optimized production build:

```bash
npm run build
```

The build files will be in the `dist` folder, ready to deploy.

## Deployment

You can deploy this portfolio to various platforms:

- **Netlify**: Drag and drop the `dist` folder or connect your Git repository
- **Vercel**: Import your project and deploy with one click
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## Technologies Used

- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **TailwindCSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

Made with ❤️ using React and TailwindCSS
