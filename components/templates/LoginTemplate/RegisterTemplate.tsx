import React, { useEffect, useState, useReducer } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleArrowLeft,
  faEyeSlash,
  faLock,
  faPhone,
  faUser,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons'
import { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js'
import UserPool from '../../../UserPool'
import { handleRegister } from '@components/globalStates/UserGlobal/utils'
import { UserType } from '@components/globalStates/UserGlobal/UserGlobalState'

export const RegisterTemplate = () => {
  const [username, setUsername] = useState('')
  const [user_type, setUser_type] = useState(UserType.VENDOR)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  // const [verifyProcess, setVerifyProcess] = useState(false);
  // const [OTP, setOTP] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    handleRegister(username, password, name, user_type);
  }

  // const onSubmit = (e) => {
  //     e.preventDefault();
  //     const attributeList = [];
  //     attributeList.push(
  //         new CognitoUserAttribute({
  //             Name: 'email',
  //             Value: email,
  //         })
  //     );
  //     attributeList.push(
  //         new CognitoUserAttribute({
  //             Name: 'name',
  //             Value: name,
  //         })
  //     );

  //     attributeList.push(({
  //         Name: 'custom:user_type',
  //         Value: user_type,
  //     })
  //     );

  //     UserPool.signUp(username, password, attributeList, null, (err, data) => {
  //         if (err) {
  //             console.log(err);
  //             alert("Couldn't sign up");
  //         } else {
  //             console.log(data);
  //             // setVerifyProcess(true);
  //             alert('User Added Successfully');
  //         }
  //     });
  // };

  //   const verifyAccount = (e) => {
  //     e.preventDefault();
  //     const user = new CognitoUser({
  //       Username: username,
  //       Pool: UserPool,
  //     });
  //     console.log(user);
  //     user.confirmRegistration(OTP, true, (err, data) => {
  //       if (err) {
  //         console.log(err);
  //         alert("Couldn't verify account");
  //       } else {
  //         console.log(data);
  //         alert('Account verified successfully');
  //         window.location.href = '/login';
  //       }
  //     });
  //   };

  return (
    <>
      <div
        className="w-full h-full flex justify-center items-start md:items-center lg:items-center"
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
          <div className="w-96 bg-white text-gray-600">
            <div
              className="rounded flex justify-center items-center p-2 mb-5 gap-3 bg-gradient-to-r from-indigo-900 to-indigo-500 ..."
              style={{ background: '#33c5f4' }}
            >
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
                      icon={faUserAlt}
                    ></FontAwesomeIcon>
                  </label>
                  <input
                    className="border-none outline-0 w-full  text-xs"
                    type="text"
                    placeholder="Enter Full Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-center border border-gray-300 w-full mt-5">
                  <label>
                    <FontAwesomeIcon
                      className="pl-3"
                      icon={faUser}
                      style={{ color: '#33c5f4' }}
                    ></FontAwesomeIcon>
                  </label>
                  <input
                    className="border-none outline-0 w-full text-xs"
                    type="text"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-center border border-gray-300 w-full mt-5">
                  <label>
                    <FontAwesomeIcon
                      className="pl-3"
                      icon={faPhone}
                      style={{ color: '#33c5f4' }}
                    ></FontAwesomeIcon>
                  </label>
                  <input
                    className="border-none outline-0 w-full  text-xs"
                    type="text"
                    placeholder="Enter Mobile"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-center border border-gray-300 w-full mt-5">
                  <label>
                    <FontAwesomeIcon
                      className="pl-3"
                      icon={faLock}
                      style={{ color: '#33c5f4' }}
                    ></FontAwesomeIcon>
                  </label>
                  <input
                    className="border-gray-300 w-full  text-xs"
                    type="text"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* <div className='flex items-center gap-2'>
                                    <div className='flex items-center border border-gray-300 w-full mt-5'>
                                        <label><FontAwesomeIcon className='text-indigo-600 pl-3' icon={faEyeSlash}></FontAwesomeIcon></label>
                                        <input className="border-gray-300 w-full  text-xs" type="text" placeholder="Confirmation Code" required />
                                    </div>
                                    <button className='text-xs text-white bg-gray-700 w-full rounded py-2 w-36 mt-5'>Verify</button>
                                </div> */}

                <div className="flex pt-5 gap-5">
                  <div className="radio">
                    <label>
                      <input
                        className="bg-indigo-600"
                        style={{ color: '#33c5f4' }}
                        type="radio"
                        value="option1"
                        checked={true}
                        onClick={(e) => setUser_type(UserType.BUSINESS_USER)}
                      />
                      <span className="pl-2 text-sm">Business</span>
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        className=""
                        style={{ color: '#33c5f4' }}
                        type="radio"
                        value="option1"
                        checked={true}
                        onClick={(e) => setUser_type(UserType.VENDOR)}
                      />
                      <span className="pl-2 text-sm">Vendor</span>
                    </label>
                  </div>
                </div>

                <div className="mt-5">
                  <button
                    onClick={onSubmit}
                    type="submit"
                    className="text-sm text-white w-full rounded p-2"
                    style={{ background: '#33c5f4' }}
                  >
                    Register
                  </button>
                </div>
              </form>
              {/* -----------------login form-------------- */}
              <div className="flex justify-center flex-col items-center my-5">
                <h6 className="text-gray-600 font-semibold text-left w-full mb-5">
                  Forgot your password ?
                </h6>
                <h6 className="text-gray-300">
                  --------------------- or ---------------------
                </h6>
              </div>

              <div>
                <Link href="/login">
                  <button
                    className="text-xs text-gray-400 w-full p-2 rounded"
                    style={{ border: '2px solid #33c5f4' }}
                  >
                    <p>Already have an account</p>
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
