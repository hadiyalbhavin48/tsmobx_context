// import React, { useEffect, useState } from 'react';
// import TestFile from './testFile';
// import { Button, Layout, Spin, Modal, Space, Form, Input } from 'antd';
// import { useStore } from '../../Hooks/useStore';
// import { AgGridReact } from "ag-grid-react";
// import { observer } from 'mobx-react-lite';

// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { IUser } from '../../Store/Store';

// const { Header, Footer } = Layout;
// const UserList = () => {

//   const { indexStore: { store } } = useStore();

//   const [userData, setUserData] = useState<IUser[]>([])
//   // const [userData , setUserData] = useState<IUser[]>(store.getUserDetails)
//   // console.log("userData ", userData);

//   const [loader, setLoader] = useState(true)
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);

//   const [form] = Form.useForm();
//   const formRef = React.useRef(form);

//   const columnDefs: any = [
//     { headerName: "ID", field: "id", filter: "agTextColumnFilter", width: 100 },
//     {
//       headerName: "AVATAR", field: "avatar",
//       cellRenderer: (imageUrl: any) => {
//         const imgSrc = imageUrl.value
//         // console.log("imageUrl",imgSrc);
//         return (
//           <img src={imgSrc} alt='image not show' style={{ width: "40%" }} className='mt-2' />
//         )

//       },
//       width: 170,
//     },
//     { headerName: "FIRST NAME", field: "fname", filter: "agTextColumnFilter" },
//     { headerName: "LAST NAME", field: "lname", filter: "agTextColumnFilter" },
//     { headerName: "USER NAME", field: "username", filter: "agTextColumnFilter" },
//     {
//       headerName: "ACTION",
//       cellRenderer: (param: any) => {
//         return (
//           <div>
//             <Button
//               type='primary'
//               className='me-2'
//             >Edit</Button>
//             <Button
//               type="primary"
//               danger>Delete</Button>
//           </div>
//         )
//       },
//       suppressSorting: true,
//       suppressMenu: true          // hide menu option
//     }
//   ]

//   // Default Sorting

//   const defaultColDef = {
//     sortable: true,
//     filter: true,
//     floatingFilter: true
//   }

//   // Pagination

//   const gridOptions = {
//     rowHeight: 70,
//     pagination: true,
//     paginationPageSize: 4,
//   }


//   // Add Model

//   const showAddModal = () => {
//     setIsAddModalOpen(true);
//   };

//   const handleAddOk = () => {
//     setIsAddModalOpen(false);
//   };

//   const handleAddCancel = () => {
//     setIsAddModalOpen(false);
//     formRef.current.resetFields();
//   };

//   // Add User 

//   const onFinish = (values: any) => {
//     const newVal = {...values , avatar : "https://www.melivecode.com/users/cat.png"}
//     console.log('Success:', newVal);
//     store.addUserData(newVal);
//     // setLoader(false)
//     handleAddCancel();
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     console.log('Failed:', errorInfo);
//   };


//   useEffect(() => {
//     // console.log("Fetching user data...");
//     store.fetchUser()
//       .then(() => {
//         // console.log("User data fetched successfully:", store.getUserDetails);
//         setUserData(store.getUserDetails)
//         setLoader(false)
//       })
//       .catch(error => {
//         console.error("Error fetching user data:", error);
//       });

//     // setUserData(store.getUserDetails)
//   }, [loader])

//   // console.log("user List" , store.getUserDetails)
//   return (
//     <div>
//       {/* <h1>User List</h1> */}
//       {/* <TestFile /> */}

//       {/* Header */}
//       <Header style={{ color: "white", fontWeight: "bold", width: "100%" }} className='ms-2'>USER</Header>

//       <div className='ms-2 mt-2' style={{ float: "left" }}>
//         <Button type="primary" onClick={showAddModal}>
//           Add
//         </Button>
//       </div>
//       <div className="ag-theme-alpine mt-5 ms-2" style={{ width: "100%", textAlign: "left" }}>
//         <Spin spinning={loader} tip="Loading...">
//           <AgGridReact rowData={store.getUserDetails}
//             columnDefs={columnDefs}
//             defaultColDef={defaultColDef}
//             gridOptions={gridOptions}
//             domLayout="autoHeight"

//           ></AgGridReact>
//         </Spin>
//       </div>
//       <Space>
//         <div className=''>
//           <Modal
//             title="Add user"
//             centered={true}
//             visible={isAddModalOpen}
//             //  open={isAddModalOpen}
//             onCancel={handleAddCancel}
//             // onOk={handleAddOk}
//           //  onCancel={handleAddCancel}
//           footer={null}
//           >
//             <Form
//               name="basic"
//               onFinish={onFinish}
//               onFinishFailed={onFinishFailed}
//               autoComplete="off"
//               layout="vertical"
//               style={{overflow : "scroll" , height : "300px"}}
//               form={form}
//             >

//               <Form.Item
//                 label="First Name"
//                 name="fname"
//                 rules={[{ required: true, message: 'Please input your First Name!' }]}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item
//                 label="Last Name"
//                 name="lname"
//                 rules={[{ required: true, message: 'Please input your Last Name!' }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="User Name"
//                 name="username"
//                 rules={[{ required: true, message: 'Please input your User Name!' }]}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item
//                 label="Passwrod"
//                 name="password"
//                 rules={[{ required: true, message: 'Please input your password!' }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="Email"
//                 name="email"
//                 rules={[{ required: true, message: 'Please input your Email!' }]}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//                 <Button type="primary" onClick={handleAddCancel} danger className='ms-2'>
//                   Cancel
//                 </Button>
//               </Form.Item>
//             </Form>
//           </Modal>
//         </div>
//       </Space>
//     </div>
//   );
// };

// export default observer(UserList);





// ------------------------- Update User --------------------




