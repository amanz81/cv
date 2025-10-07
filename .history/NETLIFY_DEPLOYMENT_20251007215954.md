# Netlify Deployment Guide

## 🚀 Deploy Your CV Website to Netlify

### Step 1: Prepare for Deployment
1. Make sure all your changes are committed to git
2. Push to your GitHub repository

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click "Deploy site"

### Step 3: Configure Netlify Forms
1. Go to your site dashboard on Netlify
2. Go to "Forms" in the left sidebar
3. You'll see form submissions from `/contact.html`
4. Set up email notifications:
   - Go to "Settings" → "Forms"
   - Enable "Form notifications"
   - Add your email: `assaf.manzur@gmail.com`

### Step 4: Custom Domain (Optional)
1. Go to "Domain settings"
2. Add your custom domain
3. Configure DNS settings

## 📧 Email Handling Options

### Option 1: Netlify Forms (Recommended)
- ✅ **Free** - 100 submissions/month
- ✅ **No setup required** - works out of the box
- ✅ **Spam protection** built-in
- ✅ **Email notifications** to your inbox
- ✅ **Form submissions** stored in Netlify dashboard

### Option 2: Resend (For Higher Volume)
- 💰 **Paid** - $20/month for 50k emails
- ⚙️ **Setup required** - API key configuration
- ✅ **More control** over email templates
- ✅ **Better deliverability**

## 🎯 What You Get

### Contact Form Features:
- **Professional design** matching your CV
- **Spam protection** with honeypot
- **Email notifications** to your inbox
- **Success page** after submission
- **Mobile responsive** design

### Netlify Benefits:
- **Free hosting** with SSL
- **Automatic deployments** from GitHub
- **Form handling** built-in
- **CDN** for fast loading
- **Custom domains** supported

## 🔧 Files Created for Netlify:
- `/public/contact.html` - Standalone contact form
- `/public/success.html` - Success page after form submission
- Updated contact section to link to the form

## 📱 Testing Your Deployment:
1. Visit your Netlify URL
2. Click "Get in Touch" section
3. Click "Open Contact Form"
4. Fill out and submit the form
5. Check your email for notifications
6. Check Netlify dashboard for form submissions

Your CV website is now ready for professional use! 🎉
