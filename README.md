# React Login & Sign‑Up (Assignment)

A simple, responsive Login/Sign‑Up app built with React per the assignment specs.

## Features
- Two screens: **Login** and **Sign‑Up** with routing
- **Redirect** from Sign‑Up to Login after successful registration
- **Reusable components** (`FormInput`, `Button`)
- **Client‑side validation** with assignment‑specific rules
- **Inline error messages** under each field
- **Responsive UI**
- Demo **localStorage** persistence for created account
- Basic **unit tests** for validation helpers (Jest + RTL)

## Validation Rules
- **Name**: alphabets only (spaces/hyphens allowed)
- **Username**: letters + numbers + at least 1 special from `. _ @ # $ % ! ? -`, no spaces, min 6
- **Password**: same policy as username, min 8, **must differ** from username
- **Confirm**: must match password
- **Email**: must be a valid **@gmail.com**
- **Phone**: `+<country-code> <number>` (e.g., `+91 9876543210`)

> Note: Passwords are stored in `localStorage` only for demo purposes. Do **not** do this in real apps.

## Getting Started (CRA style)
```bash
# from project root
npm install
npm start
# open http://localhost:3000
```

### Run tests
```bash
npm test
```

## Screens
- **Login** → link to Sign‑Up
- **Sign‑Up** → redirects to Login on success

## Tech
- React 18, react-router v6, CRA build scripts
- CSS (no framework) for a small, clean UI

## Folder Structure
```
react-login-signup-assignment/
  public/
    index.html
  src/
    components/
      Button.jsx
      FormInput.jsx
    pages/
      Login.jsx
      SignUp.jsx
    validation/
      rules.js
    __tests__/
      rules.test.js
    App.js
    index.js
    styles.css
  package.json
  README.md
```
