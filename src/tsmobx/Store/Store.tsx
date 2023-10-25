
// ------------------ Login -------------------------

// import axios from 'axios'
// import { action, computed, makeObservable, observable } from 'mobx'
// import React from 'react'


// export interface IUser {

// }

// class Store {
//   isLogin = false;
//   userDetails: IUser[] = []

//   constructor() {
//     makeObservable(this, {
//       isLogin: observable,
//       userDetails: observable,

//       getUserDetails: computed,
//       LoginUSer: action,
//       // checkLogin : action
//     })
//   }
//   async LoginUSer(values: any) {
//     // console.log("values Store" , values);

//     try {
//       const LoginDetails = await axios.post("https://www.melivecode.com/api/login", values)
//       // console.log("LoginDetails" , LoginDetails);

//       const token = await LoginDetails.data.accessToken
//       // console.log("resData " , resData);

//       if (token) {
//         localStorage.setItem("token", token);
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
//     // this.checkLogin()

//   }


//   // checkLogin(){
//   //   const token = localStorage.getItem("token")
//   //   if(token){
//   //     return this.isLogin = true
//   //   }else{
//   //     return this.isLogin = false
//   //   }
//   // }
//   get getUserDetails() {
//     return this.userDetails
//   }
// }

// export default Store
// // export default new Store()





// ----------------------------- Fetch User -------------------------------



// import axios from 'axios'
// import { action, computed, makeObservable, observable } from 'mobx'
// import React from 'react'


// export interface IUser {
//   id: number;
//   fname: string;
//   lname: string;
//   avatar: string;
//   username: string;

// }

// class Store {
//   isLogin = false;
//   userDetails: IUser[] = []


//   constructor() {
//     makeObservable(this, {
//       isLogin: observable,
//       userDetails: observable,
//       getUserDetails: computed,
//       LoginUSer: action,
//       fetchUser : action,
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
//         localStorage.setItem("token", token);
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

//   async fetchUser(){

//     try{
//       const fetchUserData = await axios.get("https://www.melivecode.com/api/users")
//     // console.log("fetchUserData" ,fetchUserData.data)

//     const resUser = fetchUserData.data

//     this.userDetails = fetchUserData.data
//     }catch(err){
//       console.log("Error fetching user data", err);
//     }
//   }

//   get getUserDetails() {  
//     return this.userDetails
//   }
// }

// export default Store
// // export default new Store()



// ------------------------------ Add User -------------------------



// import axios from 'axios'
// import { action, computed, makeObservable, observable } from 'mobx'
// import React from 'react'


// export interface IUser {
//   id: number;
//   fname: string;
//   lname: string;
//   avatar: string;
//   username: string;

// }

// class Store {
//   isLogin = false;
//   userDetails: IUser[] = []


//   constructor() {
//     makeObservable(this, {
//       isLogin: observable,
//       userDetails: observable,
//       getUserDetails: computed,
//       LoginUSer: action,
//       fetchUser: action,
//       addUserData: action,
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
//         localStorage.setItem("token", token);
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


//       this.userDetails = fetchUserData.data
//     } catch (err) {
//       console.log("Error fetching user data", err);
//     }
//   }


//   async addUserData(value : any){
//     try{
//       // console.log("add user Store " , value);
//       const addUserData = await axios.post("https://www.melivecode.com/api/users/create",value) 
//       console.log("addUserData " , addUserData);
//       this.fetchUser()
//     }catch(err){
//       console.log("Add User Error ", err);

//     }
//   }

//   // async addUserData(value: any) {
//   //   try {
//   //     console.log("add user Store ", value);
//   //     const addUserData = await axios.post("https://www.melivecode.com/api/users/create", value);
//   //     // You can add additional logic here if needed.
//   //   } catch (err) {
//   //     console.log("Add User Error ", err);
//   //   }
//   // }


//   get getUserDetails() {
//     return this.userDetails
//   }
// }

// export default Store
// // export default new Store()





// // -------------------------- Update User Done-------------------------




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

// class Store {
//   isLogin = false;
//   userDetails: IUser[] = [];
//   editBefore: any = null;
//   addDetails: any = null;

//   constructor() {
//     makeObservable(this, {
//       isLogin: observable,
//       userDetails: observable,
//       getUserDetails: computed,
//       LoginUSer: action,
//       fetchUser: action,
//       addUserData: action,
//       // setEditUser : action,
//       // setaddDetails : action,
//       updetUer: action,
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
//         localStorage.setItem("token", token);
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


//       this.userDetails = fetchUserData.data
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

//   setaddDetails(addData: any) {
//     // console.log("addData " , addData);
//     this.addDetails = addData
//   }

//   // Update User

//   setEditBefore(userData: any) {
//     this.editBefore = userData;
//   }

//   async updetUer(user: any) {

