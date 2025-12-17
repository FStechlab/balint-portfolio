# GitHub Pages Deployment Guide

This guide will help you deploy your Next.js portfolio to GitHub Pages.

## Prerequisites

1. A GitHub account
2. A GitHub repository (create one if you haven't already)

## Deployment Steps

### Option 1: Deploy to Project Repository (e.g., `username/Portfolio`)

If your repository name is NOT `username.github.io`, follow these steps:

1. **Update the base path** in `next.config.mjs`:
   - Uncomment the `basePath` and `assetPrefix` lines
   - Replace `'Portfolio'` with your actual repository name

2. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to `main`

4. **Your site will be available at**:
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Option 2: Deploy to User/Organization Site (e.g., `username.github.io`)

If your repository name IS `username.github.io`, follow these steps:

1. **Keep the base path commented** (as it is now) in `next.config.mjs`

2. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

4. **Your site will be available at**:
   `https://YOUR_USERNAME.github.io/`

## Important Notes

- The `.nojekyll` file is included to prevent Jekyll from processing your site
- Images must be in the `public` folder and referenced with absolute paths (e.g., `/images/image.png`)
- The build process creates a static export in the `out` folder
- GitHub Actions will automatically build and deploy on every push to `main`

## Troubleshooting

- If images don't load, check that paths start with `/` (absolute paths)
- If the site shows a 404, verify the base path matches your repository name
- Check the Actions tab in GitHub to see if the deployment workflow succeeded

