// import React from 'react'
// import {  Layout, Menu, theme } from 'antd';
// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';

// import { Link, NavLink } from 'react-router-dom';
// import '../../../style.css'
// const { Header, Content, Footer, Sider } = Layout;
// const Dashboard = () => {
//   return (
//     <div>
//       <Layout style={{ minHeight: '100vh' }}>
//             <Sider theme='dark' style={{ width: "10%" }}>
//                 <Menu theme="dark"  >
//                     <Menu.Item key="users">
//                         <NavLink to="/dashboard/users"
//                             style={{ textDecoration: "none" }}
//                             className='userStyle'
//                         > <UserOutlined style={{ fontSize: "22px" }} className='me-2' />Users</NavLink>
//                     </Menu.Item>
//                 </Menu>
//             </Sider>

//         </Layout>
//     </div>
//   )
// }

// export default Dashboard




// ------------------------------------------  Done Open User List --------------

// // Dashboard.js
// import React from 'react';
// import { Layout, Menu } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// import { Link ,Outlet} from 'react-router-dom';
// import { observer } from 'mobx-react-lite'
// const { Sider } = Layout;

// const Dashboard = observer(() => {
//   return (
//     <>
//       <div>
//         {
//           (
//             <Layout style={{ minHeight: '100vh' }}>
//               <Sider theme="dark" style={{ width: '10%' }}>
//                 <Menu theme="dark">
//                   <Menu.Item key="/dashboard">
//                     <Link to="/dashboard/users" style={{ textDecoration: 'none' }}>
//                       <UserOutlined style={{ fontSize: '22px' }} className="me-2" />Users
//                     </Link>
//                   </Menu.Item>
//                 </Menu>
//               </Sider>
//               <Layout></Layout>
//             </Layout>
//           )
//         }
//         <Outlet/>
//       </div></>
//   );
// })

// export default Dashboard;


// ------------------------------


// import React from 'react';
// import { Layout, Menu } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// import { Link, Outlet , useLocation } from 'react-router-dom';
// import { observer } from 'mobx-react-lite';

// const { Sider } = Layout;

// const Dashboard = observer(() => {
//   const location = useLocation();
//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Sider theme="dark" style={{ width: '10%' }}>
//         <Menu theme="dark" selectedKeys={[location.pathname]}>
//           <Menu.Item key="/dashboard">
//             <Link to="/dashboard/user" style={{ textDecoration: 'none' }}>
//               <UserOutlined style={{ fontSize: '22px' }} className="me-2" />Users
//             </Link>
//           </Menu.Item>
//         </Menu>
//       </Sider>
//       <Layout>
//         <Outlet /> {/* Render child components based on nested routes */}
//       </Layout>
//     </Layout>
//   );
// });

// export default Dashboard;



// --------------------------------  Done Open Silder -------------------



// import React from 'react';
// import { Layout, Menu } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// import { Link, Outlet, useLocation } from 'react-router-dom';
// import { observer } from 'mobx-react-lite';
// import { Content } from 'antd/es/layout/layout';

// const { Sider } = Layout;

// const Dashboard = observer(() => {
//   const location = useLocation();

//   return (
//     <Layout style={{ minHeight: '100vh', display:"flex" }}>
//       <Sider theme="dark" style={{ width: '10%' }}>
//         <Menu theme="dark" selectedKeys={["/dashboard/user"]} mode="vertical">
//           <Menu.Item key="/dashboard">
//             <Link to="/dashboard/user" style={{ textDecoration: 'none' }}>
//               <UserOutlined style={{ fontSize: '22px' }} className="me-2" />Users
//             </Link>
//           </Menu.Item>
//         </Menu>
//       </Sider>

//       <Layout style={{width : "80%"}}>
//           <Outlet />
//       </Layout>
//     </Layout>
//   );
// });

// export default Dashboard;




// ----------------------------------



// import React from 'react';
// import { Layout, Menu } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// import { Link, Outlet, useLocation } from 'react-router-dom';
// import { observer } from 'mobx-react-lite';
// import { Content } from 'antd/es/layout/layout';

// const { Sider } = Layout;

// const Dashboard = observer(() => {
//   const location = useLocation();

//   return (
//     <>
//       {/* <div> */}
//         {
//           (
//             <Sider theme="dark" style={{ width: '10%', height: '100%' }}>
//               <div style={{ height: '100%', overflowY: 'auto' }}>
//                 <Menu theme="dark" mode="inline">
//                   <Menu.Item key="/dashboard">
//                     <Link to="/dashboard/user" style={{ textDecoration: 'none' }}>
//                       <UserOutlined style={{ fontSize: '22px' }} className="me-2" />Users
//                     </Link>
//                   </Menu.Item>
//                 </Menu>
//               </div>
//             </Sider>
//           )
//         }
//         <Outlet />
//       {/* </div> */}
//     </>
//   );
// });

// export default Dashboard;




// -----------------------------------------  Done Silder Bar ---------------------------


// import React from 'react';
// import { Layout, Menu } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// import { Link, Outlet, useLocation } from 'react-router-dom';
// import { observer } from 'mobx-react-lite';
// import { Content } from 'antd/es/layout/layout';

// const { Sider } = Layout;

// const Dashboard = observer(() => {
//   const location = useLocation();

//   return (
//     <Layout style={{ minHeight: '100vh', display:"flex" }}>
//       <Sider theme="dark" style={{ width: '10%' }}>
//         <Menu theme="dark" mode="inline">
//           <Menu.Item key="/dashboard">
//             <Link to="/dashboard/user" style={{ textDecoration: 'none' }}>
//               <UserOutlined style={{ fontSize: '22px' }} className="me-2" />Users
//             </Link>
//           </Menu.Item>
//         </Menu>
//       </Sider>

//       <Layout style={{width : "80%"}}>
//           <Outlet />
//       </Layout>
//     </Layout>
//   );
// });

// export default Dashboard;




// --------------------------------------------




import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Content } from 'antd/es/layout/layout';
import { useStore } from '../../Hooks/useStore';

const { Sider } = Layout;

const Dashboard = observer(() => {
  const location = useLocation();

  const navigate = useNavigate()

  const { indexStore: { store } } = useStore();
  function isLoggedIn() {
    return !!localStorage.getItem('tokens');     // ! -> convert boolean value
  }

  const logOutUser = () =>{
    
    localStorage.removeItem("tokens")
    navigate("/")
  }

  if (!isLoggedIn()) {
    // If the user is not logged in, redirect them to the login page.
    navigate('/');
    return null;
  }

  return (
    <Layout style={{ minHeight: '100vh', display: "flex" }}>
      <Sider theme="dark" style={{ width: '10%' }}>
      <span style={{color : "white"}}>Login User : {store.loginUserA}</span>
        <Menu theme="dark" mode="inline">
      
          <Menu.Item key="/dashboard">
            <Link to="/dashboard/user" style={{ textDecoration: 'none' }}>
              <UserOutlined style={{ fontSize: '22px' }} className="me-2" />Users
            </Link>
          </Menu.Item>
          <Menu.Item key="/attractions">
            <Link to="/dashboard/attractions" style={{ textDecoration: 'none' }}>
              <TeamOutlined style={{ fontSize: '22px' }} className="me-2" />Attractions/Places
            </Link>
          </Menu.Item>
          <Menu.Item key="/logout">
            <button
            onClick={() => logOutUser()}
             type='button'           
            className='btn btn-primary'>logOut</button>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ width: "80%" }}>
        <Outlet />
      </Layout>
      
    </Layout>
  );
});

export default Dashboard;


