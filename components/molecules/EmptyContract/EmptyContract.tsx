import ActiveLink from '@components/atoms/ActiveLink/ActiveLink'
import { Button } from '@windmill/react-ui'
import Image from 'next/image'
import React from 'react'
import RightArrowIcon from '../../../public/images/right-arrow-circle.svg'
import { EmptyContractProps } from './types'

export const EmptyContract: React.FC<EmptyContractProps> = (
  props: EmptyContractProps
) => {
  const { title = 'Uh Oh! Nothing to show here' } = props
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/images/niku3dsearch.png"
        height={290}
        width={290}
        quality={100}
      />
      <p className="text-lg text-gray-600">{title}</p>
      <ActiveLink href="/vendor/gigs">
        <Button
          tag="a"
          layout="link"
          className="mt-4 text-xl font-bold"
          iconRight={RightArrowIcon}
        >
          Create a gig to get started
        </Button>
      </ActiveLink>
    </div>
  )
}
