# PanoFalcon Setup Guide

This guide will walk you through setting up authentication for PanoFalcon using Supabase and Google OAuth.

## Features

- 🔐 **Authentication**: Secure user login with Google OAuth
- 🎯 **Fancy Names**: Memorable URLs like `flying-falcon-42` instead of random IDs
- 📁 **Scalable Storage**: Organized folder structure by user and date
- 📊 **View Tracking**: See how many people viewed your panoramas
- 🚀 **Fast Uploads**: Drag-and-drop interface
- 🔗 **Shareable Links**: Easy sharing with fancy URLs

## Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works great)
- A Google Cloud project for OAuth (free)

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/sign in
2. Click "New Project"
3. Fill in the details:
   - **Name**: PanoFalcon (or your preferred name)
   - **Database Password**: Choose a strong password
   - **Region**: Select the closest region to your users
4. Click "Create new project" and wait for it to initialize (~2 minutes)

## Step 2: Get Supabase Credentials

1. In your Supabase project dashboard, click on the **Settings** icon (gear)
2. Go to **API** section
3. Copy the following values:
   - **Project URL** (looks like `https://xxxxx.supabase.co`)
   - **API Key (anon public)** (a long string starting with `eyJ...`)

## Step 3: Create Database Tables

We need to create a table to store panorama metadata. Supabase already has an `auth.users` table for authentication, so we only need to create the `panoramas` table.

### What this table stores:
- **id**: Unique identifier (backwards compatibility)
- **slug**: Fancy name like `flying-falcon-42` (used in URLs)
- **title**: Panorama title
- **description**: Optional description
- **image_url**: URL to the panorama image
- **user_id**: Links to the user who uploaded it (optional - allows anonymous uploads)
- **created_at**: When it was uploaded
- **views**: View counter

### Create the table:

1. In your Supabase project dashboard, go to **SQL Editor**
2. Click **New Query**
3. Paste the following SQL and click **Run**:

```sql
-- Create panoramas table
CREATE TABLE IF NOT EXISTS panoramas (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  thumbnail_url TEXT,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  views INTEGER DEFAULT 0
);

-- Create index on slug for fast lookups
CREATE INDEX IF NOT EXISTS idx_panoramas_slug ON panoramas(slug);

-- Create index on user_id for filtering user's panoramas
CREATE INDEX IF NOT EXISTS idx_panoramas_user_id ON panoramas(user_id);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_panoramas_created_at ON panoramas(created_at DESC);

-- Enable Row Level Security
ALTER TABLE panoramas ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view panoramas
CREATE POLICY "Panoramas are viewable by everyone"
  ON panoramas FOR SELECT
  USING (true);

-- Policy: Authenticated users can insert their own panoramas
CREATE POLICY "Users can insert their own panoramas"
  ON panoramas FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Allow anonymous uploads (when user_id is NULL)
CREATE POLICY "Anonymous users can insert panoramas"
  ON panoramas FOR INSERT
  WITH CHECK (user_id IS NULL);

-- Policy: Users can update their own panoramas
CREATE POLICY "Users can update their own panoramas"
  ON panoramas FOR UPDATE
  USING (auth.uid() = user_id);

-- Policy: Users can delete their own panoramas
CREATE POLICY "Users can delete their own panoramas"
  ON panoramas FOR DELETE
  USING (auth.uid() = user_id);
```

4. You should see "Success. No rows returned" - that means the table was created!

### What are Row Level Security (RLS) policies?

These security rules control who can read, insert, update, or delete data:

- **✅ Anyone can view** all panoramas (perfect for sharing!)
- **✅ Logged-in users can upload** panoramas linked to their account
- **✅ Anonymous users can upload** panoramas (user_id will be NULL)
- **✅ Users can only edit/delete** their own panoramas

This means your panoramas are publicly viewable and anyone can upload, but only the owner can manage them!

## Step 4: Set Up Google OAuth

### 4.1 Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name it "PanoFalcon OAuth" (or your preferred name)
4. Click "Create"

### 4.2 Configure OAuth Consent Screen

1. In the Google Cloud Console, go to **APIs & Services** → **OAuth consent screen**
2. Select **External** and click "Create"
3. Fill in the required fields:
   - **App name**: PanoFalcon
   - **User support email**: Your email
   - **Developer contact information**: Your email
4. Click "Save and Continue" through the remaining steps
5. On the **Test users** section, add your email address for testing
6. Click "Save and Continue"

### 4.3 Create OAuth Credentials