//     try {
//       const updetUserData = await axios.put("https://www.melivecode.com/api/users/update", user)
//       // console.log("updetUserData " , updetUserData);
//       this.fetchUser();
//     } catch (err) {
//       console.log("Update Error ", err);

//     }
//   }

//   get getUserDetails() {
//     return this.userDetails
//   }
// }

// export default Store
// // export default new Store()




// // -------------------------- Delete User Done-------------------------


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

// class Store {
//   isLogin = false;
//   userDetails: IUser[] = [];
//   editBefore: any = null;
//   addDetails: any = null;

//   constructor() {
//     makeObservable(this, {
//       isLogin: observable,
//       userDetails: observable,
//       getUserDetails: computed,
//       LoginUSer: action,
//       fetchUser: action,
//       addUserData: action,
//       deleteUser : action,
//       // setEditUser : action,
//       // setaddDetails : action,
//       updetUer: action,
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
//         localStorage.setItem("token", token);
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


//       this.userDetails = fetchUserData.data
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

//   setaddDetails(addData: any) {
//     // console.log("addData " , addData);
//     this.addDetails = addData
//   }

//   // Update User

//   setEditBefore(userData: any) {
//     this.editBefore = userData;
//   }

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

//   async deleteUser(user : any){
//     // console.log("deleteStore" , user);

//       const deleteUserData = await axios.delete("https://www.melivecode.com/api/users/delete",{
//         data : {id : user}
//       })
//       this.fetchUser()
//   }

//   get getUserDetails() {
//     return this.userDetails
//   }
// }

// export default Store
// // export default new Store()




// -------------------------- Delete User-------------------------


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

// class Store {
//   isLogin = false;
//   userDetails: IUser[] = [];
//   editBefore: any = null;
//   addDetails: any = null;

//   constructor() {
//     makeObservable(this, {
//       isLogin: observable,
//       userDetails: observable,
//       getUserDetails: computed,
//       LoginUSer: action,
//       fetchUser: action,
//       addUserData: action,
//       deleteUser : action,
//       // setEditUser : action,
//       // setaddDetails : action,
//       updetUer: action,
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
//         localStorage.setItem("token", token);
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


//       this.userDetails = fetchUserData.data
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

//   setaddDetails(addData: any) {
//     // console.log("addData " , addData);
//     this.addDetails = addData
//   }

//   // Update User

//   setEditBefore(userData: any) {
//     this.editBefore = userData;
//   }

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

//   async deleteUser(user : any){
//     // console.log("deleteStore" , user);

//       const deleteUserData = await axios.delete("https://www.melivecode.com/api/users/delete",{
//         data : {id : user}
//       })
//       this.fetchUser()
//   }

//   get getUserDetails() {
//     return this.userDetails
//   }
// }

// export default Store
// // export default new Store()



// ----------------------------------------------------- Attractions/Places Done add and update ------------------------




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
//   editBefore: any = null;
//   addDetails: any = null;
//   editAttriBefore : any = null

//   AttractionsDetails: IAttractions[] = []

//   constructor() {
//     makeObservable(this, {
//       isLogin: observable,
//       userDetails: observable,
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


//       this.userDetails = fetchUserData.data
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

//   setaddDetails(addData: any) {
//     // console.log("addData " , addData);
//     this.addDetails = addData
//   }

//   // Update User

//   setEditBefore(userData: any) {
//     this.editBefore = userData;
//   }

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

//   get getUserDetails() {
//     return this.userDetails
//   }

//   // -------------------------------- Attractions ------------------------

//   //   async fetchgetAttractions(){
//   //     const attractData = await axios.get("https://www.melivecode.com/api/attractions")
//   //     // console.log("attractData " , attractData.data);
//   //     const resAttrect = attractData.data
//   //     console.log("resAttrect " , resAttrect);

//   //     this.AttractionsDetails = attractData.data

//   //   }

//   //   get getAttractions(){
//   //     return this.AttractionsDetails
//   //   }
//   // }

//   // export default Store
//   // // export default new Store()


//   // ----------------------- Add Attractions ----------------------

//   async fetchgetAttractions() {
//     const attractData = await axios.get<IAttractions[]>("https://www.melivecode.com/api/attractions")
//     // console.log("attractData " , attractData.data);
//     const resAttrect = attractData.data
//     console.log("resAttrect ", resAttrect);

//     this.AttractionsDetails = attractData.data

//   }

//   async addAttract(values : any){
//     // console.log("add Attract Store" , values);

//     // const addAttractall = {
//     //   ...values,
//     //   detail : "Hello",
//     //   coverimage : "https://www.melivecode.com/attractions/11.jpg"
//     // }

//     // console.log("addAttractall " , addAttractall);

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

//   setEditAtt(data : any){
//     console.log("Edit befor " , data);

//      return this.editAttriBefore = data
//   }


//   async editAttraction(editAttr : any){
//     const token = localStorage.getItem("tokens")
//     // console.log("editAttr Store " , editAttr);

