
// ----------------------------- Attration.tsx ------------------------------


// import React, { useEffect, useState } from 'react'
// import { useStore } from '../../Hooks/useStore'
// import { observer } from 'mobx-react-lite';
// import { Button, Layout, Spin, Modal, Space, Form, Input } from 'antd';
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { AgGridReact } from 'ag-grid-react';
// import { IAttractions } from '../../Store/Store';

// const { Header } = Layout
// const Attractions = observer(() => {

//   const { indexStore: { store } } = useStore();



//   const [loader, setLoader] = useState(true)

//   const [attractionData , setAttractionData] = useState<IAttractions[]>([])

//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [form] = Form.useForm();
//   const formRef = React.useRef(form);
//   // Columns
//   const columnDefs : any = [
//     {
//       headerName: "id", field: "id", filter: "agTextColumnFilter", width: 100
//     },
//     {
//       headerName: "coverimage",
//       cellRenderer: (param: any) => {
//         const imgUrl = param.data.coverimage
//         //  console.log("imgUrl " , imgUrl);
//         return (
//           <img src={imgUrl} alt='image not found attrection' style={{ width: "30%" }} />
//         )
//       }
//     },

//     { headerName: "Name", field: "name", filter: "agTextColumnFilter" },
//     {
//       headerName: "Details",
//       field: "detail",
//       width: 350,
//       filter: "agTextColumnFilter",
//       wrapText: true,
//     },

//     {
//       headerName: "Action",
//       cellRenderer: (param: any) => {
//         return (
//           <>
//             <Button
//               type='primary'
//               onClick={() => editAttri(param.data)}
//               className='me-2'
//             >Edit</Button>
//             <Button
//               type='primary'
//               onClick={() => deleteRecord(param.data)}
//               danger
//             >Delete</Button>
//           </>
//         )
//       },
//       suppressSorting: true,
//       suppressMenu: true,
//     }
//   ]

//   // Sort

//   const defaultColDef = {
//     sortable: true,
//     filter: true,      // floatingFilter: true,
//     floatingFilter: true,
//   }

//   // Pagination

//   const gridOptions = {
//     rowHeight: 70,
//     pagination: true,
//     paginationPageSize: 5,

//   }

//   // Add Open Model

//   const showAddModal = () => {
//     setIsAddModalOpen(true);
//   };

//   const handleCancel = () => {
//     setIsAddModalOpen(false);
//     setIsEditModalOpen(false)
//     formRef.current.resetFields()
//   };

//   // add Attrect

//   // const onAddFinish = (values: any) => {
//   //   // console.log("Add success ", values);

//   //   const userDetialAll = {
//   //     id : values.id,
//   //     name : values.name,
//   //     detail : values.detail,
//   //     coverimage : "https://www.melivecode.com/attractions/11.jpg",
//   //     latitude : "10.50",
//   //     longitude : "10.50",
//   //   }
//   //    store.addAttract(userDetialAll).then(() => {
//   //     setAttractionData(store.getAttractions);
//   //     handleCancel();
//   //   })

//   //    handleCancel();
//   // }


//   const onAddFinish = async (values : any) => {
//     try {
//       const userDetailAll = {
//         id: values.id,
//         name: values.name,
//         detail: values.detail,
//         coverimage: "https://www.melivecode.com/attractions/11.jpg",
//         latitude: "10.50",
//         longitude: "10.50",
//       };
  
//       await store.addAttract(userDetailAll);
  
//       const updatedData: IAttractions[] = await store.fetchgetAttractions();
  
//       setAttractionData(updatedData);
//       handleCancel();
//     } catch (error) {
//       console.error('Add Attraction Error', error);
//     }
//   };

//   const onAddFinishFailed = (errInfo: any) => {
//     console.log("add Error ", errInfo)
//   }


//   //  Edit 

//   const showEditModal = () => {
//     setIsEditModalOpen(true);
//   };

//   const editAttri = (editData : any) =>{
//     console.log("editData " , editData);

//     store.setEditAtt(editData)
//     showEditModal();
//     // store.editAttraction(editData)
//   }

//   const onEditFinish = (values : any) =>{
//     //  console.log("Success Edit " , values);

//      const editAll = {
//       ...values,
//         id : store.editAttriBefore.id,
//         coverimage : store.editAttriBefore.coverimage,
//         latitude : store.editAttriBefore.latitude,
//         longitude : store.editAttriBefore.longitude,
//      }

