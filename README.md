# ☁ CheerCloud - Mental Health AI Chat Assistant 🥰🌟

A compassionate AI-driven platform designed to provide mental health support through thoughtful conversation and prompt engineering tailored to your well-being. 💙

> ✨ Watch our presentation:
> [CheerCloud - YouTube](https://youtu.be/y0ESCc-DM40)

---

## 🏆 Project Highlights

**Personalized Mental Health Support, Anytime, Anywhere!**  
With **CheerCloud**, we’ve harnessed the power of AI to create an empathetic chatbot that understands and adapts to user needs through advanced prompt engineering. Built using cutting-edge technologies like React 19 and Clerk authentication, our platform ensures a seamless, secure, and intuitive experience.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router DOM, Framer Motion (for animations)
- **Authentication**: Clerk.js
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **AI Integration**: Google Gemini API

---

## 🌟 Our Story: A Mission Born from Experience  

We are a group of developers who know firsthand what it’s like to navigate the challenges of ADHD, anxiety, and other mental health struggles. This project began as a way to help ourselves stay grounded, focused, and supported, but it quickly grew into something bigger—a platform to support anyone on their mental health journey.  

Building **CheerCloud** has been both a challenge and a form of healing. Each of us contributed our unique strengths, turning personal struggles into motivation. With cutting-edge AI and thoughtful design, we’ve created a safe space where users can feel heard, understood, and supported.  

We hope this platform becomes a source of comfort and empowerment for anyone who needs it. **CheerCloud** isn’t just a tool—it’s a reminder that you’re not alone, and together, we can navigate life’s challenges. 💙  

--- 

## ✨ Key Features

- **User Authentication & Privacy**  
  Powered by **Clerk** for secure sign-ups, logins, and session validation.

- **Protected Routes**  
  Access to sensitive areas is safeguarded for an extra layer of user security.

- **Responsive Animated Interface**  
  Engaging homepages with typing effects and fluid animations.

- **AI-Powered Chat**  
  Combines the **Gemini API** and **real-time AI streaming** to deliver insightful and timely responses.

- **Custom Prompt Engineering**  
  Fine-tuned for mental health scenarios to ensure empathetic and helpful AI interactions.

- **Database Integration**  
  Stores and fetches user conversations via a MongoDB backend for continuity and analysis.

- **Image Upload Optimization**  
  Securely handles user-submitted images, ensuring performance and privacy.

---

## 🎥 Demo Walkthrough

[Demo Video - Youtube](https://youtu.be/A1E82KgPGGg?si=VFIuV-vXTI1uJceK)

- **Onboarding and Authentication**  
  Navigate through user-friendly sign-up and login pages with Clerk integration.

- **Engaging Animated Homepage**  
  Experience smooth animations and welcoming effects as you start your journey.

- **Real-Time AI Chat**  
  Get instant responses during conversations, backed by optimized prompt engineering.

- **Saving Your Conversations**  
  Chats are securely saved to a database, allowing users to revisit past interactions.

- **Image Recognition**  
  Upload images for insights and guidance through AI-powered image analysis.

---

## 📘 Project Development Insights

### **Core Modules:**
1. **Authentication and User Management**  
   Utilizing Clerk.js, this module ensures privacy and security for every user.

2. **AI Chat Framework**  
   Combining prompt engineering and the Gemini API for a mental health-focused AI experience.

3. **Frontend Animation & Design**  
   Features a sleek, interactive UI designed with Framer Motion for an immersive user journey.

4. **Database Management**  
   Employs MongoDB to store and manage chat histories efficiently.

---

## 🚀 How to Set Up

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/cheercloud.git
   ```

2. **Install Dependencies**  
   ```bash
   cd cheercloud
   npm install
   ```

3. **Set Up Environment Variables**

- Client (`client/.env`)
  ```env
  VITE_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key   # Obtain from Clerk Dashboard
  VITE_IMAGE_KIT_ENDPOINT=your-imagekit-endpoint         # Obtain from ImageKit Dashboard
  VITE_IMAGE_KIT_PUBLIC_KEY=your-imagekit-public-key     # Obtain from ImageKit Dashboard
  VITE_GEMINI_PUBLIC_KEY=your-google-gemini-key          # Obtain from Google Gemini API
  VITE_API_URL=http://localhost:3000                     # Backend API URL
  ```
- Backend (`backend/.env`)
  ```env
  IMAGE_KIT_ENDPOINT=your-imagekit-endpoint             # Obtain from ImageKit Dashboard
  IMAGE_KIT_PUBLIC_KEY=your-imagekit-public-key         # Obtain from ImageKit Dashboard
  IMAGE_KIT_PRIVATE_KEY=your-imagekit-private-key       # Obtain from ImageKit Dashboard
  CLIENT_URL=http://localhost:5173                      # Frontend URL
  MONGO=your-mongo-db-uri                               # MongoDB connection URI
  CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key      # Obtain from Clerk Dashboard
  ```

5. **Start the Development Server**  
   ```bash
     cd client
     npm run dev
   ```
   ```bash
     cd backend
     npm start
   ```

---

## ✨ Contributors

This project was developed by a passionate team of mental health advocates and developers. 🌟

- 👩‍💻 **Jianing Yin**: [@CatherineYin1213](https://github.com/CatherineYin1213)
- 👩‍💻 **Rongman Xu**: [@忆蒹葭](https://github.com/Gevenal)
- 👩‍💻 **Yadi Wang**: [@Aqua0812](https://github.com/Aqua0812)
- 👩‍💻 **Yichun Wang**: [@Jodie-Wang55555](https://github.com/Jodie-Wang55555)

---

Thank you for choosing **CheerCloud** to support your mental well-being. 🌟 Let’s work together for a healthier mind and a brighter future! ☁
