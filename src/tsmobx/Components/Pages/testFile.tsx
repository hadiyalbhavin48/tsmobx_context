

// ------------------------------ Silder --------------------------------------

// import React, { useState } from 'react';
// import {
//     DesktopOutlined,
//     FileOutlined,
//     PieChartOutlined,
//     TeamOutlined,
//     UserOutlined,
// } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import { Link, NavLink } from 'react-router-dom';
// import '../../../style.css'
// const { Header, Content, Footer, Sider } = Layout;

// // type MenuItem = Required<MenuProps>['items'][number];

// // function getItem(
// //   label: React.ReactNode,
// //   key: React.Key,
// //   icon?: React.ReactNode,
// //   children?: MenuItem[],
// // ): MenuItem {
// //   return {
// //     key,
// //     icon,
// //     children,
// //     label,
// //   } as MenuItem;
// // }

// // const items: MenuItem[] = [
// //   getItem('User', '1', <UserOutlined />),
// //   getItem('Attractions/Places', '2', <TeamOutlined />),
// // ];

// const TestFile: React.FC = () => {

//     return (
//         <Layout style={{ minHeight: '100vh' }}>
//             <Sider theme='dark' style={{ width: "10%" }}>
//                 <Menu theme="dark"  >
//                     <Menu.Item key="/dashboard">
//                         <NavLink to={"/"}
//                             style={{ textDecoration: "none" }}
//                             className='userStyle'
//                         > <UserOutlined style={{ fontSize: "22px" }} className='me-2' />Users</NavLink>
//                     </Menu.Item>
//                 </Menu>
//             </Sider>
            
//         </Layout>
//     );
// };

// export default TestFile;




// ----------------------- Login Form -------------------------------




// import React from 'react';
// import { Button, Form, Input } from 'antd';


// const TestFile: React.FC = () => (
//   <Form
//   >
//     <Form.Item
//       label="Username"
//       name="username"
//       rules={[{ required: true, message: 'Please input your username!' }]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Password"
//       name="password"
//       rules={[{ required: true, message: 'Please input your password!' }]}
//     >
//       <Input.Password />
//     </Form.Item>

//     <Form.Item>
//       <Button type="primary" htmlType="submit">
//         Submit
//       </Button>
//     </Form.Item>
//   </Form>
// );

// export default TestFile;




// ---------------------------- AgiGrid -----------------------------------


// import { useState } from "react";
// import { render } from "react-dom";
// import { AgGridReact } from "ag-grid-react";

// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";

// const TestFile = () => {
//   const [rowData] = useState([
//     { make: "Toyota", model: "Celica", price: 35000 },
//     { make: "Ford", model: "Mondeo", price: 32000 },
//     { make: "Porsche", model: "Boxter", price: 72000 }
//   ]);

//   const [columnDefs] : any = useState([
//     { field: "make" },
//     { field: "model" },
//     { field: "price" }
//   ]);

// //  const columnDef : any =[
// //   { headerName: "ID", field: "id" },
// //   { headerName: "Name", field: "name" },
// //   { headerName: "Address", field: "address" },
// //  ]

//   //  Sorting
  
//   const defaultColDef = {
//     sortable: true,   // id user upar niche ni nishan avse                                                 
//     flex: 1, filter: true,    // last ma filter no option 
//     floatingFilter: true
//   }
//   //  

//   const gridOptions = {
//     rowHeight: 120,    // row ni height apva
//     pagination: true,
//     paginationPageSize: 5,
//   };
//   return (
//     <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
//       <AgGridReact rowData={rowData}
//        columnDefs={columnDefs}
//         defaultColDef={defaultColDef}
//         gridOptions={gridOptions}
//         domLayout="autoHeight"
//         ></AgGridReact>
//     </div>
//   );             
// };

// export default TestFile;



// ------------------------------------------------




import { useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const TestFile = () => {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ]);

  const [columnDefs] : any = useState([
    { field: "make" , filter: "agTextColumnFilter"},
    { field: "model" },
    { field: "price" ,filter: "agTextColumnFilter"}
  ]);

//  const columnDef : any =[
//   { headerName: "ID", field: "id" },
//   { headerName: "Name", field: "name" },
//   { headerName: "Address", field: "address" },
//  ]

  //  Sorting
  
  const defaultColDef = {
    sortable: true,   // id user upar niche ni nishan avse                                                 
    flex: 1, filter: true,    // last ma filter no option 
    floatingFilter: true
  }
  //  

  const gridOptions = {
    rowHeight: 120,    // row ni height apva
    pagination: true,
    paginationPageSize: 5,
  };
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowData}
       columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        gridOptions={gridOptions}
        domLayout="autoHeight"
        ></AgGridReact>
    </div>
  );             
};

export default TestFile;