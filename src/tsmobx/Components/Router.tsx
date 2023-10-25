// import React from 'react'
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import Login from './Pages/Login'
// import Dashboard from './Pages/Dashboard'
// // import UserList from './Pages/UserList'
// import UserList from './Pages/UserList'
// import { Layout } from 'antd'
// import { useStore } from '../Hooks/useStore'


// // Private Router

// interface PrivateRouteProps {
//   element: React.ReactNode; 
// }

// const PrivateRoute : React.FC <PrivateRouteProps | any> = ({ element}) => {

//   const { indexStore: { store } } = useStore();

//   console.log('PrivateRoute: isLogin:', store.isLogin);
//   if (store.isLogin) {
//     console.log('PrivateRoute: Rendering element');
//     return <>{element}</>;
//   } else {
//     console.log('PrivateRoute: Redirecting to /');
//     return <Navigate to="/" />;
//   }
// };


// const Router = () => {
//   return (
//     <div>
//       {/* 
//       <Routes>
//         <Route path='/' element={<Login />} />

//       </Routes>

//       <Layout style={{ minHeight: "100vh", gap: "20px" }}>
//         <Dashboard />
//         <Routes>
//           <Route path='/dashboard' element={<UserList />} />
//         </Routes>
//       </Layout> */}

//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />}>  {/* pass props in privateRouter */}
//           <Route path="users" element={<PrivateRoute element={<UserList />} />} />
//         </Route>
//       </Routes>

//     </div>
//   )
// }

// export default Router



// --------------------- Use Private Router -----------------------



// import React from 'react'
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import Login from './Pages/Login'
// import Dashboard from './Pages/Dashboard'
// // import UserList from './Pages/UserList'
// import UserList from './Pages/UserList'
// import { Layout } from 'antd'
// import { useStore } from '../Hooks/useStore'
// import PrivateRoute from './PrivateRoute'
// const Router = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route
//           path="/dashboard"
//           element={<PrivateRoute />}
//         >
//           <Route index element={<Dashboard />} />
//           <Route path="users" element={<UserList />} />
//         </Route>
//       </Routes>
//     </div>
//   )
// }

// export default Router



// -------------------------------

// import React from 'react';
// import { BrowserRouter,Route, Routes, Navigate } from 'react-router-dom';
// import Login from './Pages/Login';
// import Dashboard from './Pages/Dashboard';
// import UserList from './Pages/UserList';
// import { useStore } from '../Hooks/useStore';

// const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
//   const { indexStore: { store } } = useStore();
//   if (store.isLogin) {
//     return <>{children}</>;
//   } else {
//     return <Navigate to="/" />;
//   }
// };

// const Router = () => {
//   return (
//     <div>
//       {/* <BrowserRouter> */}
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={
//           <PrivateRoute>
//             <Routes>
//               <Route index element={<Dashboard />} />
//               <Route path="users" element={<UserList />} />
//             </Routes>
//           </PrivateRoute>
//         } />
//       </Routes>
//       {/* </BrowserRouter> */}
//     </div>
//   );
// };

// export default Router;




// -----------------------------------------

// import React, { useState } from 'react'
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import Login from './Pages/Login'
// import Dashboard from './Pages/Dashboard'
// // import UserList from './Pages/UserList'
// import UserList from './Pages/UserList'
// import { Layout } from 'antd'
// import { useStore } from '../Hooks/useStore'
// import PrivateRoute from './PrivateRoute'
// const Router = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     // <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login />} />
//         </Routes>
//       </BrowserRouter>
//     // </div>
//   )
// }

// export default Router




// ------------------------------------ Done open User -------------


// import React from 'react'
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import Login from './Pages/Login'
// import Dashboard from './Pages/Dashboard'
// // import UserList from './Pages/UserList'
// import UserList from './Pages/UserList'
// import { Layout } from 'antd'
// import { useStore } from '../Hooks/useStore'
// import PrivateRoute from './PrivateRoute'
// const Router = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route
//           path="/dashboard"
//           element={<PrivateRoute />}
//         >
//           <Route path='/dashboard' element={<Dashboard />} />
//           <Route path="users" element={<UserList />} />
//         </Route>
//       </Routes>
//     </div>
//   )
// }

// export default Router


// ------------------------------------

// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Login from './Pages/Login';
// import Dashboard from './Pages/Dashboard';
// import UserList from './Pages/UserList';
// import PrivateRoute from './PrivateRoute';

// const Router = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       {/* <Route path="/dashboard" element={<PrivateRoute />}>
//         <Route index element={<Dashboard />}>
//           <Route path="users" element={<UserList />} />
//         </Route> */}
//         <Route
//           path="/dashboard"
//           element={<PrivateRoute />}
//         >
//           <Route index element={<Dashboard />} />
//           <Route path="user" element={<UserList />} />
//         </Route>
      
//     </Routes>
//   );
// };

// export default Router;



// --------------------------------------------- Done User List Show -------------------


// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Login from './Pages/Login';
// import Dashboard from './Pages/Dashboard';
// import UserList from './Pages/UserList';
// import PrivateRoute from './PrivateRoute';

// const Router = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/dashboard" element={<Dashboard />}>
//         <Route path="user" element={<UserList />} />
//       </Route>
//     </Routes>
//   );
// };

// export default Router;




// ---------------------------------------------



import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import UserList from './Pages/UserList';
import PrivateRoute from './PrivateRoute';
import Attractions from './Pages/Attractions';
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="user" element={<UserList />} />
        <Route path="attractions" element={<Attractions />} />
      </Route>
    </Routes>
  );
};

export default Router;

