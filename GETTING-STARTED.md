# 🦅 PanoFalcon - Getting Started

Welcome to PanoFalcon! This guide will help you get the platform running locally.

## Prerequisites Checklist

- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm or yarn installed (`npm --version`)
- [ ] Git installed (`git --version`)
- [ ] A Vercel account (sign up at https://vercel.com)

## Quick Local Setup (No Database Required)

For testing the UI without database/storage:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:3000

The app will run, but uploads won't work without database/storage setup.

## Full Setup with Database (Recommended)

### Step 1: Install Dependencies

```bash
cd panofalcon
npm install
```

### Step 2: Set Up Vercel Project (for storage)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Link to a new project (or existing)
vercel link
```

### Step 3: Add Vercel Storage Locally

```bash
# Pull environment variables from Vercel
vercel env pull .env.local
```

This will create `.env.local` with all necessary environment variables.

### Step 4: Create Storage on Vercel

1. Go to https://vercel.com/dashboard
2. Select your project
3. Click "Storage" tab
4. Create:
   - **Postgres Database** (for metadata)
   - **Blob Storage** (for images)

### Step 5: Pull Environment Variables Again

```bash
vercel env pull .env.local
```

This updates your `.env.local` with the storage credentials.

### Step 6: Start Development Server

```bash
npm run dev
```

### Step 7: Test Upload

1. Go to http://localhost:3000
2. Click "Upload"
3. Upload a 360° image
4. You should get a shareable link!

## Alternative: Manual Environment Setup

If you prefer not to use Vercel CLI:

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in the values manually:
   - Get Blob token from Vercel → Storage → Blob
   - Get Postgres credentials from Vercel → Storage → Postgres

3. Save `.env.local` and run:
   ```bash
   npm run dev
   ```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Testing the Platform

### Upload a Test Panorama

Don't have a 360° image? Download a sample:
- https://pannellum.org/images/alma.jpg
- https://pannellum.org/images/blouberg-sunrise.jpg

### Test Features

- [ ] Upload a panorama
- [ ] View the panorama (360° viewer should work)
- [ ] Share the link
- [ ] View gallery
- [ ] Check responsive design (mobile/desktop)

## Troubleshooting

### Port Already in Use

```bash
# Use a different port
PORT=3001 npm run dev
```

### Environment Variables Not Loading

```bash
# Make sure .env.local exists
ls -la .env.local

# Restart the dev server
# Press Ctrl+C and run npm run dev again
```

### Database Connection Failed

- Make sure you created Postgres in Vercel Storage
- Run `vercel env pull .env.local` again
- Check `.env.local` has POSTGRES_URL

### Upload Fails Locally

- Make sure you created Blob storage in Vercel Storage
- Check `.env.local` has BLOB_READ_WRITE_TOKEN
- Verify the token is correct

## Next Steps

Once everything works locally:

1. Push to GitHub
2. Deploy to Vercel (see DEPLOYMENT.md)
3. Share your platform!

## Need Help?

- Check README.md for detailed documentation
- Check DEPLOYMENT.md for deployment guide
- Create an issue on GitHub

Happy developing! 🦅✨
