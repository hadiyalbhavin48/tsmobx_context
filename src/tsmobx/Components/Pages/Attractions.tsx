// import React, { useEffect, useState } from 'react'
// import { useStore } from '../../Hooks/useStore'
// import { observer } from 'mobx-react-lite';
// import { Button, Layout, Spin, Modal, Space, Form, Input } from 'antd';
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { AgGridReact } from 'ag-grid-react';

// const { Header } = Layout
// const Attractions = observer(() => {

//   const { indexStore: { store } } = useStore();

//   const [form] = Form.useForm();
//   const formRef = React.useRef(form);

//   const [loader, setLoader] = useState(true)

//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);

//   // Columns
//   const columnDefs: any = [
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
//     {
//       headerName: "latitude", field: "latitude", filter: "agTextColumnFilter"
//     },
//     {
//       headerName: "longitude", field: "longitude", filter: "agTextColumnFilter"
//     },
//     {
//       headerName: "Action",
//       cellRenderer: (param: any) => {
//         return (
//           <>
//             <Button
//               type='primary'
//               className='me-2'
//             >Edit</Button>
//             <Button
//               type='primary'
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
//     filter: true,
//     FloatingFilter: true,
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
//     formRef.current.resetFields()
//   };

//   // add Attrect

//   const onAddFinish = (values: any) => {
//     console.log("Add success ", values);
//      store.addAttract(values);

//      handleCancel();
//   }

//   const onAddFinishFailed = (errInfo: any) => {
//     console.log("add Error ", errInfo)
//   }

//   useEffect(() => {
//     store.fetchgetAttractions()
//       .then(() => {
//         setLoader(false)
//       })
//   }, [loader])
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
//               label=":Latitude"
//               name="latitude"
//               rules={[{ required: true, message: 'Please input your Latitude!' }]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item
//               label="Longitude"
//               name="longitude"
//               rules={[{ required: true, message: 'Please input your Longitude!' }]}
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
//       </div>
//     </>
//   )
// })

// export default Attractions


// ----------------- Add ------------------------


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

//   const [form] = Form.useForm();
//   const formRef = React.useRef(form);

//   const [loader, setLoader] = useState(true)

//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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
//     // { headerName: "latitude", field: "latitude", filter: "agTextColumnFilter" },
//     // {
//     //   headerName: "Longitude", field: "longitude", filter: "agTextColumnFilter"
//     // },
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
//     filter: true,
//     FloatingFilter: true,
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
//     formRef.current.resetFields()
//   };

//   // add Attrect

//   const onAddFinish = (values: any) => {
//     console.log("Add success ", values);

//     const userDetialAll = {
//       id : values.id,
//       name : values.name,
//       detail : values.detail,
//       coverimage : "https://www.melivecode.com/attractions/11.jpg",
//       latitude : "10.50",
//       longitude : "10.50",
//     }
//      store.addAttract(userDetialAll);

//      handleCancel();
//   }

//   const onAddFinishFailed = (errInfo: any) => {
//     console.log("add Error ", errInfo)
//   }


//   //  Edit 

//   const editAttri = (editData : any) =>{
//     console.log("editData " , editData);
//     store.editAttraction(editData)
//   }

//   useEffect(() => {
//     store.fetchgetAttractions()
//       .then(() => {
//         setLoader(false)
//       })
//   }, [loader])
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
//       </div>
//     </>
//   )
// })

// export default Attractions



// //  -------------------------- Add , Edit Done--------------------------------



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

//   const [form] = Form.useForm();
//   const formRef = React.useRef(form);

//   const [loader, setLoader] = useState(true)

//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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
//     filter: true,
//     FloatingFilter: true,
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

//   const onAddFinish = (values: any) => {
//     console.log("Add success ", values);

//     const userDetialAll = {
//       id : values.id,
//       name : values.name,
//       detail : values.detail,
//       coverimage : "https://www.melivecode.com/attractions/11.jpg",
//       latitude : "10.50",
//       longitude : "10.50",
//     }
//      store.addAttract(userDetialAll);

//      handleCancel();
//   }

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

//   useEffect(() => {
//     store.fetchgetAttractions()
//       .then(() => {
//         setLoader(false)
//       })
//   }, [loader])
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







// //  -------------------------- Attraction add , Edit delete Done --------------------------------



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

