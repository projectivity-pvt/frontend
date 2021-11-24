import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'
import { Button } from '@windmill/react-ui'
import toast from 'react-hot-toast'

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
      toast.success('Logged out ☹️')
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <>
      <div className="my-4">Welcome , {user}</div>

      <Link href="/login">
        <a className="bg-indigo-200 rounded p-2 text-indigo-600">Go to login</a>
      </Link>

      <Button
        onClick={() => handleSignout()}
        className="mt-6 h-10"
        block
        type="submit"
      >
        Log out
      </Button>
    </>
  )
}

export default Home
