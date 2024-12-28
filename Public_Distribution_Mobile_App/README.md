# Public Distribution Mobile App

A MERN-based mobile application for real-time information on ration distribution.

## Features
- View stock availability at ration centers.
- Locate nearby centers using map integration.
- Predict stock replenishment using AI.

## Project Structure
- `frontend/`: React Native-based mobile app UI.
- `backend/`: Node.js backend with Express.js.
- `ai_service/`: Python Flask service for AI predictions.

## How to Run
1. Clone the repository.
2. Install MongoDB and start it.
3. Set up the AI service:
   - Navigate to `ai_service/`.
   - Install dependencies: `pip install -r requirements.txt`.
   - Start the service: `python app.py`.
4. Set up the backend:
   - Navigate to `backend/`.
   - Install dependencies: `npm install`.
   - Start the backend: `npm start`.
5. Set up the frontend:
   - Navigate to `frontend/`.
   - Install dependencies: `npm install`.
   - Start the app: `npm start`.

## Future Enhancements
- Add user authentication.
- Integrate live GPS-based location services.
- Enhance AI models for better predictions.
