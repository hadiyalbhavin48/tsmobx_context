// import React, { useState } from 'react'
// import { Col, Row, Layout, Button, Form, Input, Alert } from 'antd';
// import { values } from 'mobx';
// import Store from '../../Store/Store';
// import { useNavigate } from 'react-router-dom';
// import { useStore } from '../../Hooks/useStore';
// const { Header, Content, Footer } = Layout;

// interface LoginProps{
//   onLogin : () => void
// }
// const Login = () => {

//   const {indexStore : {store} } = useStore()

//   const [loginSuccess, setLoginSuccess] = useState(false);
//   const [loginError, setLoginError] = useState(false);
//   const navigate = useNavigate()

//   // const handleSubmit = (e : any) => {
//   //     e.preventDefault()
//   //     // alert("hiii")
//   // }

//   const onFinish = async (values: any) => {
//     const addList = {
//       ...values, expiresIn: 126000000
//     }
//     const success = await store.LoginUSer(addList);

//       if (success) {
//         setLoginSuccess(true);
//         navigate('/dashboard');
//       } else {
//         setLoginError(true);
//       }

//   }

//     // const loginDetails = Store.LoginUSer(addList)

//     // const LoginData = Store.checkLogin()

//     // console.log("login " , LoginData);
    

//     // // console.log('Success:', addList);
//     // // const token = localStorage.getItem("token")
//     // if (LoginData) {
//     //   setLoginSuccess(true)
//     //   navigate("/dashboard")
//     // } else {
//     //   setLoginError(true)
//     // }

    
//   const onFinishFailed = (errorInfo: any) => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <div>
//       <Row gutter={16}>
//         <Col className="gutter-row" span={8}></Col>
//         <Col className="gutter-row" span={8}>
//           <Layout>
//             <Header style={{ color: "white" }}>Login</Header>
//             <div className='mt-3'>

//             {loginSuccess && (
//                 <Alert
//                   message="Login Success"
//                   type="success"
//                   showIcon
//                   closable
//                   onClose={() => setLoginSuccess(false)}
//                 />
//               )}

//               {loginError && (
//                 <Alert
//                   message="Invalid Username and Password"
//                   type="error"
//                   showIcon
//                   closable
//                   onClose={() => setLoginError(false)}
//                 />
//               )}
//               <Form
//                 initialValues={{ remember: true }}
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"

//               >
//                 <Form.Item
//                   label="Username"
//                   name="username"
//                   rules={[{ required: true, message: 'Please input your username!' }]}
//                 >
//                   <Input />
//                 </Form.Item>

//                 <Form.Item
//                   label="Password"
//                   name="password"
//                   rules={[{ required: true, message: 'Please input your password!' }]}
//                 >
//                   <Input.Password />
//                 </Form.Item>

//                 <Form.Item>
//                   <Button type="primary" htmlType="submit">
//                     Login
//                   </Button>
//                 </Form.Item>
//               </Form>

              
//             </div>
//           </Layout>
//         </Col>
//         <Col className="gutter-row" span={8}></Col>
//       </Row>
//     </div>
//   )
// }

// export default Login



// --------------------------------------------


import React, { useState } from 'react'
import { Col, Row, Layout, Button, Form, Input, Alert } from 'antd';
import { values } from 'mobx';
import Store from '../../Store/Store';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../Hooks/useStore';
const { Header, Content, Footer } = Layout;

interface LoginProps{
  onLogin : () => void
}
const Login = () => {

  const {indexStore : {store} } = useStore()

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate()

  // const handleSubmit = (e : any) => {
  //     e.preventDefault()
  //     // alert("hiii")
  // }

  const onFinish = async (values: any) => {
    const addList = {
      ...values, expiresIn: 126000000
    }
    const success = await store.LoginUSer(addList);

      if (success) {
        setLoginSuccess(true);
        navigate('/dashboard');
      } else {
        setLoginError(true);
      }

  }

    // const loginDetails = Store.LoginUSer(addList)

    // const LoginData = Store.checkLogin()

    // console.log("login " , LoginData);
    

    // // console.log('Success:', addList);
    // // const token = localStorage.getItem("token")
    // if (LoginData) {
    //   setLoginSuccess(true)
    //   navigate("/dashboard")
    // } else {
    //   setLoginError(true)
    // }

    
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Row gutter={16}>
        <Col className="gutter-row" span={8}></Col>
        <Col className="gutter-row" span={8}>
          <Layout>
            <Header style={{ color: "white" }}>Login</Header>
            <div className='mt-3'>

            {loginSuccess && (
                <Alert
                  message="Login Success"
                  type="success"
                  showIcon
                  closable
                  onClose={() => setLoginSuccess(false)}
                />
              )}

              {loginError && (
                <Alert
                  message="Invalid Username and Password"
                  type="error"
                  showIcon
                  closable
                  onClose={() => setLoginError(false)}
                />
              )}
              <Form
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"

              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Login
                  </Button>
                </Form.Item>
              </Form>

              
            </div>
          </Layout>
        </Col>
        <Col className="gutter-row" span={8}></Col>
      </Row>
    </div>
  )
}

export default Login