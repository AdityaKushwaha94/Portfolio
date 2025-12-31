# Portfolio Website

My personal portfolio website built with React.js and Node.js/Express.js.

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

Happy coding! 🚀