//      store.editAttraction(editAll);

//      formRef.current.resetFields();
//      handleCancel();

//   }

//   const onEditFinishFailed = (errorInfo : any) =>{
//     console.log("Edit Error " , errorInfo);

//   }

//   // // Delete

//   const deleteRecord = (recordData : any) =>{
//       console.log("delete id " , recordData.id);

//       store.deleteAttractions(recordData.id)

//   }

//   // useEffect(() => {
//   //   store.fetchgetAttractions()
//   //     .then(() => {  
//   //       setAttractionData(store.getAttractions)
//   //       setLoader(false)
//   //     })
//   // }, [loader,store])


//   useEffect(() => {
//     store.fetchgetAttractions()
//       .then(() => {
//         setAttractionData(store.getAttractions);
//         setLoader(false);
//       });
//   }, [loader]);


//   return (
//     <>
//       <Header style={{ color: "white", fontWeight: "bold", width: "100%" }} className='ms-2'>Attractions/Places</Header>

//       <div className='mt-2 ms-2' >
//         <Button
//           type="primary" onClick={showAddModal}
//           style={{ float: "left" }}
//         >
//           Add
//         </Button>
//       </div>
//       <div className="ag-theme-alpine mt-3 ms-2" style={{ textAlign: "left" }}>
//         <Spin spinning={loader} tip="Loading...">
//           <AgGridReact rowData={store.getAttractions}
//             columnDefs={columnDefs}
//             defaultColDef={defaultColDef}
//             gridOptions={gridOptions}
//             domLayout="autoHeight"
//           ></AgGridReact>
//         </Spin>

//         {/* Model */}

//         <Modal title="Add Attractions/Places"
//           // open={isAddModalOpen} 

//           centered={true}
//           visible={isAddModalOpen}
//           onCancel={handleCancel}
//           footer={null}
//         >
//           <Form
//             form={form}
//             name="Add attract"
//             onFinish={onAddFinish}
//             onFinishFailed={onAddFinishFailed}
//             autoComplete="off"
//             layout="vertical"
//             style={{ overflow: "scroll", height: "300px" }}
//           >
//             <Form.Item
//               label="Name"
//               name="name"
//               rules={[{ required: true, message: 'Please input your Name!' }]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item
//               label="Details"
//               name="detail"
//               rules={[{ required: true, message: 'Please input your Details!' }]}
//             >
//               <Input />
//             </Form.Item>


//             <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//                 <Button type="primary" onClick={handleCancel} danger className='ms-2'>
//                   Cancel
//                 </Button>
//               </Form.Item>
//           </Form>
//         </Modal>

//      {/* edit */}
//         <Modal title="Edit Modal" 
//         // open={isEditModalOpen} 
//         visible = {isEditModalOpen}
//          onCancel={handleCancel}
//          footer = {null}
//          >
//            <Form
//             form={form}
//             name="Edit attract"
//             onFinish={onEditFinish}
//             onFinishFailed={onEditFinishFailed}
//             initialValues={store.editAttriBefore}
//             autoComplete="off"
//             layout="vertical"
//             style={{ overflow: "scroll", height: "300px" }}
//           >
//             <Form.Item
//               label="Name"
//               name="name"
//               rules={[{ required: true, message: 'Please input your Name!' }]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item
//               label="Details"
//               name="detail"
//               rules={[{ required: true, message: 'Please input your Details!' }]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//                 <Button type="primary" onClick={handleCancel} danger className='ms-2'>
//                   Cancel
//                 </Button>
//               </Form.Item>

//           </Form>
//       </Modal>
//       </div>
//     </>
//   )
// })

// export default Attractions





// -------------------------------------------- Store.tsx -------------------



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






// // -------------------------------------------------------------  All Warning Done ------------------

// import React, { useEffect, useState } from 'react'
// import { useStore } from '../../Hooks/useStore'
// import { observer } from 'mobx-react-lite';
// import { Button, Layout, Spin, Modal, Form, Input } from 'antd';
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { AgGridReact } from 'ag-grid-react';
// // import { IAttractions } from '../../Store/Store';

// const { Header } = Layout
// const Attractions = observer(() => {

//   const { indexStore: { store } } = useStore();



//   const [loader, setLoader] = useState(true)

//   // const [attractionData , setAttractionData] = useState<IAttractions[]>([])