// import React, { useEffect, useState } from 'react';
// import TestFile from './testFile';
// import { Button, Layout, Spin, Modal, Space, Form, Input } from 'antd';
// import { useStore } from '../../Hooks/useStore';
// import { AgGridReact } from "ag-grid-react";
// import { observer } from 'mobx-react-lite';

// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import Store, { IUser } from '../../Store/Store';

// const { Header, Footer } = Layout;
// const UserList = () => {

//   const { indexStore: { store } } = useStore();

//   const [userData, setUserData] = useState<IUser[]>([])
//   // const [userData , setUserData] = useState<IUser[]>(store.getUserDetails)
//   // console.log("userData ", userData);

//   const [loader, setLoader] = useState(true)
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);

//   // Edit
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);


//   const [form] = Form.useForm();
//   const formRef = React.useRef(form);

//   const columnDefs: any = [
//     { headerName: "ID", field: "id", filter: "agTextColumnFilter", width: 100 },
//     {
//       headerName: "AVATAR", field: "avatar",
//       cellRenderer: (imageUrl: any) => {
//         const imgSrc = imageUrl.value
//         // console.log("imageUrl",imgSrc);
//         return (
//           <img src={imgSrc} alt='image not show' style={{ width: "40%" }} className='mt-2' />
//         )

//       },
//       width: 170,
//     },
//     { headerName: "FIRST NAME", field: "fname", filter: "agTextColumnFilter" },
//     { headerName: "LAST NAME", field: "lname", filter: "agTextColumnFilter" },
//     { headerName: "USER NAME", field: "username", filter: "agTextColumnFilter" },
//     {
//       headerName: "ACTION",
//       cellRenderer: (param: any) => {
//         // console.log("param Edit " , param);
//         return (
//           <div>
//             <Button
//               type='primary'
//               onClick={() => editUSer(param.data)}
//               className='me-2'
//             >Edit</Button>
//             <Button
//               type="primary"
//               danger>Delete</Button>
//           </div>
//         )
//       },
//       suppressSorting: true,
//       suppressMenu: true          // hide menu option
//     }
//   ]

//   // Default Sorting

//   const defaultColDef = {
//     sortable: true,
//     filter: true,
//     floatingFilter: true
//   }

//   // Pagination

//   const gridOptions = {
//     rowHeight: 70,
//     pagination: true,
//     paginationPageSize: 4,
//   }


//   // Add Model

//   const showAddModal = () => {
//     setIsAddModalOpen(true);
//   };

//   const handleAddOk = () => {
//     setIsAddModalOpen(false);
//   };

//   const handleAddCancel = () => {
//     setIsAddModalOpen(false);
//     setIsEditModalOpen(false)
//     formRef.current.resetFields();
//   };

//   // Add User 

//   const onFinish = (values: any) => {
//     const newVal = { ...values, avatar: "https://www.melivecode.com/users/cat.png" }
//     // console.log('Success:', newVal);
//     store.addUserData(newVal);

//     const addDetails ={
//       email : values.email,
//       password : values.password
//     } 
//     // console.log("addDetails " , addDetails);
    
//     store.setaddDetails(addDetails)
//     // setLoader(false)
//     handleAddCancel();
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     // console.log('Failed:', errorInfo);
//   };



//   // Edit user 

//   const editUSer = (value: IUser) => {
//     // console.log("edit User", value);
//     const updateData = {
//       id : value.id,
//       fname : value.fname,
//       lname : value.lname,
//       username : value.username,
//       avatar : value.avatar,
//     }
//     // console.log("updateData " , updateData);
    
//     // store.editBefore(updateData)
//     store.setEditBefore(updateData); 
//     // form.setFieldsValue(updateData);
//     showEditModal()
    
//   }


//   // Edit Model

//   const showEditModal = () => {
//     setIsEditModalOpen(true);
//   };

//   const onEditFinish = (value : any) =>{
//     // console.log('Success: Edit', store.editBefore?.id);
//     // console.log("edit value " , value);
    
//     const newVal = {...value , 
//       id : store.editBefore?.id,
//       email : store.addDetails?.email,
//       password : store.addDetails?.password,
//     }
//     // console.log("newVal " , newVal);
    
//     store.updetUer(newVal);
//     handleAddCancel();
//   }

//   const onEditFinishFailed = (errorInfo : any) =>{
//     console.log('Failed Update', errorInfo);
//   }

//   useEffect(() => {
//     // console.log("Fetching user data...");
//     store.fetchUser()
//       .then(() => {
//         // console.log("User data fetched successfully:", store.getUserDetails);
//         setUserData(store.getUserDetails)
//         setLoader(false)
//       })
//       .catch(error => {
//         console.error("Error fetching user data:", error);
//       });

//     // setUserData(store.getUserDetails)
//   }, [loader])

//   // console.log("user List" , store.getUserDetails)
//   return (
//     <div>
//       {/* <h1>User List</h1> */}
//       {/* <TestFile /> */}

//       {/* Header */}
//       <Header style={{ color: "white", fontWeight: "bold", width: "100%" }} className='ms-2'>USER</Header>

//       <div className='ms-2 mt-2' style={{ float: "left" }}>
//         <Button type="primary" onClick={showAddModal}>
//           Add
//         </Button>
//       </div>
//       <div className="ag-theme-alpine mt-5 ms-2" style={{ width: "100%", textAlign: "left" }}>
//         <Spin spinning={loader} tip="Loading...">
//           <AgGridReact rowData={store.getUserDetails}
//             columnDefs={columnDefs}
//             defaultColDef={defaultColDef}
//             gridOptions={gridOptions}
//             domLayout="autoHeight"

