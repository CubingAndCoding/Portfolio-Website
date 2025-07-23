# Network Access Setup

This guide explains how to access your portfolio website from other devices on the same network (like your phone).

## Quick Start

1. **Start the development servers:**
   ```bash
   python start_dev.py
   ```

2. **The script will automatically:**
   - Detect your computer's IP address
   - Create/update `frontend/.env` with the correct backend URL
   - Start both backend and frontend servers

3. **Access from other devices:**
   - **Frontend (Website):** `http://YOUR_IP:3000`
   - **Backend API:** `http://YOUR_IP:5000`

## Backend URL Configuration

The frontend connects to the backend using the `VITE_BACKEND_URL` environment variable:

- **Automatic setup:** The `start_dev.py` script creates `frontend/.env` with your IP
- **Manual setup:** Create `frontend/.env` with:
  ```
  VITE_BACKEND_URL=http://YOUR_IP:5000
  ```
- **Local development:** Use `http://localhost:5000` for same-device access

## Manual Setup

### Backend (Flask)
```bash
cd backend
python app.py
```
The backend is already configured to bind to `0.0.0.0:5000`

### Frontend (Ionic)
```bash
cd frontend
ionic serve --host 0.0.0.0 --port 3000
```
The frontend is now configured to bind to `0.0.0.0:3000`

**Alternative (if Ionic CLI not installed):**
```bash
cd frontend
npm run dev
```

## Troubleshooting

### Can't access from phone?
1. **Check firewall settings:**
   - Windows: Allow Python and Node.js through Windows Firewall
   - Mac: Allow incoming connections in System Preferences > Security & Privacy

2. **Verify network connection:**
   - Ensure both devices are on the same WiFi network
   - Try accessing from another device on the same network

3. **Check if ports are open:**
   ```bash
   # Windows
   netstat -an | findstr :3000
   netstat -an | findstr :5000
   
   # Mac/Linux
   netstat -an | grep :3000
   netstat -an | grep :5000
   ```

### Common Issues
- **"Connection refused":** Check if servers are running
- **"Page not found":** Verify the correct IP and port
- **"CORS errors":** Backend already has CORS enabled
- **"Failed to load projects":** Check if `VITE_BACKEND_URL` in `frontend/.env` matches your IP
- **"Network Error":** Verify both devices are on the same network

## Prerequisites

### Ionic CLI (Recommended)
If you haven't installed Ionic CLI globally:
```bash
npm install -g @ionic/cli
```

### Alternative: Use npm directly
If you prefer not to install Ionic CLI, you can use:
```bash
cd frontend
npm run dev
```

## Security Note
This setup is for development only. For production, use proper hosting services and security measures. 