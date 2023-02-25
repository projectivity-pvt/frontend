import ActiveLink from '@components/atoms/ActiveLink/ActiveLink'
import { Button } from '@windmill/react-ui'
import Image from 'next/image'
import React from 'react'
import RightArrowIcon from '../../../public/images/right-arrow-circle.svg'
import { EmptyContractProps } from './types'

export const Nodata: React.FC<EmptyContractProps> = (
    props: EmptyContractProps
) => {
    const { title = 'Uh Oh! Nothing to show here' } = props
    return (
        <div className="flex flex-col items-center justify-center">
            <Image
                src="/images/niku3dsearch.png"
                height={180}
                width={200}
                quality={100}
            />
            <ActiveLink href="/vendor/gigs">
                <Button
                    tag="a"
                    layout="link"
                    className="-mt-2 mb-5 text-sm font-bold"
                    iconRight={RightArrowIcon}
                >
                    Sorry, No Data Found...
                </Button>
            </ActiveLink>
        </div>
    )
}
