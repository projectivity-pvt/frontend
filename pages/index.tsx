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
import { DesktopSidebar } from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { ProfileForm } from '@components/organisms/ProfileForm/ProfileForm'
import { StatsCard } from '@components/molecules/StatsCard/StatsCard'
import { VendorProfileCard } from '@components/organisms/VendorProfileCard/VendorProfileCard'
import { SectionHeading } from '@components/molecules/SectionHeading/SectionHeading'
import { VendorProjectListItem } from '@components/organisms/VendorProjectListItem/VendorProjectListItem'
import { VendorChart } from '@components/organisms/VendorChart/VendorChart'
import { EmptyContract } from '@components/molecules/EmptyContract/EmptyContract'
import { VendorProjectCard } from '@components/organisms/VendorProjectCard/VendorProjectCard'
import { Tabs } from '@components/molecules/Tabs/Tabs'
import { VendorContractTable } from '@components/organisms/VendorContractsTable/VendorContractTable'
import { VendorEarningCard } from '@components/molecules/VendorEarningCard/VendorEarningCard'
import { VendorEarningReport } from '@components/organisms/VendorEarningReport/VendorEarningReport'
import { PendingPaymentCard } from '@components/organisms/PendingPaymentCard/PendingPaymentCard'
import { VendorPaymentTable } from '@components/organisms/VendorPaymentTable/VendorPaymentTable'

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
    <div className="flex h-screen bg-white dark:bg-gray-900">
      <DesktopSidebar />
      <div className="flex flex-col flex-1 w-full overflow-y-auto ">
        <div className="flex items-center p-4 border-b z-[9999] sticky top-0 backdrop-filter backdrop-blur-sm gap-4">
          <HeaderText />
          <NotificationPill />
          <UserPill />
        </div>
        <main className="px-4">
          <EmptyContract />
          <VendorPaymentTable />
          <PendingPaymentCard />
          <VendorEarningReport />
          <VendorEarningCard />
          <VendorProjectCard />
          <Tabs />
          <div className="mt-5"></div>
          <VendorContractTable />
          <div className="mt-5"></div>
          <StatsCard />
          <VendorChart />
          <VendorProfileCard />
          <SectionHeading />
          <VendorProjectListItem />

          <ProfileForm />
          <Link href="/login">
            <a className="bg-indigo-200 rounded p-2 text-indigo-600">
              Go to login
            </a>
          </Link>

          <ActiveLink activeClassName="bg-rose-100 text-rose-600" href="/">
            <a className="bg-indigo-200 rounded p-2 text-indigo-600">
              Homepage
            </a>
          </ActiveLink>
          <Button
            onClick={() => handleSignout()}
            className="mt-6 h-10"
            type="submit"
          >
            Log out
          </Button>
        </main>
      </div>
    </div>
  )
}

export default Home