//   const [form] = Form.useForm();
//   const formRef = React.useRef(form);

//   const [loader, setLoader] = useState(true)

//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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

//   const onAddFinish = (values: any) => {
//     console.log("Add success ", values);

//     const userDetialAll = {
//       id : values.id,
//       name : values.name,
//       detail : values.detail,
//       coverimage : "https://www.melivecode.com/attractions/11.jpg",
//       latitude : "10.50",
//       longitude : "10.50",
//     }
//      store.addAttract(userDetialAll);

//      handleCancel();
//   }

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

//   // Delete

//   const deleteRecord = (recordData : any) =>{
//       // console.log("delete id " , recordData.id);

//       store.deleteAttractions(recordData.id)

//   }

//   useEffect(() => {
//     store.fetchgetAttractions()
//       .then(() => {
//         setLoader(false)
//       })
//   }, [loader])
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





//  -------------------------- All Done --------------------------------



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

//   const onAddFinish = (values: any) => {
//     console.log("Add success ", values);

//     const userDetialAll = {
//       id : values.id,
//       name : values.name,
//       detail : values.detail,
//       coverimage : "https://www.melivecode.com/attractions/11.jpg",
//       latitude : "10.50",
//       longitude : "10.50",
//     }
//      store.addAttract(userDetialAll);

//      handleCancel();
//   }

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

//   // Delete

//   const deleteRecord = (recordData : any) =>{
//       console.log("delete id " , recordData.id);

//       store.deleteAttractions(recordData.id)

//   }

//   useEffect(() => {
//     store.fetchgetAttractions()
//       .then(() => {
//         setLoader(false)
//         setAttractionData(store.getAttractions)
//       })
//   }, [loader])
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
//           <AgGridReact rowData={attractionData}
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




// // ------------------------------------------------------------- Final Done ------------------

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


// ------------------------------------------------




// -------------------------------------------------------------------------------

import React, { useEffect, useState } from 'react'
import { useStore } from '../../Hooks/useStore'
import { observer } from 'mobx-react-lite';
import { Button, Layout, Spin, Modal, Form, Input } from 'antd';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from 'ag-grid-react';
// import { IAttractions } from '../../Store/Store';