//           ></AgGridReact>
//         </Spin>
//       </div>
//       <Space>
//         <div className=''>
//           <Modal
//             title="Add user"
//             centered={true}
//             visible={isAddModalOpen}
//             //  open={isAddModalOpen}
//             onCancel={handleAddCancel}
//             // onOk={handleAddOk}
//             //  onCancel={handleAddCancel}
//             footer={null}
//           >
//             <Form
//               name="basic"
//               onFinish={onFinish}
//               onFinishFailed={onFinishFailed}
//               autoComplete="off"
//               layout="vertical"
//               style={{ overflow: "scroll", height: "300px" }}
//               form={form}
//             >

//               <Form.Item
//                 label="First Name"
//                 name="fname"
//                 rules={[{ required: true, message: 'Please input your First Name!' }]}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item
//                 label="Last Name"
//                 name="lname"
//                 rules={[{ required: true, message: 'Please input your Last Name!' }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="User Name"
//                 name="username"
//                 rules={[{ required: true, message: 'Please input your User Name!' }]}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item
//                 label="Passwrod"
//                 name="password"
//                 rules={[{ required: true, message: 'Please input your password!' }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="Email"
//                 name="email"
//                 rules={[{ required: true, message: 'Please input your Email!' }]}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//                 <Button type="primary" onClick={handleAddCancel} danger className='ms-2'>
//                   Cancel
//                 </Button>
//               </Form.Item>
//             </Form>
//           </Modal>


//           {/* Edit Open Model */}


//           <Modal 
//           title="Edit User"          
//           visible={isEditModalOpen}
//           onCancel={handleAddCancel}
//           footer={null}
//            >
//             <Form
//               name="basic"
//               onFinish={onEditFinish}
//               onFinishFailed={onEditFinishFailed}
//               autoComplete="off"
//               layout="vertical"
//               style={{ overflow: "scroll", height: "300px" }}
//               form={form}
//               initialValues={store.editBefore}
//             >

//               <Form.Item
//                 label="First Name"
//                 name="fname"
                
//               >
//                 <Input 
                
//                 />
//               </Form.Item>

//               <Form.Item
//                 label="Last Name"
//                 name="lname"
                
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="User Name"
//                 name="username"
                
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//                 <Button type="primary" onClick={handleAddCancel} danger className='ms-2'>
//                   Cancel
//                 </Button>
//               </Form.Item>
//             </Form>
//           </Modal>
//         </div>
//       </Space>
//     </div>
//   );
// };

// export default observer(UserList);



// // ----------------------------------------  Update Done -----------------------------


// import React, { useEffect, useState } from 'react';
// import TestFile from './testFile';
// import { Button, Layout, Spin, Modal, Space, Form, Input } from 'antd';
// import { useStore } from '../../Hooks/useStore';
// import { AgGridReact } from "ag-grid-react";
// import { observer } from 'mobx-react-lite';

// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import Store, { IUser } from '../../Store/Store';

// const { Header, Footer } = Layout;
// const UserList = observer(() => {

//   const { indexStore: { store } } = useStore();

//   const [userData, setUserData] = useState<IUser[]>([])
//   // const [userData , setUserData] = useState<IUser[]>(store.getUserDetails)
//   // console.log("userData ", userData);

//   const [loader, setLoader] = useState(true)
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);

//   // Edit
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);


//   const [form] = Form.useForm();
//   const formRef = React.useRef(form);

//   const columnDefs: any = [
//     { headerName: "ID", field: "id", filter: "agTextColumnFilter", width: 100 },
//     {
//       headerName: "AVATAR", field: "avatar",
//       cellRenderer: (imageUrl: any) => {
//         const imgSrc = imageUrl.value
//         // console.log("imageUrl",imgSrc);
//         return (
//           <img src={imgSrc} alt='image not show' style={{ width: "40%" }} className='mt-2' />
//         )

//       },
//       width: 170,
//     },
//     { headerName: "FIRST NAME", field: "fname", filter: "agTextColumnFilter" },
//     { headerName: "LAST NAME", field: "lname", filter: "agTextColumnFilter" },
//     { headerName: "USER NAME", field: "username", filter: "agTextColumnFilter" },
//     {
//       headerName: "ACTION",
//       cellRenderer: (param: any) => {
//         // console.log("param Edit " , param);
//         return (
//           <div>
//             <Button
//               type='primary'
//               onClick={() => editUSer(param.data)}
//               className='me-2'
//             >Edit</Button>
//             <Button
//               type="primary"
//               danger>Delete</Button>
//           </div>
//         )
//       },
//       suppressSorting: true,
//       suppressMenu: true          // hide menu option
//     }
//   ]

//   // Default Sorting

//   const defaultColDef = {
//     sortable: true,
//     filter: true,
//     floatingFilter: true
//   }

//   // Pagination

//   const gridOptions = {
//     rowHeight: 70,
//     pagination: true,
//     paginationPageSize: 4,
//   }


//   // Add Model

//   const showAddModal = () => {
//     setIsAddModalOpen(true);
//   };

//   const handleAddOk = () => {
//     setIsAddModalOpen(false);
//   };

//   const handleAddCancel = () => {
//     setIsAddModalOpen(false);
//     setIsEditModalOpen(false)
//     formRef.current.resetFields();
//   };

//   // Add User 

//   const onFinish = (values: any) => {
//     const newVal = { ...values, avatar: "https://www.melivecode.com/users/cat.png" }
//     // console.log('Success:', newVal);
//     store.addUserData(newVal);

//     const addDetails ={
//       email : values.email,
//       password : values.password
//     } 
//     // console.log("addDetails " , addDetails);
    
//     store.setaddDetails(addDetails)
//     // setLoader(false)
//     handleAddCancel();
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     // console.log('Failed:', errorInfo);
//   };



//   // Edit user 

//   const editUSer = (value: IUser) => {
//     // console.log("edit User", value);
//     const updateData = {
//       id : value.id,
//       fname : value.fname,
//       lname : value.lname,
//       username : value.username,
//       avatar : value.avatar,
//     }
//     // console.log("updateData " , updateData);
    