//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [form] = Form.useForm();
//   const formRef = React.useRef(form);
//   // Columns
//   const columnDefs : any = [
//     {
//       headerName: "id", field: "id", filter: "agTextColumnFilter", width: 100
//     },
//     {
//       headerName: "coverimage",
//       cellRenderer: (param: any) => {
//         const imgUrl = param.data.coverimage
//         //  console.log("imgUrl " , imgUrl);
//         return (
//           <img src={imgUrl} alt='' style={{ width: "30%" }} />
//         )
//       }
//     },

//     { headerName: "Name", field: "name", filter: "agTextColumnFilter" },
//     {
//       headerName: "Details",
//       field: "detail",
//       width: 350,
//       filter: "agTextColumnFilter",
//       wrapText: true,
//     },

//     {
//       headerName: "Action",
//       cellRenderer: (param: any) => {
//         return (
//           <>
//             <Button
//               type='primary'
//               onClick={() => editAttri(param.data)}
//               className='me-2'
//             >Edit</Button>
//             <Button
//               type='primary'
//               onClick={() => deleteRecord(param.data)}
//               danger
//             >Delete</Button>
//           </>
//         )
//       },
//       suppressSorting: true,
//       suppressMenu: true,
//     }
//   ]

//   // Sort

//   const defaultColDef = {
//     sortable: true,
//     filter: true,      // floatingFilter: true,
//     floatingFilter: true,
//   }

//   // Pagination

//   const gridOptions = {
//     rowHeight: 70,
//     pagination: true,
//     paginationPageSize: 5,

//   }

//   // Add Open Model

//   const showAddModal = () => {
//     setIsAddModalOpen(true);
//   };

//   const handleCancel = () => {
//     setIsAddModalOpen(false);
//     setIsEditModalOpen(false)
//     formRef.current.resetFields()
//   };

//   // add Attrect

//   // const onAddFinish = (values: any) => {
//   //   // console.log("Add success ", values);

//   //   const userDetialAll = {
//   //     id : values.id,
//   //     name : values.name,
//   //     detail : values.detail,
//   //     coverimage : "https://www.melivecode.com/attractions/11.jpg",
//   //     latitude : "10.50",
//   //     longitude : "10.50",
//   //   }
//   //    store.addAttract(userDetialAll).then(() => {
//   //     setAttractionData(store.getAttractions);
//   //     handleCancel();
//   //   })

//   //    handleCancel();
//   // }


//   const onAddFinish = async (values : any) => {
//     try {
//       const userDetailAll = {
//         id: values.id,
//         name: values.name,
//         detail: values.detail,
//         coverimage: "https://www.melivecode.com/attractions/11.jpg",
//         latitude: "10.50",
//         longitude: "10.50",
//       };
  
//       await store.addAttract(userDetailAll);
  
//       // const updatedData: IAttractions[] = await store.fetchgetAttractions();
  
//       // setAttractionData(updatedData);
//       handleCancel();
//     } catch (error) {
//       console.error('Add Attraction Error', error);
//     }
//   };

//   const onAddFinishFailed = (errInfo: any) => {
//     console.log("add Error ", errInfo)
//   }


//   //  Edit 

//   const showEditModal = () => {
//     setIsEditModalOpen(true);
//   };

//   const editAttri = (editData : any) =>{
//     console.log("editData " , editData);
//     store.setEditAtt(editData)
//     showEditModal();
//     // store.editAttraction(editData)
//   }

//   const onEditFinish = (values : any) =>{
//     //  console.log("Success Edit " , values);

//      const editAll = {
//       ...values,
//         id : store.editAttriBefore.id,
//         coverimage : store.editAttriBefore.coverimage,
//         latitude : store.editAttriBefore.latitude,
//         longitude : store.editAttriBefore.longitude,
//      }

//      store.editAttraction(editAll);

//      formRef.current.resetFields();
//      handleCancel();

//   }

//   const onEditFinishFailed = (errorInfo : any) =>{
//     console.log("Edit Error " , errorInfo);

//   }

//   // // Delete

//   const deleteRecord = (recordData : any) =>{
//       console.log("delete id " , recordData.id);

//       store.deleteAttractions(recordData.id)

//   }

//   // useEffect(() => {
//   //   store.fetchgetAttractions()
//   //     .then(() => {  
//   //       setAttractionData(store.getAttractions)
//   //       setLoader(false)
//   //     })
//   // }, [loader,store])