1. Go to **APIs & Services** → **Credentials**
2. Click "Create Credentials" → "OAuth client ID"
3. Choose **Web application**
4. Fill in:
   - **Name**: PanoFalcon Web Client
   - **Authorized JavaScript origins**: `http://localhost:3000`
   - **Authorized redirect URIs**: 
     ```
     https://YOUR_SUPABASE_PROJECT_REF.supabase.co/auth/v1/callback
     ```
     (Replace with your actual Supabase project URL)
5. Click "Create"
6. Copy the **Client ID** and **Client Secret**

## Step 5: Configure Supabase Google Provider

1. Go back to your Supabase project dashboard
2. Click **Authentication** → **Providers**
3. Find **Google** in the list and click to expand
4. Enable Google provider
5. Paste your Google **Client ID** and **Client Secret**
6. Click "Save"

## Step 6: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and fill in your values:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. For production deployment, also add:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

## Step 7: Install Dependencies

```bash
npm install
```

## Step 8: Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` and you should see PanoFalcon running!

## Testing Authentication

1. Click "Sign In" in the navigation bar
2. Click "Continue with Google"
3. You'll be redirected to Google's sign-in page
4. After signing in, you'll be redirected back to PanoFalcon
5. You should now see your profile in the navigation bar

## Using PanoFalcon

### Upload a Panorama

1. Make sure you're signed in
2. Click "Upload" in the navigation
3. Drag and drop your 360° panorama image (or click to select)
4. Add a title and optional description
5. Click "Upload Panorama"
6. You'll get a fancy URL like `/view/blazing-phoenix-42`

### Share Your Panorama

Just copy the URL and share it with anyone! They don't need to sign in to view it.

### View Your Panoramas

Click "My Panoramas" from the user menu dropdown to see all your uploads.

## Production Deployment (Vercel)

### 1. Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### 2. Add Environment Variables in Vercel

Go to your Vercel project settings and add:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SITE_URL` (your production domain)

### 3. Update Google OAuth Redirect URIs

Add your production domain to Google Cloud Console:
- Authorized JavaScript origins: `https://your-domain.com`
- Authorized redirect URIs: `https://YOUR_SUPABASE_PROJECT_REF.supabase.co/auth/v1/callback`

### 4. Optional: Set Up Vercel Blob Storage

For production file storage (optional - you can also use Supabase Storage):

1. In Vercel dashboard, go to **Storage** → **Connect Store** → **Blob**
2. Follow the setup wizard
3. Copy the `BLOB_READ_WRITE_TOKEN` to your environment variables

**Note**: When `BLOB_READ_WRITE_TOKEN` is set, the app will use:
- Vercel Blob for file storage
- Supabase Postgres for database
- Supabase Auth for authentication

Without `BLOB_READ_WRITE_TOKEN`, the app uses local storage (development mode).

## Troubleshooting

### "Invalid redirect URI" error

Make sure the redirect URI in Google Cloud Console exactly matches:
```
https://YOUR_SUPABASE_PROJECT_REF.supabase.co/auth/v1/callback
```

### "User not authorized" error in Google OAuth

1. Go to Google Cloud Console → OAuth consent screen
2. Add your email to "Test users"
3. Try signing in again

### Authentication not working after deployment

1. Check that `NEXT_PUBLIC_SITE_URL` matches your production domain
2. Update Google OAuth redirect URIs with production URLs
3. Verify Supabase environment variables are set in Vercel

### Images not loading

- **Development**: Make sure local storage is working (check `public/uploads/` folder)
- **Production**: Set up Vercel Blob Storage and add `BLOB_READ_WRITE_TOKEN`

## Project Structure

```
panofalcon/
├── app/
│   ├── auth/              # Authentication pages
│   ├── api/               # API routes
│   ├── upload/            # Upload page
│   ├── view/[id]/         # Panorama viewer (supports slugs)
│   └── gallery/           # Gallery page
├── components/
│   └── UserMenu.tsx       # User authentication menu
├── lib/
│   ├── supabase/          # Supabase client/server utilities
│   ├── fancy-names.ts     # Fancy name generator
│   ├── local-storage.ts   # Local development storage
│   └── db.ts              # Supabase database utilities
└── public/
    └── uploads/           # Local file storage (dev only)
```

## Need Help?

- **Supabase Docs**: https://supabase.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Google OAuth Docs**: https://developers.google.com/identity/protocols/oauth2

Happy panorama sharing! 🦅
