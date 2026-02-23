# 🦅 PanoFalcon

Share your world in 360° - Upload, share, and view stunning 360-degree panoramic images with memorable links!

![PanoFalcon](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)

## ✨ Features

- 🚀 **Easy Upload** - Drag and drop 360° images
- 🎯 **Fancy Names** - Get memorable URLs like `flying-falcon-42` instead of random IDs
- 🔐 **Authentication** - Secure login with Google OAuth via Supabase
- 📁 **Smart Organization** - Scalable folder structure organized by user and date
- 📊 **View Tracking** - See how many people viewed your panoramas
- 🔗 **Instant Sharing** - Share panoramas with anyone, no login required to view
- 🌐 **Interactive Viewer** - Immersive 360° viewing experience with Pannellum
- 📱 **Responsive Design** - Works perfectly on all devices
- ☁️ **Dual Storage** - Local development mode or Vercel Blob for production
- 🎨 **Beautiful UI** - Modern, clean interface with custom Falcon theme

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth with Google OAuth
- **Storage**: 
  - Development: Local filesystem
  - Production: Vercel Blob
- **Database**: 
  - Development: JSON file
  - Production: Supabase Postgres
- **Viewer**: Pannellum
- **Deployment**: Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- A Vercel account
- Git installed

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd panofalcon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in the environment variables (see Configuration section below)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Vercel Blob Storage

1. Go to your Vercel dashboard
2. Select your project
3. Go to Storage → Create Database → Blob
4. Copy the `BLOB_READ_WRITE_TOKEN` to your `.env.local`

### Vercel Postgres

1. In your Vercel dashboard
2. Go to Storage → Create Database → Postgres
3. Copy all the Postgres environment variables to your `.env.local`

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Vercel Blob Storage
BLOB_READ_WRITE_TOKEN=your_blob_token_here

# Vercel Postgres
POSTGRES_URL=your_postgres_url_here
POSTGRES_PRISMA_URL=your_postgres_prisma_url_here
POSTGRES_URL_NON_POOLING=your_postgres_url_non_pooling_here
POSTGRES_USER=your_postgres_user_here
POSTGRES_HOST=your_postgres_host_here
POSTGRES_PASSWORD=your_postgres_password_here
POSTGRES_DATABASE=your_postgres_database_here

# Site URL (for sharing links)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📦 Deployment to Vercel

### Option 1: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Set up environment variables in Vercel dashboard**

5. **Add Storage**
   - Go to your project in Vercel dashboard
   - Navigate to Storage tab
   - Create a Postgres database
   - Create a Blob storage
   - Environment variables will be automatically added

### Option 2: Deploy with Git

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Add Storage**
   - In your Vercel project dashboard
   - Go to Storage → Create Database
   - Create both Postgres and Blob storage

4. **Deploy**
   - Vercel will automatically deploy
   - Environment variables from storage are auto-configured

## 🗄️ Database Setup

The database table will be created automatically on first use. However, you can manually create it:

1. Go to Vercel dashboard → Storage → Postgres
2. Open the Query tab
3. Run this SQL:

```sql
CREATE TABLE IF NOT EXISTS panoramas (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  thumbnail_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  views INTEGER DEFAULT 0
);
```

## 📁 Project Structure

```
panofalcon/
├── app/
│   ├── api/
│   │   ├── upload/route.ts       # Upload API endpoint
│   │   └── panoramas/route.ts    # Panoramas API endpoint
│   ├── view/[id]/page.tsx        # Panorama viewer page
│   ├── upload/page.tsx           # Upload page
│   ├── gallery/page.tsx          # Gallery page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles
├── components/
│   └── PanoramaViewer.tsx        # 360° viewer component
├── lib/
│   └── db.ts                     # Database utilities
├── public/                       # Static assets
├── next.config.mjs               # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## 🎯 Usage

### Uploading a Panorama

1. Click "Upload" button
2. Drag and drop or select your 360° image
3. Add title and description
4. Click "Upload & Share"
5. Get your shareable link!

### Viewing a Panorama

1. Visit a panorama link: `/view/{panorama-id}`
2. Click and drag to look around
3. Scroll to zoom in/out
4. Click fullscreen for immersive experience

### Sharing

- Click the "Share" button to copy the link
- Share the link on social media
- Embed in websites (coming soon)

## 🔧 Customization

### Changing Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      falcon: {
        // Customize your brand colors here
        600: '#0284c7',
        700: '#0369a1',
      },
    },
  },
}
```

### Adjusting Viewer Settings

Edit `components/PanoramaViewer.tsx`:

```typescript
{
  autoRotate: -2,      // Auto-rotation speed
  hfov: 100,           // Initial field of view
  minHfov: 50,         // Min zoom
  maxHfov: 120,        // Max zoom
}
```

## 🐛 Troubleshooting

### Database Connection Issues

- Ensure all Postgres environment variables are set
- Check Vercel dashboard for connection strings
- Verify database is created in Vercel Storage

### Upload Failures

- Check BLOB_READ_WRITE_TOKEN is set correctly
- Verify file size is under 50MB
- Ensure file is a valid image format

### Panorama Not Loading

- Check image URL is accessible
- Verify image is in equirectangular format
- Check browser console for errors

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Credits

- Built with [Next.js](https://nextjs.org/)
- Panorama viewer by [Pannellum](https://pannellum.org/)
- Hosted on [Vercel](https://vercel.com/)

---

Made with ❤️ by PanoFalcon Team
