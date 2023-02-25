import React, { useEffect, useState, useReducer } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleArrowLeft,
  faLock,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js'
import { useDispatch } from 'react-redux'
import { login } from '../../../pages/redux/slices/countSlice'
import UserPool from '../../../UserPool'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selecctUser } from 'pages/redux/slices/countSlice'
import { userGlobalState } from '@components/globalStates/UserGlobal/UserGlobalState'
import {
  setUserGlobalState,
  setUserTokenGlobalState,
} from '@components/globalStates/UserGlobal/utils'
// import { awsUserData, awserToken } from 'userToken';

export const LoginTemplate = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const { user } = userGlobalState()
  const dispatch = useDispatch()
  const users = useSelector(selecctUser)

  var cognitoUser = UserPool.getCurrentUser()
  const router = useRouter()

  // useEffect(() => {
  //   if (users != null && users.userData.user_type == 'VENDOR') {
  //     router.push('/vendor')
  //   }else{
  //     router.push('/business')
  //   }
  // }, [])

  const authenticate = async (Username, Password) => {
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username,
        Pool: UserPool,
      })

      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      })

      user.authenticateUser(authDetails, {
        onSuccess: (result) => {
          dispatch(
            login({
              userData: result['idToken']['payload'],
              jwtToken: result['idToken']['jwtToken'],
              loggedIn: true,
            })
          )
          router.push('/vendor')
                    // {
          //   users &&  users.userData.user_type && users.userData.user_type == 'VENDOR'
          //     ? ( router.push('/vendor') )
          //     : ( router.push('/business') )
          // }

          resolve(result)
        },
        onFailure: (err) => {
          console.log('login failure', err)
          reject(err)
        },
        newPasswordRequired: (data) => {
          console.log('new password required', data)
          resolve(data)
        },
      })
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    authenticate(username, password)
      .then((data) => {
        console.log(data)
        alert('login success')
        //window.location.reload();
      })
      .catch((err) => {
        console.log(err)
        alert('login failure')
      })
  }

  return (
    <>
      <div
        className="w-full h-full flex justify-center items-start md:items-center lg:items-center bg-gradient-to-r from-indigo-500 ..."
        style={{ background: '#49beab' }}
      >
        <div className="flex flex-col-reverse lg:flex-row md:flex-row bg-white rounded-lg items-center shadow-lg shadow-indigo-500/100 ... p-10">
          {/* ---------left---------- */}
          <div className="justify-center login-background w-92">
            <Image src="/images/login_dash4.jpg" height={400} width={400} />
            <Link href="/">
              <div className="flex justify-center cursor-pointer">
                <div className="w-48 flex items-center gap-2 justify-center bg-gray-200  rounded-2xl p-1">
                  <label>
                    <FontAwesomeIcon
                      className="text-indigo-600 text-lg"
                      icon={faCircleArrowLeft}
                    ></FontAwesomeIcon>
                  </label>
                  <p className="text-xs">Back to main page</p>
                </div>
              </div>
            </Link>
          </div>
          {/* ---------left---------- */}

          {/* ---------right---------- */}
          <div className="w-96 justify-center bg-white text-gray-600">
            <div
              className="rounded flex justify-center items-center p-2 mb-5 gap-3"
              style={{ background: '#444' }}
            >
              {/* style={{background:'#33c5f4'}} */}
              <Image
                src="/images/projectivity_logo.png"
                width={40}
                height={40}
              />
              <p className="text-xl text-white tracking-wide border-l pl-2">
                Projectivity
              </p>
            </div>

            <div className="p-5">
              {/* -----------------login form-------------- */}
              <form action="">
                <div className="flex items-center border border-gray-300 w-full">
                  <label>
                    <FontAwesomeIcon
                      className="pl-3"
                      style={{ color: '#33c5f4' }}
                      icon={faUser}
                    ></FontAwesomeIcon>
                  </label>
                  <input
                    className="border-none outline-none w-full text-xs"
                    type="text"
                    placeholder="Enter Username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                {/* <p className='text-red-600 text-sm'>Invalid Email</p> */}

                <div className="flex items-center border border-gray-300 w-full mt-5">
                  <label>
                    <FontAwesomeIcon
                      className="pl-3"
                      style={{ color: '#33c5f4' }}
                      icon={faLock}
                    ></FontAwesomeIcon>
                  </label>
                  <input
                    className="focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  border-none w-full  text-xs"
                    type="text"
                    placeholder="Enter Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* <p className='text-red-600 text-sm'>Invalid Password</p> */}

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={onSubmit}
                    className="text-sm text-white w-full rounded p-2"
                    style={{ background: '#33c5f4' }}
                  >
                    Login
                  </button>
                </div>
              </form>
              {/* -----------------login form-------------- */}
              <div className="flex justify-center flex-col items-center my-5">
                <h6 className="text-gray-600 font-semibold  a text-left w-full mb-5">
                  Forgot your password ?
                </h6>
                <h6 className="text-gray-300">
                  --------------------- or ---------------------
                </h6>
              </div>

              <div>
                <Link href="/register">
                  <button
                    className="text-xs text-gray-400 w-full p-2 rounded"
                    style={{ border: '2px solid #33c5f4' }}
                  >
                    <p className="text-xs">Create An Account</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* ---------right---------- */}
        </div>
      </div>
    </>
  )
}