//     const editAttraData = await axios.put("https://www.melivecode.com/api/auth/attractions/update",editAttr,{
//       headers : {
//         Authorization : `Bearer ${token}`,
//       }
//     })
//     this.fetchgetAttractions(); 
//   }

//   get getAttractions() {
//     return this.AttractionsDetails
//   }
// }

// export default Store
// // export default new Store()



// // ------------------------------ Delete Attrection Done--------------------------



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
//   editBefore: any = null;
//   addDetails: any = null;
//   editAttriBefore : any = null

//   AttractionsDetails: IAttractions[] = []

//   constructor() {
//     makeObservable(this, {
//       isLogin: observable,
//       userDetails: observable,
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


//       this.userDetails = fetchUserData.data
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

//   setaddDetails(addData: any) {
//     // console.log("addData " , addData);
//     this.addDetails = addData
//   }

//   // Update User

//   setEditBefore(userData: any) {
//     this.editBefore = userData;
//   }

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

//   get getUserDetails() {
//     return this.userDetails
//   }

//   // -------------------------------- Attractions ------------------------

//   //   async fetchgetAttractions(){
//   //     const attractData = await axios.get("https://www.melivecode.com/api/attractions")
//   //     // console.log("attractData " , attractData.data);
//   //     const resAttrect = attractData.data
//   //     console.log("resAttrect " , resAttrect);

//   //     this.AttractionsDetails = attractData.data

//   //   }

//   //   get getAttractions(){
//   //     return this.AttractionsDetails
//   //   }
//   // }

//   // export default Store
//   // // export default new Store()


//   // ----------------------- Add Attractions ----------------------

//   async fetchgetAttractions() {
//     const attractData = await axios.get<IAttractions[]>("https://www.melivecode.com/api/attractions")
//     // console.log("attractData " , attractData.data);
//     const resAttrect = attractData.data
//     console.log("resAttrect ", resAttrect);

//     this.AttractionsDetails = attractData.data

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

//   setEditAtt(data : any){
//     console.log("Edit befor " , data);

//      return this.editAttriBefore = data
//   }


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

//   async deleteAttractions(recordId : number){
//       // console.log("Delete Store" , recordId);
//       const token = localStorage.getItem("tokens")
//       try{
//         const deleteData = await axios.delete("https://www.melivecode.com/api/attractions/delete",{
//           data: {
//             id : recordId
//           },
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//       }
//       )
//       console.log("deleteData " , deleteData);

//       await this.fetchgetAttractions();
//       }catch(err : any){
//         console.log("delete Error " , err.message);

//       }
//   }

//   // async deleteAttractions(userId: number) {
//   //   const token = localStorage.getItem("tokens")

//   //   try {
//   //     await axios.delete(
//   //       "https://www.melivecode.com/api/auth/attractions/delete",
//   //       {
//   //         data: {
//   //           id: userId,
//   //         },
//   //         headers: {
//   //           Authorization: `Bearer ${token}`,
//   //         },
//   //       }
//   //     );
//   //     await this.fetchgetAttractions();
//   //   } catch (error) {
//   //     console.error("deleteattractions error", error);
//   //   }
//   // }

//   get getAttractions() {
//     return this.AttractionsDetails
//   }
// }

// export default Store
// // export default new Store()






// ------------------------------ All Done--------------------------



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
//   editBefore: any = null;
//   addDetails: any = null;
//   editAttriBefore : any = null

//   AttractionsDetails: IAttractions[] = []

//   constructor() {
//     makeObservable(this, {
//       isLogin: observable,
//       userDetails: observable,
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


//       this.userDetails = fetchUserData.data
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

//   setaddDetails(addData: any) {
//     // console.log("addData " , addData);
//     this.addDetails = addData
//   }

//   // Update User

//   setEditBefore(userData: any) {
//     this.editBefore = userData;
//   }

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

//     this.AttractionsDetails = attractData.data

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

//   setEditAtt(data : any){
//     console.log("Edit befor " , data);

//      return this.editAttriBefore = data
//   }


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

//   // async deleteAttractions(recordId : number){
//   //     console.log("Delete Store" , recordId);
//   //     const token = localStorage.getItem("tokens")
//   //     try{
//   //       const deleteData = await axios.delete("https://www.melivecode.com/api/attractions/delete",{
//   //         data: {
//   //           id : recordId
//   //         },
//   //         headers: {
//   //           Authorization: `Bearer ${token}`,
//   //         },
//   //     }
//   //     )
//   //     console.log("deleteData " , deleteData);

//   //     await this.fetchgetAttractions();
//   //     }catch(err : any){
//   //       console.log("delete Error " , err.message);

//   //     }
//   // }



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

//   get getAttractions() {
//     return this.AttractionsDetails
//   }

//   get getUserDetails() {
//     return this.userDetails
//   }

// }

// export default Store





// // -------------------------------------------- Final Done remove warning -------------------



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

