import { Navigate } from "react-router-dom";

const AdminPrivateRoute=({ children })=>{
   const token=localStorage.getItem("token");
   const role=localStorage.getItem("role")||0;
    if (!token &&  (role!=="admin" || role!=="superadmin") ) {
      return <Navigate to="/" />;
    }
    return children;
  }
  export default AdminPrivateRoute;