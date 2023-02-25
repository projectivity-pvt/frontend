import { UserType } from '@components/globalStates/UserGlobal/UserGlobalState'
import { Label, Input } from '@windmill/react-ui'
import React from 'react'

interface Props {
  userType: UserType
  setUserType: React.Dispatch<React.SetStateAction<UserType>>
}

export const UserTypeSelector = (props: Props) => {
  const { userType, setUserType } = props

  const onChangeHandler = (value: UserType) => {
    setUserType(value)
  }

  return (
    <div className="mt-5">
      <span>Registering as?</span>
      <div className="flex items-center pt-4 gap-8">
        <Label radio className="border py-2 px-3 rounded-full cursor-pointer">
          <Input
            onChange={() => onChangeHandler(UserType.BUSINESS_ADMIN)}
            css={undefined}
            type="radio"
            name="user_type"
            checked={userType === UserType.BUSINESS_ADMIN}
          />
          <span className="ml-2">Business</span>
        </Label>
        <Label radio className="border py-2 px-3 rounded-full cursor-pointer">
          <Input
            onChange={() => onChangeHandler(UserType.VENDOR)}
            css={undefined}
            type="radio"
            name="user_type"
            checked={userType === UserType.VENDOR}
          />
          <span className="ml-2">Vendor</span>
        </Label>
      </div>
    </div>
  )
}