//     // store.editBefore(updateData)
//     store.setEditBefore(updateData); 
//     // form.setFieldsValue(updateData);
//     formRef.current.setFieldsValue(value);
//     showEditModal()
    
//   }


//   // Edit Model

//   const showEditModal = () => {
//     setIsEditModalOpen(true);
//   };

//   const onEditFinish = (value : any) =>{
//     // console.log('Success: Edit', store.editBefore?.id);
//     // console.log("edit value " , value);
    
//     const newVal = {...value , 
//       id : store.editBefore?.id,
//       email : store.addDetails?.email,
//       password : store.addDetails?.password,
//     }
//     // console.log("newVal " , newVal);
    
//     store.updetUer(newVal);
//     handleAddCancel();
//   }

//   const onEditFinishFailed = (errorInfo : any) =>{
//     console.log('Failed Update', errorInfo);
//   }

//   useEffect(() => {
//     // console.log("Fetching user data...");
//     store.fetchUser()
//       .then(() => {
//         // console.log("User data fetched successfully:", store.getUserDetails);
//         setUserData(store.getUserDetails)
//         setLoader(false)
//       })
//       .catch(error => {
//         console.error("Error fetching user data:", error);
//       });

//     // setUserData(store.getUserDetails)
//   }, [loader])

//   // console.log("user List" , store.getUserDetails)
//   return (
//     <div>
//       {/* <h1>User List</h1> */}
//       {/* <TestFile /> */}

//       {/* Header */}
//       <Header style={{ color: "white", fontWeight: "bold", width: "100%" }} className='ms-2'>USER</Header>

//       <div className='ms-2 mt-2' style={{ float: "left" }}>
//         <Button type="primary" onClick={showAddModal}>
//           Add
//         </Button>
//       </div>
//       <div className="ag-theme-alpine mt-5 ms-2" style={{ width: "100%", textAlign: "left" }}>
//         <Spin spinning={loader} tip="Loading...">
//           <AgGridReact rowData={store.getUserDetails}
//             columnDefs={columnDefs}
//             defaultColDef={defaultColDef}
//             gridOptions={gridOptions}
//             domLayout="autoHeight"

//           ></AgGridReact>
//         </Spin>
//       </div>
//       <Space>
//         <div className=''>
//           <Modal
//             title="Add user"
//             centered={true}
//             visible={isAddModalOpen}
//             //  open={isAddModalOpen}
//             onCancel={handleAddCancel}
//             // onOk={handleAddOk}
//             //  onCancel={handleAddCancel}
//             footer={null}
//           >
//             <Form
//             form={form}
//               name="basic"
//               onFinish={onFinish}
//               onFinishFailed={onFinishFailed}
//               autoComplete="off"
//               layout="vertical"
//               style={{ overflow: "scroll", height: "300px" }}
              
//             >

//               <Form.Item
//                 label="First Name"
//                 name="fname"
//                 rules={[{ required: true, message: 'Please input your First Name!' }]}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item
//                 label="Last Name"
//                 name="lname"
//                 rules={[{ required: true, message: 'Please input your Last Name!' }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="User Name"
//                 name="username"
//                 rules={[{ required: true, message: 'Please input your User Name!' }]}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item
//                 label="Passwrod"
//                 name="password"
//                 rules={[{ required: true, message: 'Please input your password!' }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="Email"
//                 name="email"
//                 rules={[{ required: true, message: 'Please input your Email!' }]}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//                 <Button type="primary" onClick={handleAddCancel} danger className='ms-2'>
//                   Cancel
//                 </Button>
//               </Form.Item>
//             </Form>
//           </Modal>


//           {/* Edit Open Model */}


//           <Modal 
//           title="Edit User"          
//           visible={isEditModalOpen}
//           onCancel={handleAddCancel}
//           footer={null}
//            >
//             <Form
//               name="Edit"
//               onFinish={onEditFinish}
//               onFinishFailed={onEditFinishFailed}
//               autoComplete="off"
//               layout="vertical"
//               style={{ overflow: "scroll", height: "300px" }}
//               form={form}
//               initialValues={store.editBefore}
//             >

//               <Form.Item
//                 label="First Name"
//                 name="fname"
                
//               >
//                 <Input 
                
//                 />
//               </Form.Item>

//               <Form.Item
//                 label="Last Name"
//                 name="lname"
                
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="User Name"
//                 name="username"
                
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//                 <Button type="primary" onClick={handleAddCancel} danger className='ms-2'>
//                   Cancel
//                 </Button>
//               </Form.Item>
//             </Form>
//           </Modal>
//         </div>
//       </Space>
//     </div>
//   );
// });

// export default UserList;




// // ----------------------------------------  Delete User Done-----------------------------


// import React, { useEffect, useState } from 'react';
// import TestFile from './testFile';
// import { Button, Layout, Spin, Modal, Space, Form, Input } from 'antd';
// import { useStore } from '../../Hooks/useStore';
// import { AgGridReact } from "ag-grid-react";
// import { observer } from 'mobx-react-lite';

// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import Store, { IUser } from '../../Store/Store';

// const { Header, Footer } = Layout;
// const UserList = observer(() => {

//   const { indexStore: { store } } = useStore();

//   const [userData, setUserData] = useState<IUser[]>([])
//   // const [userData , setUserData] = useState<IUser[]>(store.getUserDetails)
//   // console.log("userData ", userData);

//   const [loader, setLoader] = useState(true)
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);

//   // Edit
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);


//   const [form] = Form.useForm();
//   const formRef = React.useRef(form);