const { Header } = Layout
const Attractions = observer(() => {

  const { indexStore: { store } } = useStore();



  const [loader, setLoader] = useState(true)

  // const [attractionData , setAttractionData] = useState<IAttractions[]>([])

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [form] = Form.useForm();
  const formRef = React.useRef(form);
  // Columns
  const columnDefs : any = [
    {
      headerName: "id", field: "id", filter: "agTextColumnFilter", width: 100
    },
    {
      headerName: "coverimage",
      cellRenderer: (param: any) => {
        const imgUrl = param.data.coverimage
        //  console.log("imgUrl " , imgUrl);
        return (
          <img src={imgUrl} alt='' style={{ width: "30%" }} />
        )
      }
    },

    { headerName: "Name", field: "name", filter: "agTextColumnFilter" },
    {
      headerName: "Details",
      field: "detail",
      width: 350,
      filter: "agTextColumnFilter",
      wrapText: true,
    },

    {
      headerName: "Action",
      cellRenderer: (param: any) => {
        return (
          <>
            <Button
              type='primary'
              onClick={() => editAttri(param.data)}
              className='me-2'
            >Edit</Button>
            <Button
              type='primary'
              onClick={() => deleteRecord(param.data)}
              danger
            >Delete</Button>
          </>
        )
      },
      suppressSorting: true,
      suppressMenu: true,
    }
  ]

  // Sort

  const defaultColDef = {
    sortable: true,
    filter: true,      // floatingFilter: true,
    floatingFilter: true,
  }

  // Pagination

  const gridOptions = {
    rowHeight: 70,
    pagination: true,
    paginationPageSize: 5,

  }

  // Add Open Model

  const showAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCancel = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false)
    formRef.current.resetFields()
  };

  // add Attrect

  // const onAddFinish = (values: any) => {
  //   // console.log("Add success ", values);

  //   const userDetialAll = {
  //     id : values.id,
  //     name : values.name,
  //     detail : values.detail,
  //     coverimage : "https://www.melivecode.com/attractions/11.jpg",
  //     latitude : "10.50",
  //     longitude : "10.50",
  //   }
  //    store.addAttract(userDetialAll).then(() => {
  //     setAttractionData(store.getAttractions);
  //     handleCancel();
  //   })

  //    handleCancel();
  // }


  const onAddFinish = async (values : any) => {
    try {
      const userDetailAll = {
        id: values.id,
        name: values.name,
        detail: values.detail,
        coverimage: "https://www.melivecode.com/attractions/11.jpg",
        latitude: "10.50",
        longitude: "10.50",
      };
  
      await store.addAttract(userDetailAll);
  
      // const updatedData: IAttractions[] = await store.fetchgetAttractions();
  
      // setAttractionData(updatedData);
      handleCancel();
    } catch (error) {
      console.error('Add Attraction Error', error);
    }
  };

  const onAddFinishFailed = (errInfo: any) => {
    console.log("add Error ", errInfo)
  }


  //  Edit 

  const showEditModal = () => {
    setIsEditModalOpen(true);
  };

  const editAttri = (editData : any) =>{
    console.log("editData " , editData);
    store.setEditAtt(editData)
    showEditModal();
    // store.editAttraction(editData)
  }

  const onEditFinish = (values : any) =>{
    //  console.log("Success Edit " , values);

     const editAll = {
      ...values,
        id : store.editAttriBefore.id,
        coverimage : store.editAttriBefore.coverimage,
        latitude : store.editAttriBefore.latitude,
        longitude : store.editAttriBefore.longitude,
     }

     store.editAttraction(editAll);

     formRef.current.resetFields();
     handleCancel();

  }

  const onEditFinishFailed = (errorInfo : any) =>{
    console.log("Edit Error " , errorInfo);

  }

  // // Delete

  const deleteRecord = (recordData : any) =>{
      console.log("delete id " , recordData.id);

      store.deleteAttractions(recordData.id)

  }

  // useEffect(() => {
  //   store.fetchgetAttractions()
  //     .then(() => {  
  //       setAttractionData(store.getAttractions)
  //       setLoader(false)
  //     })
  // }, [loader,store])


  useEffect(() => {
    store.fetchgetAttractions()
      .then(() => {
        // setAttractionData(store.getAttractions);
        setLoader(false);
      });
  }, [loader , store]);


  return (
    <>
      <Header style={{ color: "white", fontWeight: "bold", width: "100%" }} className='ms-2'>Attractions/Places</Header>

      <div className='mt-2 ms-2' >
        <Button
          type="primary" onClick={showAddModal}
          style={{ float: "left" }}
        >
          Add
        </Button>
      </div>
      <div className="ag-theme-alpine mt-3 ms-2" style={{ textAlign: "left" }}>
        <Spin spinning={loader} tip="Loading...">
          <AgGridReact rowData={store.getAttractions}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            gridOptions={gridOptions}
            domLayout="autoHeight"
          ></AgGridReact>
        </Spin>

        {/* Model */}

        <Modal title="Add Attractions/Places"
          // open={isAddModalOpen} 

          centered={true}
          visible={isAddModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <Form
            form={form}
            name="Add attract"
            onFinish={onAddFinish}
            onFinishFailed={onAddFinishFailed}
            autoComplete="off"
            layout="vertical"
            style={{ overflow: "scroll", height: "300px" }}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Details"
              name="detail"
              rules={[{ required: true, message: 'Please input your Details!' }]}
            >
              <Input />
            </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button type="primary" onClick={handleCancel} danger className='ms-2'>
                  Cancel
                </Button>
              </Form.Item>
          </Form>
        </Modal>

     {/* edit */}
        <Modal title="Edit Modal" 
        // open={isEditModalOpen} 
        visible = {isEditModalOpen}
         onCancel={handleCancel}
         footer = {null}
         >
           <Form
            form={form}
            name="Edit attract"
            onFinish={onEditFinish}
            onFinishFailed={onEditFinishFailed}
            initialValues={store.editAttriBefore}
            autoComplete="off"
            layout="vertical"
            style={{ overflow: "scroll", height: "300px" }}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Details"
              name="detail"
              rules={[{ required: true, message: 'Please input your Details!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button type="primary" onClick={handleCancel} danger className='ms-2'>
                  Cancel
                </Button>
              </Form.Item>

          </Form>
      </Modal>
      </div>
    </>
  )
})

export default Attractions

