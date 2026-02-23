# 🚀 PanoFalcon - Quick Deployment Guide

Follow these steps to deploy PanoFalcon to Vercel in under 5 minutes!

## Step 1: Prepare Your Code

Navigate to the panofalcon directory:
```bash
cd panofalcon
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial PanoFalcon setup"
```

## Step 4: Push to GitHub

1. Create a new repository on GitHub (don't initialize with README)
2. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/panofalcon.git
   git branch -M main
   git push -u origin main
   ```

## Step 5: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. **Go to Vercel**: https://vercel.com/new
2. **Import your GitHub repository**
3. **Configure Project**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto)
   - Output Directory: `.next` (auto)
4. **Click "Deploy"** - Don't worry about environment variables yet!

### Option B: Using Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

## Step 6: Add Storage (IMPORTANT!)

After deployment, you need to add storage:

1. **Go to your project dashboard** on Vercel
2. **Click on "Storage" tab**
3. **Create Postgres Database**:
   - Click "Create Database"
   - Select "Postgres"
   - Choose a region close to you
   - Click "Create"
   - ✅ Environment variables are automatically added!

4. **Create Blob Storage**:
   - Click "Create Database" again
   - Select "Blob"
   - Choose the same region
   - Click "Create"
   - ✅ Environment variables are automatically added!

## Step 7: Initialize Database

1. **Open your deployed site**: `https://your-project-name.vercel.app`
2. **Visit the init endpoint**: `https://your-project-name.vercel.app/api/init-db`
3. **You should see**: `{"success":true,"message":"Database initialized successfully"}`

## Step 8: Test Your Site!

1. **Visit your site**: `https://your-project-name.vercel.app`
2. **Click "Upload"**
3. **Upload a 360° panorama image**
4. **Share the link!** 🎉

## 🎨 Optional: Configure Custom Domain

1. Go to your project → Settings → Domains
2. Add your custom domain
3. Follow Vercel's DNS configuration instructions

## 🔧 Optional: Set Additional Environment Variables

If you want to customize the site URL for sharing:

1. Go to Settings → Environment Variables
2. Add:
   ```
   NEXT_PUBLIC_SITE_URL = https://your-custom-domain.com
   ```
3. Redeploy (automatic on next push)

## 📊 Monitoring

- **Analytics**: Enable Vercel Analytics in Settings
- **Error Tracking**: Vercel automatically tracks errors
- **Storage Usage**: Check Storage tab for usage stats

## 🐛 Troubleshooting

### "Database connection failed"
- Make sure you created the Postgres database in Step 6
- Go to Storage tab and verify Postgres is connected
- Redeploy if needed: `vercel --prod`

### "Upload failed"
- Make sure you created the Blob storage in Step 6
- Check Storage tab for Blob storage
- Verify BLOB_READ_WRITE_TOKEN is set in environment variables

### "Build failed"
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Try building locally: `npm run build`

## 🎯 Next Steps

Your PanoFalcon platform is now live! You can:

- ✅ Upload unlimited 360° panoramas
- ✅ Share links with anyone
- ✅ View immersive panoramas
- ✅ Browse the gallery

## 📱 Share Your Platform

Share your PanoFalcon instance:
- Twitter: "Check out my 360° sharing platform! 🦅"
- Social media: Post your first panorama
- Friends: Send them the link!

## 💡 Tips

1. **Use equirectangular images** for best compatibility
2. **Optimal resolution**: 4096x2048 or 8192x4096
3. **File size**: Keep under 10MB for faster loading
4. **Compression**: Use JPEG format with 85-95% quality

---

Need help? Check the full README.md or create an issue!

Happy sharing! 🦅✨
