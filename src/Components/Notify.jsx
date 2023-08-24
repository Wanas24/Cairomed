import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { showNotification } from './notificationUtils'; // Custom notification handling function

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration goes here
};

initializeApp(firebaseConfig);
const db = getFirestore();

function OrdersListener() {
  useEffect(() => {
    const ordersCollectionRef = collection(db, 'Orders');
    const unsubscribe = onSnapshot(ordersCollectionRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const newOrder = change.doc.data();
          showNotification('New Order', `Order ID: ${change.doc.id}`, newOrder);
        }
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <div />;
}

export default OrdersListener;