import Overview from 'public/images/overview.svg'
import Contract from 'public/images/contract.svg'
import Payments from 'public/images/payments.svg'
import Gigs from 'public/images/gigs.svg'

const IconMap = new Map([
  ['overview', <Overview />],
  ['payments', <Payments />],
  ['contracts', <Contract />],
  ['gigs', <Gigs />],
  ['projects', <Overview />],
  ['hire', <Overview />],
  ['employees', <Overview />],
  ['hire', <Overview />],
  ['hire', <Overview />],
])

export const getIconByName = (name: string) => IconMap.get(name)
