# Freelance Marketplace – Frontend (React + Vite) README

This README explains how to set up, run, and deploy the **Frontend** of the Freelance Marketplace project.

---

## 🚀 Tech Stack

- **React (v18)**
- **Vite**
- **TailwindCSS**
- **React Router DOM**
- **TanStack React Query**
- **Axios**
- **Stripe (React-Stripe-JS)**

---

## 📁 Project Structure

```
frontend/
│  package.json
│  vite.config.js
│  tailwind.config.js
│  index.html
│
├─ src/
│  ├─ api/
│  ├─ components/
│  ├─ pages/
│  ├─ utils/
│  ├─ hooks/
│  ├─ styles/
│  ├─ App.jsx
│  └─ main.jsx
```

---

## 🛠️ Installation

### 1. Clone Repository

```
git clone https://github.com/your-username/your-repo.git
cd frontend
```

### 2. Install Dependencies

```
npm install
```

---

## ⚙️ Environment Variables (.env)

Create a **.env** file inside `frontend/`:

```
VITE_API_URL=http://localhost:3000/api
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

---

## ▶️ Running the Development Server

```
npm run dev
```

App will run at:

```
http://localhost:5173
```

---

## 🧩 Folder Details

### **src/api/**

API request helpers (Axios instance).

### **src/pages/**

All frontend pages like Login, Register, Home, Gig, Message, Orders, Payment.

### **src/components/**

Reusable UI components such as Navbar, Footer, Slider, Reviews, Cards.

### **src/utils/**

Utility functions (Axios instance, helpers).

### **src/styles/**

Global Tailwind or CSS files.

---

## 🎨 Tailwind Setup

The project already includes Tailwind. If needed, reset Tailwind:

```
npx tailwindcss init -p
```

Add this to **tailwind.config.js**:

```
content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
```

---

## 📡 API Integration

Axios base URL setup (**src/utils/newRequest.js**):

```js
import axios from "axios";

const newRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export default newRequest;
```

Make sure backend CORS includes:

```
origin: "http://localhost:5173"
```

---

## 💳 Stripe Payment Setup

Install Stripe dependencies:

```
npm install @stripe/react-stripe-js @stripe/stripe-js
```

Use StripeProvider in your app:

```jsx
<Elements stripe={loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)}>
  <PaymentPage />
</Elements>
```

---

## 🧪 Testing

You can use browser DevTools + mock data files.
Future enhancement: Jest + React Testing Library.

---

## 🚀 Deployment (Netlify)

### 1. Build project

```
npm run build
```

### 2. Deploy on Netlify

Upload the `dist/` folder or connect GitHub to Netlify.

### Netlify settings:

- Build Command: `npm run build`
- Publish Directory: `dist`
- Environment Variables:

  - `VITE_API_URL=https://your-backend-url/api`
  - `VITE_STRIPE_PUBLIC_KEY=your_key`

---

## 🧩 Common Netlify Errors

### **❌ Error: Install dependencies failed**

Fix:

- Remove unused/unmaintained packages like `infinite-react-carousel`.
- Use alternative sliders (Swiper, Keen-slider).

---

## 🤝 Contributing

Fork → Create branch → Commit → Pull request.

---

## 📞 Support

If you want:
✔ Sample Pages Code
✔ Tailwind Components
✔ API integration examples
✔ Full frontend boilerplate
Just ask! 🎉
