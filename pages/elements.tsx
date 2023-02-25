import type { NextPage } from 'next'
import Link from 'next/link'
import { Button } from '@windmill/react-ui'
import { UserPill } from '@components/molecules/UserPill/UserPill'
import { NotificationPill } from '@components/molecules/NotificationPill/NotificationPill'
import { HeaderText } from '@components/atoms/HeaderText/HeaderText'
import ActiveLink from '@components/atoms/ActiveLink/ActiveLink'
import { DesktopSidebar } from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { EmptyContract } from '@components/molecules/EmptyContract/EmptyContract'
import { VendorEarningReport } from '@components/organisms/VendorEarningReport/VendorEarningReport'
import { useReactiveVar } from '@apollo/client'
import { userGlobalState } from '@components/globalStates/UserGlobal/UserGlobalState'
import { handleSignout } from '@components/globalStates/UserGlobal/utils'
import { Breadcrumb } from '@components/molecules/Breadcrumb/Breadcrumb'
import { ProjectDetailItem } from '@components/molecules/ProjectDetailItem/ProjectDetailItem'
import { SectionHeading } from '@components/molecules/SectionHeading/SectionHeading'
import { StatsCard } from '@components/molecules/StatsCard/StatsCard'
import { TableTabs } from '@components/molecules/TableTabs/TableTabs'
import { VendorEarningCard } from '@components/molecules/VendorEarningCard/VendorEarningCard'
import { PendingPaymentCard } from '@components/organisms/PendingPaymentCard/PendingPaymentCard'
import { ProfileForm } from '@components/organisms/ProfileForm/ProfileForm'
import { ProjectHeader } from '@components/organisms/ProjectHeader/ProjectHeader'
import { VendorChart } from '@components/organisms/VendorChart/VendorChart'
import { VendorContractTable } from '@components/organisms/VendorContractsTable/VendorContractTable'
import { VendorPaymentTable } from '@components/organisms/VendorPaymentTable/VendorPaymentTable'
import { VendorProfileCard } from '@components/organisms/VendorProfileCard/VendorProfileCard'
import { VendorProjectCard } from '@components/organisms/VendorProjectCard/VendorProjectCard'
import { VendorProjectListItem } from '@components/organisms/VendorProjectListItem/VendorProjectListItem'

const ElementsPage: NextPage = () => {
  const { user } = useReactiveVar(userGlobalState)
  // const { data } = useQuery<GetEmployeeDetailsQuery>(query)
  // console.log(data?.getEmployeeDetails?.employeeName)

  return (
    <>
      <DesktopSidebar />
      <div className="flex flex-col w-full overflow-y-auto ">
        <div className="flex items-center p-4 border-b z-[9998] sticky top-0 backdrop-filter backdrop-blur-sm gap-4">
          <HeaderText />
          <NotificationPill />
          <UserPill />
        </div>
        <main className="px-4">
          <EmptyContract />
          <ProjectDetailItem />
          <ProjectHeader />
          <Breadcrumb />
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

          <ActiveLink activeClassName="bg-rose-100 text-rose-600" href="/">
            <a className="bg-indigo-200 rounded p-2 text-indigo-600">
              Homepage
            </a>
          </ActiveLink>
          {user?.id ? (
            <Button
              onClick={() => handleSignout()}
              className="mt-6 h-10"
              type="submit"
            >
              Log out
            </Button>
          ) : (
            <Link href="/login">
              <a className="bg-indigo-200 rounded p-2 text-indigo-600">
                Go to login
              </a>
            </Link>
          )}
        </main>
      </div>
    </>
  )
}

export default ElementsPage
