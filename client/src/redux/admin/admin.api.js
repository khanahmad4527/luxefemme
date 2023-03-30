import axios from "axios";



//products apis========================================

export const getProduct = async() => {
   let data= axios.get("http://localhost:8080/adminproduct/products", { headers: { "Content-Type": "application/json", "token": localStorage.getItem("token") } })
 return data?.data;
}

export const postProduct = async(payload) => {
  let data= await axios.post("http://localhost:8080/adminproduct/add", payload,
        { headers: { "Content-Type": "application/json", "token": localStorage.getItem("token") } }
    )
    return data?.data;
}

export const delProduct = async(id) => {
  let data= axios.delete(`http://localhost:8080/adminproduct/product/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token")
        }
    })
    return data.data;
}

export const updateProduct = async(id, payload) => {
   let data= await axios.patch(`http://localhost:8080/adminproduct/product/${id}`, payload, {
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token")
        }
    })
    return data.data;
}



//users apis========================================

export const getUsers = async() => {
   let data= await axios.get("http://localhost:8080/adminuser/users", {
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token")
        }
    })
    return data?.data;
}


export const delUser = async(id) => {
   let data= await axios.get(`http://localhost:8080/adminuser/user/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token")
        }
    })
    return data.data;
}




export const getAdmin = async() => {
   let data= await axios.get("http://localhost:8080/adminuser/admin", {
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token")
        }
    })
    // console.log(data)
    return data?.data;
}


export const addAdmin = async(payload) => {
 let data= await axios.post("http://localhost:8080/adminuser/add/admin", payload, {
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token")
        }
    })
    return data
}

export const delAdmin = async(id) => {
  let data= axios.delete(`http://localhost:8080/adminuser/delete/admin/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token")
        }
    })
    return data.data;
}


export const updateAdmin=async(id,payload)=>{
    let data= axios.patch(`http://localhost:8080/adminuser/update/admin/${id}`,payload,{
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token")
        }
    })
    return data.data;


}