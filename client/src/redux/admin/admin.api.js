import instance from "../../utils/axiosInstance";

//products apis========================================

export const getProduct = async (page = 0) => {
  let data = await instance.get(`adminproduct/products?page=${page}`);

  return data;
};

export const postProduct = async (payload) => {
  let data = await instance.post("adminproduct/add", payload);
  return data?.data;
};

export const delProduct = async (id) => {
  let data = await instance.delete(`adminproduct/product/${id}`);
  return data;
};

export const updateProduct = async (id, payload) => {
  let data = await instance.patch(`adminproduct/product/${id}`, payload);
  return data;
};

//users apis========================================

export const getUsers = async (page = 0) => {
  let data = await instance.get(`adminuser/users?page=${page}`);
  return data?.data;
};

export const delUser = async (id) => {
  let data = await instance.delete(`adminuser/user/${id}`);
  return data?.data;
};

export const getAdmin = async (page = 0) => {
  let data = await instance.get(`adminuser/admin?page=${page}`);

  return data?.data;
};

export const addAdmin = async (payload) => {
  let data = await instance.post("adminuser/add/admin", payload);
  return data;
};

export const delAdmin = async (id) => {
  let data = instance.delete(`adminuser/delete/admin/${id}`);
  return data?.data;
};

export const updateAdmin = async (id, payload) => {
  let data = instance.patch(`adminuser/update/admin/${id}`, payload);
  return data?.data;
};
