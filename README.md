# GDG Auth Portal



A simple **React authentication portal** with **Login**, **Register**, and **Forgot Password** pages, built using **pure React (`.js`)** and **CSS** .  

This project is perfect for learning React component structure, state management, and basic form validation.

---

## 📂 Directory Structure

gdg-auth/
├─ public/
│ └─ index.html
├─ src/
│ ├─ App.js
│ ├─ App.css
│ ├─ components/
│ │ ├─ Login.js
│ │ ├─ Register.js
│ │ ├─ ForgotPassword.js
│ └─ index.js
├─ package.json

yaml
Copy code

---

## 🚀 Features

- **Login page** with validation for empty fields and valid email.
- **Register page** with validation for:
  - Empty fields
  - Email format
  - Password length (minimum 6 characters)
  - Password confirmation
- **Forgot Password page** with mock email reset flow.
- **Single-page navigation** between Login, Register, and Forgot Password using React state.
- Styled with **plain CSS** and GDG-inspired colors.

---

## 🎨 Styling

- Gradient background inspired by GDG colors.
- Modern card layout for forms.
- Interactive buttons and hover effects.
- Error and info messages styled for clarity.

---

## ⚡ Getting Started

1. **Clone the repository:**


git clone https://github.com/yourusername/gdg-auth.git
cd gdg-auth
Install dependencies:

npm install
Run the project:


npm start
Open http://localhost:3000 to view in the browser.

🛠️ Technologies Used
React.js (Functional components + hooks)

CSS 

JavaScript (ES6+)

📌 Future Improvements
Add password strength meter on registration.

Integrate real authentication with backend (Firebase, Node.js, etc.).

Add form animations and responsive design.

Implement Remember Me and Show/Hide password functionality.


Add unit testing with Jest and React Testing Library.

