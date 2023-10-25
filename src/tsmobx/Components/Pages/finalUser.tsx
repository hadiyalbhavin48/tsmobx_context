
// // ------------------------ User.tsx -------------------------------------------

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




// ---------------------------- Store.tsx ---------------------------------------



// import axios from 'axios'
// import { action, computed, makeObservable, observable } from 'mobx'
// import React from 'react'


// export interface IUser {
//   id: number;
//   fname: string;
//   lname: string;
//   avatar: string;
//   username: string;
//   email: string;

// }

// export interface IAttractions {
//   id: number,
//   name: string,
//   detail: string,
//   coverimage: string,
//   latitude: string,
//   longitude: string,
// }

// class Store {
//   isLogin = false;
//   userDetails: IUser[] = [];
//   attractionsDetails: IAttractions[] = []
//   editBefore: any = null;
//   addDetails: any = null;
//   editAttriBefore : any = null

  

//   constructor() {
//     makeObservable(this, {
//       isLogin: observable,
//       userDetails: observable,
//       attractionsDetails : observable,
//       getUserDetails: computed,
//       getAttractions: computed,
//       LoginUSer: action,
//       fetchUser: action,
//       addUserData: action,
//       deleteUser: action,
//       // setEditUser : action,
//       // setaddDetails : action,
//       updetUer: action,
//       addAttract : action,
//       editAttraction : action,
//       deleteAttractions : action,
//     })
//   }

//   // Login User
//   async LoginUSer(values: any) {
//     // console.log("values Store" , values);

//     try {
//       const LoginDetails = await axios.post("https://www.melivecode.com/api/login", values)
//       // console.log("LoginDetails" , LoginDetails);

//       const token = await LoginDetails.data.accessToken
//       // console.log("resData " , resData);

//       if (token) {
//         localStorage.setItem("tokens", token);
//         this.isLogin = true;
//         return true;
//       } else {
//         return false;
//       }

//       // return true
//     } catch (err) {
//       console.log("Login Error ", err);
//       return false

//     }

//   }


//   // Fetch User

//   async fetchUser() {

//     try {
//       const fetchUserData = await axios.get("https://www.melivecode.com/api/users")
//       // console.log("fetchUserData" ,fetchUserData.data)

//       const resUser = fetchUserData.data
//       console.log("resUser ", resUser);


//       this.userDetails = await fetchUserData.data
//     } catch (err) {
//       console.log("Error fetching user data", err);
//     }
//   }


//   async addUserData(value: any) {
//     console.log("add value ", value);
//     try {
//       // console.log("add user Store " , value);
//       const addUserData = await axios.post("https://www.melivecode.com/api/users/create", value)
//       // console.log("addUserData " , addUserData);
//       this.fetchUser()
//     } catch (err) {
//       console.log("Add User Error ", err);

//     }
//   }
//   // add Details store

  
//   async updetUer(user: any) {

//     try {
//       const updetUserData = await axios.put("https://www.melivecode.com/api/users/update", user)
//       // console.log("updetUserData " , updetUserData);
//       this.fetchUser();
//     } catch (err) {
//       console.log("Update Error ", err);

//     }
//   }


//   // Delete User

//   async deleteUser(user: any) {
//     // console.log("deleteStore" , user);

//     const deleteUserData = await axios.delete("https://www.melivecode.com/api/users/delete", {
//       data: { id: user }
//     })
//     this.fetchUser()
//   }

  
//   // -------------------------------- Attractions ------------------------

//   // ----------------------- Add Attractions ----------------------

//   async fetchgetAttractions() {
//     const attractData = await axios.get<IAttractions[]>("https://www.melivecode.com/api/attractions")
//     // console.log("attractData " , attractData.data);
//     const resAttrect = attractData.data
//     console.log("resAttrect ", resAttrect);

//     this.attractionsDetails = attractData.data
//     return this.attractionsDetails
//   }

//   async addAttract(values : any){
    
//     const token = localStorage.getItem("tokens")
//     // console.log("tokens " , token);
    
