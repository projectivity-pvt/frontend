import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'
import { Button } from '@windmill/react-ui'
import toast from 'react-hot-toast'
import { UserPill } from '@components/molecules/UserPill/UserPill'
import { NotificationPill } from '@components/molecules/NotificationPill/NotificationPill'
import { HeaderText } from '@components/atoms/HeaderText/HeaderText'
import { useQuery, gql } from '@apollo/client'
import { GetEmployeeDetailsQuery } from 'types/types'
import ActiveLink from '@components/atoms/ActiveLink/ActiveLink'

const Home: NextPage = () => {
  const [user, setUser] = useState('')
  const getUser = async () => {
    const currentUserInfo = await Auth.currentUserInfo()
    if (currentUserInfo?.attributes?.name) {
      setUser(currentUserInfo.attributes.name)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  const handleSignout = async () => {
    try {
      await Auth.signOut()
      toast.success('Logged out', {
        icon: '🙋‍♂️',
      })
    } catch (err) {
      toast.error(err.message)
    }
  }

  const query = gql`
    query MyQuery {
      getEmployeeDetails {
        businessName
        employeeName
        employeePhoneNumber
      }
    }
  `

  const { data } = useQuery<GetEmployeeDetailsQuery>(query)
  console.log(data?.getEmployeeDetails?.employeeName)

  return (
    <>
      <div className="my-4">Welcome , {user}</div>
      <div className="flex items-center px-4 gap-2">
        <HeaderText />
        <NotificationPill />
        <UserPill />
      </div>
      <Link href="/login">
        <a className="bg-indigo-200 rounded p-2 text-indigo-600">Go to login</a>
      </Link>

      <ActiveLink activeClassName="bg-rose-100 text-rose-600" href="/">
        <a className="bg-indigo-200 rounded p-2 text-indigo-600">Homepage</a>
      </ActiveLink>

      <Button
        onClick={() => handleSignout()}
        className="mt-6 h-10"
        type="submit"
      >
        Log out
      </Button>
    </>
  )
}

export default Home