//   const columnDefs: any = [
//     { headerName: "ID", field: "id", filter: "agTextColumnFilter", width: 100 },
//     {
//       headerName: "AVATAR", field: "avatar",
//       cellRenderer: (imageUrl: any) => {
//         const imgSrc = imageUrl.value
//         // console.log("imageUrl",imgSrc);
//         return (
//           <img src={imgSrc} alt='image not show' style={{ width: "40%" }} className='mt-2' />
//         )

//       },
//       width: 170,
//     },
//     { headerName: "FIRST NAME", field: "fname", filter: "agTextColumnFilter" },
//     { headerName: "LAST NAME", field: "lname", filter: "agTextColumnFilter" },
//     { headerName: "USER NAME", field: "username", filter: "agTextColumnFilter" },
//     {
//       headerName: "ACTION",
//       cellRenderer: (param: any) => {
//         // console.log("param Edit " , param);
//         return (
//           <div>
//             <Button
//               type='primary'
//               onClick={() => editUSer(param.data)}
//               className='me-2'
//             >Edit</Button>
//             <Button
//               type="primary"
//               onClick={() => deleteData(param.data)}
//               danger>Delete</Button>
//           </div>
//         )
//       },
//       suppressSorting: true,
//       suppressMenu: true          // hide menu option
//     }
//   ]

//   // Default Sorting

//   const defaultColDef = {
//     sortable: true,
//     filter: true,
//     floatingFilter: true
//   }

//   // Pagination

//   const gridOptions = {
//     rowHeight: 70,
//     pagination: true,
//     paginationPageSize: 4,
//   }


//   // Add Model

//   const showAddModal = () => {
//     setIsAddModalOpen(true);
//   };

//   const handleAddOk = () => {
//     setIsAddModalOpen(false);
//   };

//   const handleAddCancel = () => {
//     setIsAddModalOpen(false);
//     setIsEditModalOpen(false)
//     formRef.current.resetFields();
//   };

//   // Add User 

//   const onFinish = (values: any) => {
//     const newVal = { ...values, avatar: "https://www.melivecode.com/users/cat.png" }
//     // console.log('Success:', newVal);
//     store.addUserData(newVal);

//     const addDetails ={
//       email : values.email,
//       password : values.password
//     } 
//     // console.log("addDetails " , addDetails);
    
//     store.setaddDetails(addDetails)
//     // setLoader(false)
//     handleAddCancel();
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     // console.log('Failed:', errorInfo);
//   };



//   // Edit user 

//   const editUSer = (value: IUser) => {
//     // console.log("edit User", value);
//     const updateData = {
//       id : value.id,
//       fname : value.fname,
//       lname : value.lname,
//       username : value.username,
//       avatar : value.avatar,
//     }
//     // console.log("updateData " , updateData);
    
//     // store.editBefore(updateData)
//     store.setEditBefore(updateData); 
//     // form.setFieldsValue(updateData);
//     formRef.current.setFieldsValue(value);
//     showEditModal()
    
//   }


//   // Edit Model

//   const showEditModal = () => {
//     setIsEditModalOpen(true);
//   };

//   const onEditFinish = (value : any) =>{
//     // console.log('Success: Edit', store.editBefore?.id);
//     // console.log("edit value " , value);
    
//     const newVal = {...value , 
//       id : store.editBefore?.id,
//       email : store.addDetails?.email,
//       password : store.addDetails?.password,
//     }
//     // console.log("newVal " , newVal);
    
//     store.updetUer(newVal);
//     handleAddCancel();
//   }

//   const onEditFinishFailed = (errorInfo : any) =>{
//     console.log('Failed Update', errorInfo);
//   }

//   useEffect(() => {
//     // console.log("Fetching user data...");
//     store.fetchUser()
//       .then(() => {
//         // console.log("User data fetched successfully:", store.getUserDetails);
//         setUserData(store.getUserDetails)
//         setLoader(false)
//       })
//       .catch(error => {
//         console.error("Error fetching user data:", error);
//       });

//     // setUserData(store.getUserDetails)
//   }, [loader])

//   // console.log("user List" , store.getUserDetails)



//   // Delete

//    const deleteData = (idUser : any) =>{
//       const idData = idUser.id

//       // console.log("delete id ", idData);
//       store.deleteUser(idData);
//    }

//   return (
//     <div>
//       {/* <h1>User List</h1> */}
//       {/* <TestFile /> */}

//       {/* Header */}
//       <Header style={{ color: "white", fontWeight: "bold", width: "100%" }} className='ms-2'>USER</Header>

//       <div className='ms-2 mt-2' style={{ float: "left" }}>
//         <Button type="primary" onClick={showAddModal}>
//           Add
//         </Button>
//       </div>
//       <div className="ag-theme-alpine mt-5 ms-2" style={{ width: "100%", textAlign: "left" }}>
//         <Spin spinning={loader} tip="Loading...">
//           <AgGridReact rowData={store.getUserDetails}
//             columnDefs={columnDefs}
//             defaultColDef={defaultColDef}
//             gridOptions={gridOptions}
//             domLayout="autoHeight"

//           ></AgGridReact>
//         </Spin>
//       </div>
//       <Space>
//         <div className=''>
//           <Modal
//             title="Add user"
//             centered={true}
//             visible={isAddModalOpen}
//             //  open={isAddModalOpen}
//             onCancel={handleAddCancel}
//             // onOk={handleAddOk}
//             //  onCancel={handleAddCancel}
//             footer={null}
//           >
//             <Form
//             form={form}
//               name="basic"
//               onFinish={onFinish}
//               onFinishFailed={onFinishFailed}
//               autoComplete="off"
//               layout="vertical"
//               style={{ overflow: "scroll", height: "300px" }}
              
//             >