//   useEffect(() => {
//     store.fetchgetAttractions()
//       .then(() => {
//         // setAttractionData(store.getAttractions);
//         setLoader(false);
//       });
//   }, [loader , store]);


//   return (
//     <>
//       <Header style={{ color: "white", fontWeight: "bold", width: "100%" }} className='ms-2'>Attractions/Places</Header>

//       <div className='mt-2 ms-2' >
//         <Button
//           type="primary" onClick={showAddModal}
//           style={{ float: "left" }}
//         >
//           Add
//         </Button>
//       </div>
//       <div className="ag-theme-alpine mt-3 ms-2" style={{ textAlign: "left" }}>
//         <Spin spinning={loader} tip="Loading...">
//           <AgGridReact rowData={store.getAttractions}
//             columnDefs={columnDefs}
//             defaultColDef={defaultColDef}
//             gridOptions={gridOptions}
//             domLayout="autoHeight"
//           ></AgGridReact>
//         </Spin>

//         {/* Model */}

//         <Modal title="Add Attractions/Places"
//           // open={isAddModalOpen} 

//           centered={true}
//           visible={isAddModalOpen}
//           onCancel={handleCancel}
//           footer={null}
//         >
//           <Form
//             form={form}
//             name="Add attract"
//             onFinish={onAddFinish}
//             onFinishFailed={onAddFinishFailed}
//             autoComplete="off"
//             layout="vertical"
//             style={{ overflow: "scroll", height: "300px" }}
//           >
//             <Form.Item
//               label="Name"
//               name="name"
//               rules={[{ required: true, message: 'Please input your Name!' }]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item
//               label="Details"
//               name="detail"
//               rules={[{ required: true, message: 'Please input your Details!' }]}
//             >
//               <Input />
//             </Form.Item>


//             <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//                 <Button type="primary" onClick={handleCancel} danger className='ms-2'>
//                   Cancel
//                 </Button>
//               </Form.Item>
//           </Form>
//         </Modal>

//      {/* edit */}
//         <Modal title="Edit Modal" 
//         // open={isEditModalOpen} 
//         visible = {isEditModalOpen}
//          onCancel={handleCancel}
//          footer = {null}
//          >
//            <Form
//             form={form}
//             name="Edit attract"
//             onFinish={onEditFinish}
//             onFinishFailed={onEditFinishFailed}
//             initialValues={store.editAttriBefore}
//             autoComplete="off"
//             layout="vertical"
//             style={{ overflow: "scroll", height: "300px" }}
//           >
//             <Form.Item
//               label="Name"
//               name="name"
//               rules={[{ required: true, message: 'Please input your Name!' }]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item
//               label="Details"
//               name="detail"
//               rules={[{ required: true, message: 'Please input your Details!' }]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//                 <Button type="primary" onClick={handleCancel} danger className='ms-2'>
//                   Cancel
//                 </Button>
//               </Form.Item>

//           </Form>
//       </Modal>
//       </div>
//     </>
//   )
// })

// export default Attractions




// --------------- Store.tsx -----------------------


// ---------------------------------------------------------------


import axios from 'axios'
import { action, computed, makeObservable, observable } from 'mobx'
// import React from 'react'


export interface IUser {
  id: number;
  fname: string;
  lname: string;
  avatar: string;
  username: string;
  email: string;

}

export interface IAttractions {
  id: number,
  name: string,
  detail: string,
  coverimage: string,
  latitude: string,
  longitude: string,
}

class Store {
  isLogin = false;
  userDetails: IUser[] = [];
  attractionsDetails: IAttractions[] = []
  editBefore: any = null;
  addDetails: any = null;
  editAttriBefore: any = null;
  loginUserA: any = null;



  constructor() {
    makeObservable(this, {
      isLogin: observable,
      userDetails: observable,
      attractionsDetails: observable,
      getUserDetails: computed,
      getAttractions: computed,
      LoginUSer: action,
      fetchUser: action,
      addUserData: action,
      deleteUser: action,
      // setEditUser : action,
      // setaddDetails : action,
      updetUer: action,
      addAttract: action,
      editAttraction: action,
      deleteAttractions: action,
    })
  }

