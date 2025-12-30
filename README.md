# Portfolio Website

A modern, responsive portfolio website built with React.js and Node.js/Express.js.

## 🚀 Project Structure

```
Portfolio/
├── frontend/          # React.js frontend application
│   ├── src/
│   │   ├── components/
│   │   └── assets/
│   └── package.json
├── backend/           # Node.js/Express.js backend
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── package.json
└── README.md
```

## 📦 Installation & Local Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Local Setup
1. Clone the repository
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

4. Set up environment variables
```bash
# In the backend folder, create .env file
cd ../backend
echo "MONGODB_URI=your_mongodb_connection_string" > .env
echo "PORT=5000" >> .env
```

5. Start development servers
```bash
# Terminal 1: Start backend
cd backend
npm run dev

# Terminal 2: Start frontend  
cd frontend
npm run dev
```

## 🌐 Hosting Guide

### Option 1: Vercel + Railway (Recommended)

#### Frontend Deployment on Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy Frontend on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up/login
   - Click "New Project"
   - Import your GitHub repository
   - Set the **Root Directory** to `frontend`
   - Set **Framework Preset** to "Vite"
   - Add environment variables:
     - `VITE_API_URL`: Your backend URL (will be added after backend deployment)
   - Click "Deploy"

3. **Deploy Backend on Railway**
   - Go to [railway.app](https://railway.app) and sign up/login
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Set **Root Directory** to `backend`
   - Add environment variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `PORT`: 5000
     - `NODE_ENV`: production
   - Click "Deploy"

4. **Update Frontend with Backend URL**
   - Copy your Railway backend URL
   - Go back to Vercel dashboard
   - Update the `VITE_API_URL` environment variable
   - Redeploy the frontend

#### Environment Variables Setup

**Backend (.env):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
PORT=5000
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-domain.vercel.app
```

**Frontend (.env):**
```env
VITE_API_URL=https://your-backend-domain.railway.app
```

### Option 2: Netlify + Render

#### Frontend on Netlify

1. **Build Settings**
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`

2. **Environment Variables**
   - `VITE_API_URL`: Your backend URL

#### Backend on Render

1. **Service Settings**
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`

2. **Environment Variables**
   - `MONGODB_URI`: Your MongoDB connection string
   - `NODE_ENV`: production

### Option 3: Full-Stack on Railway

1. **Deploy as Monorepo**
   - Create `railway.toml` in root:
   ```toml
   [build]
   builder = "nixpacks"
   
   [deploy]
   startCommand = "npm run start:prod"
   
   [env]
   NODE_ENV = "production"
   ```

2. **Add Production Scripts**
   Add to root `package.json`:
   ```json
   {
     "scripts": {
       "install:all": "cd backend && npm install && cd ../frontend && npm install",
       "build:frontend": "cd frontend && npm run build",
       "start:prod": "cd backend && npm start"
     }
   }
   ```

### Option 4: DigitalOcean App Platform

1. **App Spec Configuration**
   ```yaml
   name: portfolio
   services:
   - name: backend
     source_dir: backend
     github:
       repo: your-username/your-repo
       branch: main
     run_command: npm start
     environment_slug: node-js
     instance_count: 1
     instance_size_slug: basic-xxs
   - name: frontend
     source_dir: frontend
     github:
       repo: your-username/your-repo
       branch: main
     build_command: npm run build
     run_command: npm run preview
     environment_slug: node-js
     instance_count: 1
     instance_size_slug: basic-xxs
   ```

## 🗄️ Database Setup

### MongoDB Atlas (Recommended)

1. **Create Account**
   - Go to [mongodb.com/atlas](https://mongodb.com/atlas)
   - Sign up for free tier

2. **Create Cluster**
   - Choose free tier (M0)
   - Select region closest to your hosting

3. **Setup Database Access**
   - Create database user
   - Whitelist IP addresses (0.0.0.0/0 for all IPs)

4. **Get Connection String**
   - Click "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your password

## 🌐 Domain Configuration

### Custom Domain Setup

1. **Purchase Domain** (optional)
   - Namecheap, GoDaddy, Google Domains, etc.

2. **Configure DNS**
   ```
   Type    Name    Value
   CNAME   www     your-frontend-domain.vercel.app
   A       @       76.76.19.61 (Vercel IP)
   ```

3. **Update Platform Settings**
   - Add domain in Vercel/Netlify dashboard
   - Update CORS_ORIGIN in backend environment

## 🔧 Troubleshooting

### Common Issues

1. **CORS Errors**
   ```javascript
   // In backend/server.js
   app.use(cors({
     origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
     credentials: true
   }));
   ```

2. **Environment Variables Not Loading**
   - Check variable names (no typos)
   - Restart deployment after adding variables
   - Use `console.log(process.env.VARIABLE_NAME)` to debug

3. **Build Failures**
   - Check Node.js version compatibility
   - Clear node_modules and reinstall
   - Check for missing dependencies

4. **Database Connection Issues**
   - Verify MongoDB URI format
   - Check IP whitelist in MongoDB Atlas
   - Ensure database user has correct permissions

### Performance Optimization

1. **Frontend Optimization**
   ```javascript
   // vite.config.js
   export default {
     build: {
       rollupOptions: {
         output: {
           manualChunks: {
             vendor: ['react', 'react-dom']
           }
         }
       }
     }
   }
   ```

2. **Backend Optimization**
   ```javascript
   // Add compression
   const compression = require('compression');
   app.use(compression());
   
   // Add rate limiting
   const rateLimit = require('express-rate-limit');
   app.use(rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100 // limit each IP to 100 requests per windowMs
   }));
   ```

## 📈 Monitoring & Analytics

1. **Add Google Analytics**
   ```html
   <!-- In frontend/index.html -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   ```

2. **Backend Logging**
   ```javascript
   // Use morgan for request logging
   const morgan = require('morgan');
   app.use(morgan('combined'));
   ```

## 🔒 Security Best Practices

1. **Environment Variables**
   - Never commit .env files
   - Use strong, unique values
   - Rotate secrets regularly

2. **HTTPS Enforcement**
   ```javascript
   // In production
   if (process.env.NODE_ENV === 'production') {
     app.use((req, res, next) => {
       if (req.header('x-forwarded-proto') !== 'https') {
         res.redirect(`https://${req.header('host')}${req.url}`);
       } else {
         next();
       }
     });
   }
   ```

3. **Security Headers**
   ```javascript
   const helmet = require('helmet');
   app.use(helmet());
   ```

## 📞 Support

If you encounter any issues:
1. Check the platform-specific documentation
2. Review the troubleshooting section above
3. Verify all environment variables are set correctly
4. Check the browser console and server logs for error messages

## 🎉 Success Checklist

- [ ] Frontend deploys successfully
- [ ] Backend deploys successfully
- [ ] Database connection works
- [ ] Contact form submissions work
- [ ] All pages load correctly
- [ ] Mobile responsive design works
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Analytics tracking setup (if applicable)

---

Happy hosting! 🚀