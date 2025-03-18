# Synthos3 Website

This is the official website for Synthos3, an AI consulting company.

## Development

This website is built with [Hugo](https://gohugo.io/) and [Tailwind CSS](https://tailwindcss.com/).

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (latest version)
- [Node.js](https://nodejs.org/) (v14 or later)
- npm (comes with Node.js)

### Local Development

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   hugo server
   ```
4. Visit http://localhost:1313 in your browser

### Building for Production

To build the site for production:

```
hugo --minify
```

The built site will be in the `public` directory.

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch, using GitHub Actions.

## Custom Domain

The site is configured to use the custom domain `synthos3.com`.

## License

All rights reserved.
