import { useReactiveVar } from '@apollo/client'
import { userGlobalState } from '@components/globalStates/UserGlobal/UserGlobalState'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faBriefcase, faCoffee, faComment, faDatabase, faFileContract, faFileShield, faFire, faGear, faGears, faHeadset, faSackDollar, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router'
import { setUserGlobalState, setUserTokenGlobalState } from '@components/globalStates/UserGlobal/utils'
import UserPool from 'UserPool'
import { useSelector } from 'react-redux'
import { logout, selecctUser } from 'pages/redux/slices/countSlice'
import { useDispatch } from 'react-redux'


export const UserPill = () => {
  const router = useRouter();
  const { user } = useReactiveVar(userGlobalState)
  var cognitoUser = UserPool.getCurrentUser();

  const dispatch = useDispatch();

  // useEffect(()=>{
  //   if(cognitoUser == null && !cognitoUser ){
  //     router.push('/login');
  //   }
  // },[])

  async function signOut() {

    dispatch(logout());

    cognitoUser?.signOut()
    setUserGlobalState(null)
    setUserTokenGlobalState("")
 
      console.log("signing out")
      router.push('/login')
}

  //  const users = useSelector(selecctUser);

  return (
<>
    <div className="hidden group py-1 pl-2 pr-5 rounded-full bg-white lg:flex gap-2 items-center shadow-md cursor-pointer">
      <Image src="/images/user_prabhas.jpg" height={40} width={40} className="rounded-full" />
      <h5 className="truncate w-20">John Doe</h5>

      <div className='shadow-md duration-300 bg-white w-42 h-34 hidden overflow-hidden absolute -mb-48 group-hover:block' style={{ marginTop: "-8px" }}>

        {/* group-hover:h-60 */}
        <ul className='h-34 mt-2'>
          <Link href="/"><h4 className='group text-xs py-2 px-3 hover:bg-indigo-500 hover:text-white'>
            <FontAwesomeIcon className="text-gray-300 hover:text-white text-md mr-2" icon={faUserPen}></FontAwesomeIcon>Profile Setting</h4>
          </Link>

          <Link href="/"><h4 className='group text-xs py-2 px-3 hover:bg-indigo-500 hover:text-white'>
            <FontAwesomeIcon className="text-gray-300 hover:text-white text-md mr-2" icon={faHeadset}></FontAwesomeIcon>Custom Support</h4>
          </Link>

          <Link href="/"><h4 className='group text-xs py-2 px-3 hover:bg-indigo-500 hover:text-white'>
            <FontAwesomeIcon className="text-gray-300 hover:text-white text-md mr-2" icon={faComment}></FontAwesomeIcon>Give Feedback</h4>
          </Link>

          <Link href=""><h4 className='group text-xs py-2 px-3 hover:bg-indigo-500 hover:text-white' onClick={signOut}>
            <FontAwesomeIcon className="text-gray-300 hover:text-white text-md mr-2" icon={faArrowRightFromBracket}></FontAwesomeIcon>Logout</h4>
          </Link>

        </ul>
      </div>

    </div>

    <div>
      <input 
      className='border-gray-300 rounded py-1 text-xs md:hidden'
      type='text' />
    </div>

    </>
  )
}