//     try{
//       const addAttractData = await axios.post("https://www.melivecode.com/api/auth/attractions/create" ,values, {
//         headers: {
//           Authorization : `Bearer ${token}`,
//         },
//       })
//       console.log("addAttractData " , addAttractData);
      
//     this.fetchgetAttractions();
//     }catch(err : any){
//       console.log("add Error " , err.message);
      
//     }
//   }

//   // edit


//   async editAttraction(editAttr : any){
//     try{
//       const token = localStorage.getItem("tokens")
//     // console.log("editAttr Store " , editAttr);
     
//     const editAttraData = await axios.put("https://www.melivecode.com/api/auth/attractions/update",editAttr,{
//       headers : {
//         Authorization : `Bearer ${token}`,
//       }
//     })
//     this.fetchgetAttractions(); 
//     }catch(err : any){
//       console.log("update Error " , err.message);
      
//     }
//   }

//   // Delete

//   async deleteAttractions(userId: number) {
//     console.log("Delete Store" , userId);
//     const token = localStorage.getItem("tokens");

//     try {
//       await axios.delete(
//         "https://www.melivecode.com/api/auth/attractions/delete",
//         {
//           data: {
//             id: userId,
//           },
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       this.fetchgetAttractions();
//     } catch (error) {
//       console.error("deleteattractions error", error);
//     }

//     this.fetchgetAttractions();
//   }


//   setEditAtt(data : any){
//     console.log("Edit befor " , data);
    
//      return this.editAttriBefore = data
//   }


  
//   get getAttractions() {
//     return this.attractionsDetails
//   }

//   get getUserDetails() {
//     return this.userDetails
//   }
   
//   setaddDetails(addData: any) {
//     // console.log("addData " , addData);
//     this.addDetails = addData
//   }

//   // Update User

//   setEditBefore(userData: any) {
//     this.editBefore = userData;
//   }

// }

// export default Store




// -----------------------------------------All warning Done ---------------------------------



// import axios from 'axios'
// import { action, computed, makeObservable, observable } from 'mobx'
// // import React from 'react'


// export interface IUser {
//   id: number;
//   fname: string;
//   lname: string;
//   avatar: string;
//   username: string;
//   email: string;

// }

// export interface IAttractions {
//   id: number,
//   name: string,
//   detail: string,
//   coverimage: string,
//   latitude: string,
//   longitude: string,
// }

// class Store {
//   isLogin = false;
//   userDetails: IUser[] = [];
//   attractionsDetails: IAttractions[] = []
//   editBefore: any = null;
//   addDetails: any = null;
//   editAttriBefore: any = null;
//   loginUserA: any = null;



//   constructor() {
//     makeObservable(this, {
//       isLogin: observable,
//       userDetails: observable,
//       attractionsDetails: observable,
//       getUserDetails: computed,
//       getAttractions: computed,
//       LoginUSer: action,
//       fetchUser: action,
//       addUserData: action,
//       deleteUser: action,
//       // setEditUser : action,
//       // setaddDetails : action,
//       updetUer: action,
//       addAttract: action,
//       editAttraction: action,
//       deleteAttractions: action,
//     })
//   }

//   // Login User
//   async LoginUSer(values: any) {
//     // console.log("values Store" , values);

//     try {
//       const LoginDetails = await axios.post("https://www.melivecode.com/api/login", values)
//       // console.log("LoginDetails" , LoginDetails.data.user.fname);

//       const isLoginUserData = LoginDetails.data.user.fname
//       this.setLoginUser(isLoginUserData)

//       console.log("isLoginUserData ", isLoginUserData);

//       const token = await LoginDetails.data.accessToken
//       // console.log("resData " , resData);

//       if (token) {
//         localStorage.setItem("tokens", token);
//         this.isLogin = true;
//         return true;
//       } else {
//         return false;
//       }

//       // return true
//     } catch (err) {
//       console.log("Login Error ", err);
//       return false

//     }

//   }


//   // Fetch User

//   async fetchUser() {

//     try {
//       const fetchUserData = await axios.get("https://www.melivecode.com/api/users")
//       // console.log("fetchUserData" ,fetchUserData.data)