//               <Form.Item
//                 label="First Name"
//                 name="fname"
//                 rules={[{ required: true, message: 'Please input your First Name!' }]}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item
//                 label="Last Name"
//                 name="lname"
//                 rules={[{ required: true, message: 'Please input your Last Name!' }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="User Name"
//                 name="username"
//                 rules={[{ required: true, message: 'Please input your User Name!' }]}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item
//                 label="Passwrod"
//                 name="password"
//                 rules={[{ required: true, message: 'Please input your password!' }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="Email"
//                 name="email"
//                 rules={[{ required: true, message: 'Please input your Email!' }]}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//                 <Button type="primary" onClick={handleAddCancel} danger className='ms-2'>
//                   Cancel
//                 </Button>
//               </Form.Item>
//             </Form>
//           </Modal>


//           {/* Edit Open Model */}


//           <Modal 
//           title="Edit User"          
//           visible={isEditModalOpen}
//           onCancel={handleAddCancel}
//           footer={null}
//            >
//             <Form
//               name="Edit"
//               onFinish={onEditFinish}
//               onFinishFailed={onEditFinishFailed}
//               autoComplete="off"
//               layout="vertical"
//               style={{ overflow: "scroll", height: "300px" }}
//               form={form}
//               initialValues={store.editBefore}
//             >

//               <Form.Item
//                 label="First Name"
//                 name="fname"
                
//               >
//                 <Input 
                
//                 />
//               </Form.Item>

//               <Form.Item
//                 label="Last Name"
//                 name="lname"
                
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="User Name"
//                 name="username"
                
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//                 <Button type="primary" onClick={handleAddCancel} danger className='ms-2'>
//                   Cancel
//                 </Button>
//               </Form.Item>
//             </Form>
//           </Modal>
//         </div>
//       </Space>
//     </div>
//   );
// });

// export default UserList;






// // ----------------------------------------  All Worning Done -----------------------------


// import React, { useEffect, useState } from 'react';
// // import TestFile from './testFile';
// import { Button, Layout, Spin, Modal, Space, Form, Input } from 'antd';
// import { useStore } from '../../Hooks/useStore';
// import { AgGridReact } from "ag-grid-react";
// import { observer } from 'mobx-react-lite';

// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { IUser } from '../../Store/Store';

// const { Header } = Layout;
// const UserList = observer(() => {

//   const { indexStore: { store } } = useStore();

//   // const [userData, setUserData] = useState<IUser[]>([])
//   // const [userData , setUserData] = useState<IUser[]>(store.getUserDetails)
//   // console.log("userData ", userData);

//   const [loader, setLoader] = useState(true)
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);

//   // Edit
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);


//   const [form] = Form.useForm();
//   const formRef = React.useRef(form);

//   const columnDefs: any = [
//     { headerName: "ID", field: "id", filter: "agTextColumnFilter", width: 100 },
//     {
//       headerName: "AVATAR", field: "avatar",
//       cellRenderer: (imageUrl: any) => {
//         const imgSrc = imageUrl.value
//         // console.log("imageUrl",imgSrc);
//         return (
//           <img src={imgSrc} alt=''  style={{ width: "40%" }} className='mt-2' />
//         )

//       },
//       width: 170,
//     },
//     { headerName: "FIRST NAME", field: "fname", filter: "agTextColumnFilter" },
//     { headerName: "LAST NAME", field: "lname", filter: "agTextColumnFilter" },
//     { headerName: "USER NAME", field: "username", filter: "agTextColumnFilter" },
//     {
//       headerName: "ACTION",
//       cellRenderer: (param: any) => {
//         // console.log("param Edit " , param);
//         return (
//           <div>
//             <Button
//               type='primary'
//               onClick={() => editUSer(param.data)}
//               className='me-2'
//             >Edit</Button>
//             <Button
//               type="primary"
//               onClick={() => deleteData(param.data)}
//               danger>Delete</Button>
//           </div>
//         )
//       },
//       suppressSorting: true,
//       suppressMenu: true          // hide menu option
//     }
//   ]

//   // Default Sorting

//   const defaultColDef = {
//     sortable: true,
//     filter: true,
//     floatingFilter: true
//   }

//   // Pagination

//   const gridOptions = {
//     rowHeight: 70,
//     pagination: true,
//     paginationPageSize: 4,
//   }


//   // Add Model

//   const showAddModal = () => {
//     setIsAddModalOpen(true);
//   };

//   // const handleAddOk = () => {
//   //   setIsAddModalOpen(false);
//   // };

//   const handleAddCancel = () => {
//     setIsAddModalOpen(false);
//     setIsEditModalOpen(false)
//     formRef.current.resetFields();
//   };

//   // Add User 

//   const onFinish = (values: any) => {
//     const addDetails ={
//       email : values.email,
//       password : values.password
//     } 
//     const newVal = { ...values, avatar: "https://www.melivecode.com/users/cat.png" }
//     // console.log('Success:', newVal);
//     store.addUserData(newVal);

//     // console.log("addDetails " , addDetails);
    
//     store.setaddDetails(addDetails)
//     // setLoader(false)
//     // formRef.current.resetFields();
//     handleAddCancel();
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     // console.log('Failed:', errorInfo);
//   };



//   // Edit user 

//   const editUSer = (value: IUser) => {
//     console.log("edit User", value);
//     const updateData = {
//       id : value.id,
//       fname : value.fname,
//       lname : value.lname,
//       username : value.username,
//       avatar : value.avatar,
//       email : store.addDetails.email,
//       password: store.addDetails.password,
//     }
//     // console.log("updateData " , updateData);
    
//     // store.editBefore(updateData)
//     // store.setEditBefore(updateData); 
//     store.setEditBefore(updateData); 
//     // form.setFieldsValue(updateData);
//     // formRef.current.setFieldsValue(value);
//     showEditModal()
    
//   }


//   // Edit Model

//   const showEditModal = () => {
//     setIsEditModalOpen(true);
//   };

