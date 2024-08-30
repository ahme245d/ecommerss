import React, { useState } from 'react'
import style from './Register.module.css'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const[error,setError]=useState(null)
  const[isLoading,setIsLoading]=useState(false)
  let navigate=useNavigate()
  function handeldRegest(values) {


    setIsLoading(true)
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
    .then((data) => {
      if(data.data.message==="success"){
        setIsLoading(false)
         navigate('/login')
      }
    })
    .catch((error) =>{ setError(error.response.data.message);
      setIsLoading(false);
    });


  }

  let validationSchema = Yup.object({
    name: Yup.string().required().min(3),
    email: Yup.string().required().email(),
    password: Yup.string().required().matches(/^[0-9a-z]{3,9}$/, 'password is not valied'),
    rePassword: Yup.string().required().oneOf([Yup.ref("password")], 'repassword does not matches password'),
    phone: Yup.string()
      .required()
      .matches(/^01[0-25][0-9]{8}$/, 'Phone number is not valid'),
  })


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
    },

    validationSchema,
    onSubmit: handeldRegest,
  });
  console.log(formik)
  return (
    <div className='container p-2'>
      <div className='m-auto w-3/4'>
        <h1 className='p-6'>Register Now :</h1>
        <form className='my-3' onSubmit={formik.handleSubmit}>
          {error && <div>{error}</div>}
          <div className="relative my-5">
            <input type="text" id="name" name='name' className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-900 appearance-none dark:text-white dark:border-gray-900 dark:focus:border-green-900 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
            <label htmlFor="name" className="absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name :</label>
          </div>
          {formik.errors.name && formik.touched.name && (<span className='text-red-500'>{formik.errors.name}</span>)}

          <div className="relative my-5">
            <input type="email" id="email" name='email' className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-900 appearance-none dark:text-white dark:border-gray-900 dark:focus:border-green-900 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            <label htmlFor="email" className="absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">email :</label>
          </div>
          {formik.errors.email && formik.touched.email && (<span className='text-red-500'>{formik.errors.email}</span>)}
          <div className="relative my-5">
            <input type="password" id="password" name='password' className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-900 appearance-none dark:text-white dark:border-gray-900 dark:focus:border-green-900 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
            <label htmlFor="password" className="absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">password :</label>

          </div>
          {formik.errors.password && formik.touched.password && (<span className='text-red-500'>{formik.errors.password}</span>)}
          <div className="relative my-5">
            <input type="password" id="rePassword" name='rePassword' className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-900 appearance-none dark:text-white dark:border-gray-900 dark:focus:border-green-900 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} />
            <label htmlFor="rePassword" className="absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">rePassword :</label>

          </div>
          {formik.errors.rePassword && formik.touched.rePassword && (<span className='text-red-500'>{formik.errors.rePassword}</span>)}
          <div className="relative my-5">
            <input type="text" id="phone" name='phone' className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-900 appearance-none dark:text-white dark:border-gray-900 dark:focus:border-green-900 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
            <label htmlFor="phone" className="absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">phone :</label>

          </div>
          {formik.errors.phone && formik.touched.phone && (<span className='text-red-500'>{formik.errors.phone}</span>)}
          <div>

            <button type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
              {isLoading?'isloading...':'submit'}
            </button>

          </div>
        </form>
      </div>
    </div>
  )
}
