# Netlify Deployment Guide for Your Portfolio

## Option 1: Direct Upload to Netlify

1. **Download your project files** from Replit:
   - Click the three dots menu in Replit
   - Select "Download as zip"
   - Extract the zip file on your computer

2. **Prepare for Netlify**:
   - Open terminal in the extracted folder
   - Run: `npm install`
   - Run: `npm run build` (this creates the dist folder)

3. **Deploy to Netlify**:
   - Go to netlify.com and sign up/login
   - Click "Deploy manually"
   - Drag and drop the `dist` folder
   - Your site will be live instantly!

4. **Custom Domain**:
   - In Netlify dashboard, go to Site Settings
   - Click "Change site name"
   - Enter "punithsaireddyportfolio"
   - Your URL will be: punithsaireddyportfolio.netlify.app

## Option 2: GitHub + Netlify (Recommended)

1. **Push to GitHub**:
   - Create a new repository on GitHub
   - Clone this Replit to your local machine
   - Push the code to GitHub

2. **Connect to Netlify**:
   - In Netlify, click "New site from Git"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Deploy!

## Files Already Configured:
- ✅ netlify.toml - Deployment configuration
- ✅ Contact form - Modified for static deployment
- ✅ Build process - Ready for production

Your portfolio includes:
- Modern design with your lakeside photo
- Interactive animations and custom cursor
- Direct GitHub repository links
- Working contact form (client-side)
- Resume download functionality