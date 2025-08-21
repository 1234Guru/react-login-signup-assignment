// Validation rules tailored to PDF requirements
// Name: Only alphabets allowed (allow spaces/hyphens for real names)
export const validateName = (v) => {
  if (!v) return 'Name is required';
  if (!/^[A-Za-z][A-Za-z -]*$/.test(v)) return 'Only alphabets allowed';
  return '';
};

// Username: must contain letters + numbers + special chars; allowed set below; no spaces
export const validateUsername = (v) => {
  if (!v) return 'Username is required';
  if (/\s/.test(v)) return 'No spaces allowed';
  if (!/^[A-Za-z0-9._@#$%!?-]+$/.test(v)) return 'Only letters, numbers, and . _ @ # $ % ! ? -';
  if (!/[A-Za-z]/.test(v) || !/[0-9]/.test(v) || !/[._@#$%!?-]/.test(v)) {
    return 'Use letters, numbers, and at least one special character';
  }
  if (v.length < 6) return 'Must be at least 6 characters';
  return '';
};

// Password: same character policy as username; cannot equal username
export const validatePassword = (v, username='') => {
  if (!v) return 'Password is required';
  if (/\s/.test(v)) return 'No spaces allowed';
  if (!/^[A-Za-z0-9._@#$%!?-]+$/.test(v)) return 'Only letters, numbers, and . _ @ # $ % ! ? -';
  if (!/[A-Za-z]/.test(v) || !/[0-9]/.test(v) || !/[._@#$%!?-]/.test(v)) {
    return 'Use letters, numbers, and at least one special character';
  }
  if (v.length < 8) return 'Must be at least 8 characters';
  if (username && v === username) return 'Password must differ from username';
  return '';
};

// Confirm password: must match password
export const validateConfirm = (confirm, password) => {
  if (!confirm) return 'Please confirm password';
  if (confirm !== password) return 'Passwords do not match';
  return '';
};

// Email: must be a valid Gmail address
export const validateEmail = (v) => {
  if (!v) return 'Email is required';
  const emailOk = /^[A-Za-z0-9._%+-]+@gmail\.com$/.test(v);
  if (!emailOk) return 'Use a valid @gmail.com email';
  return '';
};

// Phone: country code + number only (e.g., +91 9876543210)
export const validatePhone = (v) => {
  if (!v) return 'Phone is required';
  const ok = /^\+\d{1,3}[ -]?\d{7,14}$/.test(v);
  if (!ok) return 'Format: +<country code> <number>';
  return '';
};

export const allValid = (errors) => Object.values(errors).every((e) => !e);
