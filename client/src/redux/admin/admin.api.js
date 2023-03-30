import axios from "axios";



//products apis========================================

export const getProduct = () => {
    axios.get("http://localhost:8080/adminproduct/products", { headers: { "Content-Type": "application/json", "token": localStorage.getItem("token") } }).then((res) => {
        return res.data;
    }).catch((er) => { return er })

}

export const postProduct = (payload) => {
    axios.post("http://localhost:8080/adminproduct/add", payload,
        { headers: { "Content-Type": "application/json", "token": localStorage.getItem("token") } }
    ).then((res) => {
        return res.product;
    }).catch((er) => { return er })
}

export const delProduct = (id) => {
    axios.delete(`http://localhost:8080/adminproduct/product/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token")
        }
    }).then((res) => {
        return res.data;
    }).catch((er) => {
        return er;
    })
}

export const updateProduct = (id, payload) => {
    axios.patch(`http://localhost:8080/adminproduct/product/${id}`, payload, {
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token")
        }
    }).then((res) => {
        return res.data;
    }).catch((er) => {
        return er;
    })
}



//users apis========================================

export const getUsers = () => {
    axios.get("http://localhost:8080/adminuser/users", {
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token")
        }
    }).then((res) => {
        return res.data;
    }).catch((er) => { return er })
}


export const delUser = (id) => {
    axios.get(`http://localhost:8080/adminuser/user/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token")
        }
    }).then((res) => {
        return res.data;
    }).catch((er) => { return er })
}




export const getAdmin = () => {
    axios.get("http://localhost:8080/adminuser/admin", {
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token")
        }
    }).then((res) => {
        return res.data;
    }).catch((er) => { return er })
}


export const addAdmin = (payload) => {
    axios.post("http://localhost:8080/adminuser/add/admin", payload, {
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token")
        }
    }).then((res) => {
        return res.data;
    }).catch((er) => { return er })
}

export const delAdmin = (id) => {
    axios.delete(`http://localhost:8080/adminuser/delete/admin/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token")
        }
    }).then((res) => {
        return res.data;
    }).catch((er) => { return er })
}