  // Login User
  async LoginUSer(values: any) {
    // console.log("values Store" , values);

    try {
      const LoginDetails = await axios.post("https://www.melivecode.com/api/login", values)
      // console.log("LoginDetails" , LoginDetails.data.user.fname);

      const isLoginUserData = LoginDetails.data.user.fname
      this.setLoginUser(isLoginUserData)

      console.log("isLoginUserData ", isLoginUserData);

      const token = await LoginDetails.data.accessToken
      // console.log("resData " , resData);

      if (token) {
        localStorage.setItem("tokens", token);
        this.isLogin = true;
        return true;
      } else {
        return false;
      }

      // return true
    } catch (err) {
      console.log("Login Error ", err);
      return false

    }

  }


  // Fetch User

  async fetchUser() {

    try {
      const fetchUserData = await axios.get("https://www.melivecode.com/api/users")
      // console.log("fetchUserData" ,fetchUserData.data)

      const resUser = fetchUserData.data
      console.log("resUser ", resUser);


      this.userDetails = await fetchUserData.data
    } catch (err) {
      console.log("Error fetching user data", err);
    }
  }


  async addUserData(value: any) {
    console.log("add value ", value);
    try {
      // console.log("add user Store " , value);
      // const addUserData = await axios.post("https://www.melivecode.com/api/users/create", value)
      await axios.post("https://www.melivecode.com/api/users/create", value)
      // console.log("addUserData " , addUserData);
      this.fetchUser()
    } catch (err) {
      console.log("Add User Error ", err);

    }
  }
  // add Details store


  async updetUer(user: any) {

    try {
      // const updetUserData = await axios.put("https://www.melivecode.com/api/users/update", user)
      await axios.put("https://www.melivecode.com/api/users/update", user)
      // console.log("updetUserData " , updetUserData);
      this.fetchUser();
    } catch (err) {
      console.log("Update Error ", err);

    }
  }


  // Delete User

  async deleteUser(user: any) {
    // console.log("deleteStore" , user);

    // const deleteUserData = await axios.delete("https://www.melivecode.com/api/users/delete", {
    //   data: { id: user }
    // })

    await axios.delete("https://www.melivecode.com/api/users/delete", {
      data: { id: user }
    })
    this.fetchUser()
  }


  // -------------------------------- Attractions ------------------------

  // ----------------------- Add Attractions ----------------------

  async fetchgetAttractions() {
    const attractData = await axios.get<IAttractions[]>("https://www.melivecode.com/api/attractions")
    // console.log("attractData " , attractData.data);
    const resAttrect = attractData.data
    console.log("resAttrect ", resAttrect);

    this.attractionsDetails = attractData.data
    return this.attractionsDetails
  }

  async addAttract(values: any) {

    const token = localStorage.getItem("tokens")
    // console.log("tokens " , token);

    try {
      const addAttractData = await axios.post("https://www.melivecode.com/api/auth/attractions/create", values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log("addAttractData ", addAttractData);

      this.fetchgetAttractions();
    } catch (err: any) {
      console.log("add Error ", err.message);

    }
  }

  // edit


  async editAttraction(editAttr: any) {
    try {
      const token = localStorage.getItem("tokens")
      // console.log("editAttr Store " , editAttr);

      // const editAttraData = await axios.put("https://www.melivecode.com/api/auth/attractions/update", editAttr, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   }
      // })

      await axios.put("https://www.melivecode.com/api/auth/attractions/update", editAttr, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      this.fetchgetAttractions();
    } catch (err: any) {
      console.log("update Error ", err.message);

    }
  }

  // Delete

  async deleteAttractions(userId: number) {
    console.log("Delete Store", userId);
    const token = localStorage.getItem("tokens");

    try {
      await axios.delete(
        "https://www.melivecode.com/api/auth/attractions/delete",
        {
          data: {
            id: userId,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      this.fetchgetAttractions();
    } catch (error) {
      console.error("deleteattractions error", error);
    }

    this.fetchgetAttractions();
  }


  setEditAtt(data: any) {
    // console.log("Edit befor ", data);
    return this.editAttriBefore = data
  }


  setLoginUser(loginDa: any) {
    return this.loginUserA = loginDa
  }

  setaddDetails(addData: any) {
    console.log("addData Store" , addData);
    return this.addDetails = addData
  }

  // Update User

  setEditBefore(userData: any) {
    console.log("Edit befor " , userData);
    return this.editBefore = userData;
  }


  get getAttractions() {
    return this.attractionsDetails
  }

  get getUserDetails() {
    return this.userDetails
  }

}

export default Store

