# GitHub Repository Setup Guide

## Step 1: Download Your Project
1. In Replit, click the three dots menu (⋮) in the top right
2. Select "Download as zip"
3. Extract the zip file to your computer

## Step 2: Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in top right → "New repository"
3. Repository name: `punithsai-portfolio` or `data-science-portfolio`
4. Description: "Modern data science portfolio showcasing my journey from India to Germany"
5. Set to Public (for free Netlify deployment)
6. Check "Add a README file" (we'll replace it)
7. Click "Create repository"

## Step 3: Push Your Code to GitHub

Open terminal in your extracted project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# First commit
git commit -m "Initial portfolio setup with React, TypeScript, and Tailwind"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Step 4: Connect to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Choose "GitHub" and authorize Netlify
4. Select your portfolio repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Base directory**: (leave empty)
6. Click "Deploy site"

## Step 5: Configure Custom Domain

1. In Netlify dashboard, go to "Site settings"
2. Click "Change site name"
3. Enter: `punithsaireddyportfolio`
4. Your live URL: `punithsaireddyportfolio.netlify.app`

## Automatic Deployments

Once connected:
- Every push to GitHub automatically triggers a new deployment
- Your portfolio stays up-to-date with code changes
- Build logs available in Netlify dashboard

## Files Ready for Deployment

✅ **README.md** - Professional project documentation
✅ **.gitignore** - Proper file exclusions
✅ **netlify.toml** - Deployment configuration
✅ **Contact form** - Modified for static deployment
✅ **Build process** - Optimized for production

Your portfolio will be live at: `https://punithsaireddyportfolio.netlify.app`