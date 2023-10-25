// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// // import { useStore } from './useStore';
// import { useStore } from '../Hooks/useStore';
// const PrivateRoute = () => {
// //   const { store } = useStore();
//   const { indexStore: { store } } = useStore();
//   if (store.isLogin) {
//     return <Outlet />;
//   } else {
//     return <Navigate to="/" />;
//   }
// };

// export default PrivateRoute;




// --------------------------------

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // Replace with your authentication logic
  const isAuthenticated = /* Your authentication logic here */ true;

  if (isAuthenticated) {
    return <Outlet />; // Render child routes if authenticated
  } else {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;