//       const resUser = fetchUserData.data
//       console.log("resUser ", resUser);


//       this.userDetails = await fetchUserData.data
//     } catch (err) {
//       console.log("Error fetching user data", err);
//     }
//   }


//   async addUserData(value: any) {
//     console.log("add value ", value);
//     try {
//       // console.log("add user Store " , value);
//       // const addUserData = await axios.post("https://www.melivecode.com/api/users/create", value)
//       await axios.post("https://www.melivecode.com/api/users/create", value)
//       // console.log("addUserData " , addUserData);
//       this.fetchUser()
//     } catch (err) {
//       console.log("Add User Error ", err);

//     }
//   }
//   // add Details store


//   async updetUer(user: any) {

//     try {
//       // const updetUserData = await axios.put("https://www.melivecode.com/api/users/update", user)
//       await axios.put("https://www.melivecode.com/api/users/update", user)
//       // console.log("updetUserData " , updetUserData);
//       this.fetchUser();
//     } catch (err) {
//       console.log("Update Error ", err);

//     }
//   }


//   // Delete User

//   async deleteUser(user: any) {
//     // console.log("deleteStore" , user);

//     // const deleteUserData = await axios.delete("https://www.melivecode.com/api/users/delete", {
//     //   data: { id: user }
//     // })

//     await axios.delete("https://www.melivecode.com/api/users/delete", {
//       data: { id: user }
//     })
//     this.fetchUser()
//   }


//   // -------------------------------- Attractions ------------------------

//   // ----------------------- Add Attractions ----------------------

//   async fetchgetAttractions() {
//     const attractData = await axios.get<IAttractions[]>("https://www.melivecode.com/api/attractions")
//     // console.log("attractData " , attractData.data);
//     const resAttrect = attractData.data
//     console.log("resAttrect ", resAttrect);

//     this.attractionsDetails = attractData.data
//     return this.attractionsDetails
//   }

//   async addAttract(values: any) {

//     const token = localStorage.getItem("tokens")
//     // console.log("tokens " , token);

//     try {
//       const addAttractData = await axios.post("https://www.melivecode.com/api/auth/attractions/create", values, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       console.log("addAttractData ", addAttractData);

//       this.fetchgetAttractions();
//     } catch (err: any) {
//       console.log("add Error ", err.message);

//     }
//   }

//   // edit


//   async editAttraction(editAttr: any) {
//     try {
//       const token = localStorage.getItem("tokens")
//       // console.log("editAttr Store " , editAttr);

//       // const editAttraData = await axios.put("https://www.melivecode.com/api/auth/attractions/update", editAttr, {
//       //   headers: {
//       //     Authorization: `Bearer ${token}`,
//       //   }
//       // })

//       await axios.put("https://www.melivecode.com/api/auth/attractions/update", editAttr, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         }
//       })
//       this.fetchgetAttractions();
//     } catch (err: any) {
//       console.log("update Error ", err.message);

//     }
//   }

//   // Delete

//   async deleteAttractions(userId: number) {
//     console.log("Delete Store", userId);
//     const token = localStorage.getItem("tokens");

//     try {
//       await axios.delete(
//         "https://www.melivecode.com/api/auth/attractions/delete",
//         {
//           data: {
//             id: userId,
//           },
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       this.fetchgetAttractions();
//     } catch (error) {
//       console.error("deleteattractions error", error);
//     }

//     this.fetchgetAttractions();
//   }


//   setEditAtt(data: any) {
//     // console.log("Edit befor ", data);
//     return this.editAttriBefore = data
//   }


//   setLoginUser(loginDa: any) {
//     return this.loginUserA = loginDa
//   }

//   setaddDetails(addData: any) {
//     console.log("addData Store" , addData);
//     return this.addDetails = addData
//   }

//   // Update User

//   setEditBefore(userData: any) {
//     console.log("Edit befor " , userData);
//     return this.editBefore = userData;
//   }


//   get getAttractions() {
//     return this.attractionsDetails
//   }

//   get getUserDetails() {
//     return this.userDetails
//   }

// }

// export default Store




// --------------- UserList.tsx --------------



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

