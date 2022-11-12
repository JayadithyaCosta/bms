import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import * as Yup from 'yup'
import styles from './styles.module.scss'
import LoginLayout from '../../components/layouts/loginLayout/loginLayout'
import { Formik, Form, FormikValues } from 'formik'
import InputField from '../../components/shared/inputField/InputField'
import { login } from '../../lib/helper'
import { useRouter } from 'next/router'

type LoginInitials = {
  password: string
  name: string
}

const Login: NextPage = () => {
  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)
  const [employee, setEmployee] = useState(false)
  const [error, setError] = useState('')
  const [admin, setAdmin] = useState(false)
  const initialValues = useMemo<LoginInitials>(() => {
    return {
      password: '',
      name: ''
    }
  }, [])

  // useEffect(() => {
  //   if (employee && isLoggedIn) {
  //     router.push('/empEvents')
  //   }
  //   if (admin && isLoggedIn) {
  //     router.push('/adminEvents')
  //   }
  // }, [isLoggedIn, admin, employee])

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required!').trim(),

    password: Yup.string()
      .required('Password is required!')
      .min(8, 'Enter a password must be 8 characters')
      .max(20, 'Password must be less than 20')
  })

  const handleSubmit = async (values: FormikValues) => {
    setLoading(true)

    const loginUser = await login(values)

    if (!loginUser) {
      setLoading(false)
      setError('Invalid Credentials!')
    }

    window.sessionStorage.setItem('access_token', loginUser?.data.token)

    // setTimeout(() => 2000)

    if (employee && loginUser) {
      router.push('/empEvents')
    }

    if (admin && loginUser) {
      router.push('http://localhost:3000/adminEvents')
    }

    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>BMS</title>
        <meta name="theme-color" content="#000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginLayout middleContent>
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form className={'d-flex justify-content-center w-100 mt-5'}>
              <div className={styles.loginContainer}>
                <div className="d-flex justify-content-center">
                  <button
                    className={
                      employee ? styles.selectedBtn : styles.loginChoice
                    }
                    onClick={() => {
                      setEmployee((a) => !a)
                      setAdmin(false)
                    }}
                    type="button"
                  >
                    <h4 className="text-regular text-white">Employee</h4>
                  </button>
                  <button
                    className={
                      admin ? styles.selectedBtn : styles.loginChoicePurple
                    }
                    onClick={() => {
                      setAdmin((a) => !a)
                      setEmployee(false)
                    }}
                    type="button"
                  >
                    <h4 className="text-regular text-white">Admin</h4>
                  </button>
                </div>
                {/* {employee ? (
                    <h1 className="text-black w-100">
                      Log into your employee account
                    </h1>
                  ) : (
                    <h1 className="text-black w-100">
                      Log into your admin account
                    </h1>
                  )} */}
                <div className={styles.customWidth}>
                  <div className={`mt-5`}>
                    <InputField
                      placeholder={'User Name'}
                      className={styles.inputBox}
                      name="name"
                    />
                  </div>
                  <div
                    className="d-flex justify-content-start text-red"
                    style={{ marginLeft: '5px' }}
                  >
                    {error ? error : ''}
                  </div>

                  <div className={`mt-5`}>
                    <InputField
                      placeholder={'Password'}
                      className={styles.inputBox}
                      type={'password'}
                      name={'password'}
                    />
                  </div>
                  <p className={`mt-3 mb-2 text-black`}>
                    Don&apos;t have an account yet? Create and account
                    <a href={'/register'} className={`link-secondary`}>
                      {' '}
                      here
                    </a>
                  </p>
                  {/* <Button className={`mt-4 ${styles.loginBtn}`}>Login</Button> */}
                  <button
                    className={`mt-4 ${styles.loginBtn}`}
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault()
                      handleSubmit(values)
                    }}
                  >
                    {loading ? 'Loading...' : 'Login'}
                  </button>
                  <p
                    className={`text-decoration-underline d-flex justify-content-end mt-5 text-white `}
                  >
                    <a href="#FORGOT">Forgot Password</a>
                  </p>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </LoginLayout>
    </>
  )
}

export default Login