//   const onEditFinish = (value : any) =>{
//     // console.log('Success: Edit', store.editBefore?.id);
//     // console.log("edit value " , value);
    
//     const editAll = {
//       ...value , 
//       id : store.editBefore.id,
//       email : store.addDetails?.email,
//       password: store.addDetails?.password,
//     }
//     console.log("newVal " , editAll);
//     store.updetUer(editAll);
//     formRef.current.resetFields();
//     handleAddCancel();
//   }

//   const onEditFinishFailed = (errorInfo : any) =>{
//     console.log('Failed Update', errorInfo);
//   }

//   useEffect(() => {
//     // console.log("Fetching user data...");
//     store.fetchUser()
//       .then(() => {
//         // console.log("User data fetched successfully:", store.getUserDetails);
//         // setUserData(store.getUserDetails)
//         setLoader(false)
//       })
//       .catch(error => {
//         console.error("Error fetching user data:", error);
//       });

//     // setUserData(store.getUserDetails)
//   }, [store])

//   // console.log("user List" , store.getUserDetails)



//   // Delete

//    const deleteData = (idUser : any) =>{
//       const idData = idUser.id

//       // console.log("delete id ", idData);
//       store.deleteUser(idData);
//    }

//   return (
//     <div>
//       {/* <h1>User List</h1> */}
//       {/* <TestFile /> */}

//       {/* Header */}
//       <Header style={{ color: "white", fontWeight: "bold", width: "100%" }} className='ms-2'>USER</Header>

//       <div className='ms-2 mt-2' style={{ float: "left" }}>
//         <Button type="primary" onClick={showAddModal}>
//           Add
//         </Button>
//       </div>
//       <div className="ag-theme-alpine mt-5 ms-2" style={{ width: "100%", textAlign: "left" }}>
//         <Spin spinning={loader} tip="Loading...">
//           <AgGridReact rowData={store.getUserDetails}
//             columnDefs={columnDefs}
//             defaultColDef={defaultColDef}
//             gridOptions={gridOptions}
//             domLayout="autoHeight"

//           ></AgGridReact>
//         </Spin>
//       </div>
//       <Space>
//         <div className=''>
//           <Modal
//             title="Add user"
//             centered={true}
//             visible={isAddModalOpen}
//             //  open={isAddModalOpen}
//             onCancel={handleAddCancel}
//             // onOk={handleAddOk}
//             //  onCancel={handleAddCancel}
//             footer={null}
//           >
//             <Form
//             form={form}
//               name="add Form"
//               onFinish={onFinish}
//               onFinishFailed={onFinishFailed}
//               autoComplete="off"
//               layout="vertical"
//               style={{ overflow: "scroll", height: "300px" }}
              
//             >

//               <Form.Item
//                 label="First Name"
//                 name="fname"
//                 rules={[{ required: true, message: 'Please input your First Name!' }]}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item
//                 label="Last Name"
//                 name="lname"
//                 rules={[{ required: true, message: 'Please input your Last Name!' }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="User Name"
//                 name="username"
//                 rules={[{ required: true, message: 'Please input your User Name!' }]}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item
//                 label="Passwrod"
//                 name="password"
//                 rules={[{ required: true, message: 'Please input your password!' }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="Email"
//                 name="email"
//                 rules={[{ required: true, message: 'Please input your Email!' }]}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//                 <Button type="primary" onClick={handleAddCancel} danger className='ms-2'>
//                   Cancel
//                 </Button>
//               </Form.Item>
//             </Form>
//           </Modal>


//           {/* Edit Open Model */}


//           <Modal 
//           title="Edit User"          
//           visible={isEditModalOpen}
//           onCancel={handleAddCancel}
//           footer={null}
//            >
//             <Form
//               name="Edit"
//               onFinish={onEditFinish}
//               onFinishFailed={onEditFinishFailed}
//               autoComplete="off"
//               layout="vertical"
//               style={{ overflow: "scroll", height: "300px" }}
//               form={form}
//               initialValues={store.editBefore}
//             >

//               <Form.Item
//                 label="First Name"
//                 name="fname"
                
//               >
//                 <Input 
                
//                 />
//               </Form.Item>

//               <Form.Item
//                 label="Last Name"
//                 name="lname"
                
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="User Name"
//                 name="username"
                
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//                 <Button type="primary" onClick={handleAddCancel} danger className='ms-2'>
//                   Cancel
//                 </Button>
//               </Form.Item>
//             </Form>
//           </Modal>
//         </div>
//       </Space>
//     </div>
//   );
// });

// export default UserList;





// =============================================



// ----------------------------------------  -----------------------------


import React, { useEffect, useState } from 'react';
// import TestFile from './testFile';
import { Button, Layout, Spin, Modal, Space, Form, Input } from 'antd';
import { useStore } from '../../Hooks/useStore';
import { AgGridReact } from "ag-grid-react";
import { observer } from 'mobx-react-lite';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { IUser } from '../../Store/Store';

