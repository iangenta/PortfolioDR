// testimonials.api.js
import axios from 'axios';

const testimonialApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/testimonials/api/v1/testimonials/',
});

export const getAllTestimonials =()=>{
    return testimonialApi.get('/')

}
export const getTestimonial =(id)=>{
    return testimonialApi.get(`/${id}`)

}
export const createTestimonial =(testimonial)=>{
    return testimonialApi.post('/',testimonial)
}
export const deleteTestimonial =(id)=>{
    return testimonialApi.delete(`/${id}`)
}
