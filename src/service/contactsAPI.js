import axios from 'axios';

export const contactAPI = axios.create({
  baseURL: 'https://64c4d51367cfdca3b661075c.mockapi.io/api/v1',
});

export const getContacts = async () => {
  const { data } = await contactAPI.get(`/contacts`);
  return data;
};

export const addContacts = async contact => {
  const { data } = await contactAPI.post(`/contacts`, contact);
  return data;
};

export const delContacts = async id => {
  const { data } = await contactAPI.delete(`/contacts/${id}`);
  return data;
};