const { Header } = Layout;
const UserList = observer(() => {

  const { indexStore: { store } } = useStore();

  // const [userData, setUserData] = useState<IUser[]>([])
  // const [userData , setUserData] = useState<IUser[]>(store.getUserDetails)
  // console.log("userData ", userData);

  const [loader, setLoader] = useState(true)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Edit
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);


  const [form] = Form.useForm();
  const formRef = React.useRef(form);

  const columnDefs: any = [
    { headerName: "ID", field: "id", filter: "agTextColumnFilter", width: 100 },
    {
      headerName: "AVATAR", field: "avatar",
      cellRenderer: (imageUrl: any) => {
        const imgSrc = imageUrl.value
        // console.log("imageUrl",imgSrc);
        return (
          <img src={imgSrc} alt=''  style={{ width: "40%" }} className='mt-2' />
        )

      },
      width: 170,
    },
    { headerName: "FIRST NAME", field: "fname", filter: "agTextColumnFilter" },
    { headerName: "LAST NAME", field: "lname", filter: "agTextColumnFilter" },
    { headerName: "USER NAME", field: "username", filter: "agTextColumnFilter" },
    {
      headerName: "ACTION",
      cellRenderer: (param: any) => {
        // console.log("param Edit " , param);
        return (
          <div>
            <Button
              type='primary'
              onClick={() => editUSer(param.data)}
              className='me-2'
            >Edit</Button>
            <Button
              type="primary"
              onClick={() => deleteData(param.data)}
              danger>Delete</Button>
          </div>
        )
      },
      suppressSorting: true,
      suppressMenu: true          // hide menu option
    }
  ]

  // Default Sorting

  const defaultColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true
  }

  // Pagination

  const gridOptions = {
    rowHeight: 70,
    pagination: true,
    paginationPageSize: 4,
  }


  // Add Model

  const showAddModal = () => {
    setIsAddModalOpen(true);
  };

  // const handleAddOk = () => {
  //   setIsAddModalOpen(false);
  // };

  const handleAddCancel = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false)
    formRef.current.resetFields();
  };

  // Add User 

  const onFinish = (values: any) => {
    const addDetails ={
      email : values.email,
      password : values.password
    } 
    const newVal = { ...values, avatar: "https://www.melivecode.com/users/cat.png" }
    // console.log('Success:', newVal);
    store.addUserData(newVal);

    // console.log("addDetails " , addDetails);
    
    store.setaddDetails(addDetails)
    // setLoader(false)
    // formRef.current.resetFields();
    handleAddCancel();
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.log('Failed:', errorInfo);
  };



  // Edit user 

  const editUSer = (value: IUser) => {
    console.log("edit User", value);
    const updateData = {
      id : value.id,
      fname : value.fname,
      lname : value.lname,
      username : value.username,
      avatar : value.avatar,
      email : store.addDetails.email,
      password: store.addDetails.password,
    }
    // console.log("updateData " , updateData);
    
    // store.editBefore(updateData)
    // store.setEditBefore(updateData); 
    store.setEditBefore(updateData); 
    // form.setFieldsValue(updateData);
    // formRef.current.setFieldsValue(value);
    showEditModal()
    
  }


  // Edit Model

  const showEditModal = () => {
    setIsEditModalOpen(true);
  };

  const onEditFinish = (value : any) =>{
    // console.log('Success: Edit', store.editBefore?.id);
    // console.log("edit value " , value);
    
    const editAll = {
      ...value , 
      id : store.editBefore.id,
      email : store.addDetails?.email,
      password: store.addDetails?.password,
    }
    console.log("newVal " , editAll);
    store.updetUer(editAll);
    formRef.current.resetFields();
    handleAddCancel();
  }

  const onEditFinishFailed = (errorInfo : any) =>{
    console.log('Failed Update', errorInfo);
  }

  useEffect(() => {
    // console.log("Fetching user data...");
    store.fetchUser()
      .then(() => {
        // console.log("User data fetched successfully:", store.getUserDetails);
        // setUserData(store.getUserDetails)
        setLoader(false)
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });

    // setUserData(store.getUserDetails)
  }, [store])

  // console.log("user List" , store.getUserDetails)



  // Delete

   const deleteData = (idUser : any) =>{
      const idData = idUser.id

      // console.log("delete id ", idData);
      store.deleteUser(idData);
   }

  return (
    <div>
      {/* <h1>User List</h1> */}
      {/* <TestFile /> */}

      {/* Header */}
      <Header style={{ color: "white", fontWeight: "bold", width: "100%" }} className='ms-2'>USER</Header>

      <div className='ms-2 mt-2' style={{ float: "left" }}>
        <Button type="primary" onClick={showAddModal}>
          Add
        </Button>
      </div>
      <div className="ag-theme-alpine mt-5 ms-2" style={{ width: "100%", textAlign: "left" }}>
        <Spin spinning={loader} tip="Loading...">
          <AgGridReact rowData={store.getUserDetails}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            gridOptions={gridOptions}
            domLayout="autoHeight"

          ></AgGridReact>
        </Spin>
      </div>
      <Space>
        <div className=''>
          <Modal
            title="Add user"
            centered={true}
            visible={isAddModalOpen}
            //  open={isAddModalOpen}
            onCancel={handleAddCancel}
            // onOk={handleAddOk}
            //  onCancel={handleAddCancel}
            footer={null}
          >
            <Form
            form={form}
              name="add Form"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
              style={{ overflow: "scroll", height: "300px" }}
              
            >

              <Form.Item
                label="First Name"
                name="fname"
                rules={[{ required: true, message: 'Please input your First Name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lname"
                rules={[{ required: true, message: 'Please input your Last Name!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="User Name"
                name="username"
                rules={[{ required: true, message: 'Please input your User Name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Passwrod"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button type="primary" onClick={handleAddCancel} danger className='ms-2'>
                  Cancel
                </Button>
              </Form.Item>
            </Form>
          </Modal>


          {/* Edit Open Model */}


          <Modal 
          title="Edit User"          
          visible={isEditModalOpen}
          onCancel={handleAddCancel}
          footer={null}
           >
            <Form
              name="Edit"
              onFinish={onEditFinish}
              onFinishFailed={onEditFinishFailed}
              autoComplete="off"
              layout="vertical"
              style={{ overflow: "scroll", height: "300px" }}
              form={form}
              initialValues={store.editBefore}
            >

              <Form.Item
                label="First Name"
                name="fname"
                
              >
                <Input 
                
                />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lname"
                
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="User Name"
                name="username"
                
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button type="primary" onClick={handleAddCancel} danger className='ms-2'>
                  Cancel
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </Space>
    </div>
  );
});

export default UserList;