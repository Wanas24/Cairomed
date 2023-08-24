import React, { useEffect, useState } from 'react';
import { auth } from '../Config/Firebase';
import { Navigate } from 'react-router-dom';

function ProtectedRoutes(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoading(false);
      if (user && user.email === 'admin@admin.com') {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    // Optional: You can show a loading indicator while checking the authentication state
    return <div>Loading...</div>;
  }

  if (isLoggedIn) {
    return props.children;
  } else {
    return <Navigate to="/Login" />;
  }
}

export default ProtectedRoutes;