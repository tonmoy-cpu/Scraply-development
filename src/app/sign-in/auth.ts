"use client";

const isLocalStorageAvailable = typeof window !== 'undefined';

interface User {
  id: string;
  email: string;
  phoneNumber: string;
  fullname: string;
  username?: string;
}

// Store token in localStorage
export const setToken = (token: string): void => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('token', token);
    console.log('Token set:', token);
  }
};

// Retrieve token from localStorage
export const getToken = (): string | null => {
  if (isLocalStorageAvailable) {
    const token = localStorage.getItem('token');
    console.log('Token retrieved:', token);
    return token;
  }
  return null;
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  const token = getToken();
  const isAuth = !!token;
  console.log('isAuthenticated:', isAuth);

  // Optional: Basic JWT validation (uncomment if using JWT)
  /*
  if (token) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const isExpired = payload.exp && Date.now() >= payload.exp * 1000;
      return !isExpired;
    } catch (error) {
      console.error('Invalid token format:', error);
      return false;
    }
  }
  */

  return isAuth;
};

// Store user data in localStorage
export const setUser = (user: User): void => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('user', JSON.stringify(user));
    console.log('User set:', user);
  }
};

// Retrieve user data from localStorage
export const getUser = (): User | null => {
  if (isLocalStorageAvailable) {
    const user = localStorage.getItem('user');
    const parsedUser = user ? JSON.parse(user) : null;
    console.log('User retrieved:', parsedUser);
    return parsedUser;
  }
  return null;
};

// Store user ID
export const setUserID = (id: string): void => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('id', id);
    console.log('User ID set:', id);
  }
};

// Retrieve user ID
export const getUserID = (): string | null => {
  if (isLocalStorageAvailable) {
    const userId = localStorage.getItem('id');
    console.log('User ID retrieved:', userId);
    return userId;
  }
  return null;
};

// Store username
export const setUserName = (username: string): void => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('username', username);
    console.log('Username set:', username);
  }
};

// Retrieve username
export const getUserName = (): string | null => {
  if (isLocalStorageAvailable) {
    const username = localStorage.getItem('username');
    console.log('Username retrieved:', username);
    return username;
  }
  return null;
};

// Store fullname
export const setfullname = (fullname: string): void => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('fullname', fullname);
    console.log('Fullname set:', fullname);
  }
};

// Retrieve fullname
export const getfullname = (): string | null => {
  if (isLocalStorageAvailable) {
    const fullname = localStorage.getItem('fullname');
    console.log('Fullname retrieved:', fullname);
    return fullname;
  }
  return null;
};

// Store email
export const setEmail = (email: string): void => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('email', email);
    console.log('Email set:', email);
  }
};

// Retrieve email
export const getEmail = (): string | null => {
  if (isLocalStorageAvailable) {
    const email = localStorage.getItem('email');
    console.log('Email retrieved:', email);
    return email;
  }
  return null;
};

// Store phone number
export const setPhoneNumber = (phoneNumber: string): void => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('phoneNumber', phoneNumber);
    console.log('Phone number set:', phoneNumber);
  }
};

// Retrieve phone number
export const getPhoneNumber = (): string | null => {
  if (isLocalStorageAvailable) {
    const phoneNumber = localStorage.getItem('phoneNumber');
    console.log('Phone number retrieved:', phoneNumber);
    return phoneNumber;
  }
  return null;
};

// Check if all required user data is present
export const isUserDataComplete = (): boolean => {
  const email = getEmail();
  const userId = getUserID();
  const phoneNumber = getPhoneNumber();
  const fullname = getfullname();
  const isComplete = !!email && !!userId && !!phoneNumber && !!fullname;
  console.log('User data complete:', isComplete, { email, userId, phoneNumber, fullname });
  return isComplete;
};

// Clear localStorage and redirect to sign-in
export const handleLogout = (): void => {
  if (isLocalStorageAvailable) {
    console.log('Logging out: Clearing localStorage');
    localStorage.clear();
    window.location.href = "/sign-in";
  }
};