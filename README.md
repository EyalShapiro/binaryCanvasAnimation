# Binary Canvas Animation

My web site: [https://eyalshapiro.github.io/binaryCanvasAnimation/](https://eyalshapiro.github.io/binaryCanvasAnimation/)

## Project Description

This is a React application built with Vite that features a binary rain animation effect.

## Technologies Used

- React
- Vite
- TypeScript
- Styled Components
- ESLint
- Prettier

## Development

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/EyalShapiro/binaryCanvasAnimation.git
   cd binaryCanvasAnimation
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To build the project for production:

```bash
npm run build
```

This will create a `dist` folder with the production build.

## Deployment to GitHub Pages

1. Ensure the `base` path in `vite.config.ts` is set to `/binaryCanvasAnimation/` for the repository subpath.

2. Build the project:

   ```bash
   npm run build
   ```

3. Install GitHub Pages deployment tool (if not already installed):

   ```bash
   npm install -g gh-pages
   ```

4. Deploy to GitHub Pages:

   ```bash
   npx gh-pages -d dist
   ```

5. Alternatively, you can manually push the `dist` folder contents to the `gh-pages` branch or to the `docs` folder on the main branch and configure GitHub Pages accordingly.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## License

This project is private.
