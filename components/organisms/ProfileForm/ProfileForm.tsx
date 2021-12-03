import { Divider } from '@components/atoms/Divider/Divider'
import {
  Label,
  Input,
  HelperText,
  Textarea,
  Select,
  Button,
} from '@windmill/react-ui'
import React from 'react'
import Image from 'next/image'
import { indianState } from '@utils//constants'
import { Loader } from '@components/atoms/Loader/Loader'

interface Props {}

export const ProfileForm = (props: Props) => {
  const a = 1
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
        <p className="mt-1 text-sm text-gray-600">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>
      <Divider />
      <div className="flex flex-col items-center border p-4  rounded-lg">
        <div className="flex flex-col max-w-lg  gap-6">
          {/* profile image */}
          <div>
            <div className="mt-1 flex items-center">
              <span className="inline-block h-20 w-20 rounded-full overflow-hidden bg-gray-100">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <button
                type="button"
                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Change
              </button>
            </div>
          </div>
          {/* profile image */}
          <div>
            <Label>
              <span className="font-bold md:font-medium">Name</span>
              <Input
                // {...register('name')}
                id="name"
                name="name"
                className="mt-1"
                placeholder="John Doe"
                css={undefined}
              />
              {/* <HelperText valid={false}>{errors.name?.message}</HelperText> */}
            </Label>
          </div>
          <div>
            <Label>
              <span className="font-medium">Mobile Number</span>
              <div className="relative">
                <Input
                  // {...register('mobile')}
                  type="tel"
                  maxLength="10"
                  id="mobile"
                  name="mobile"
                  className="mt-1 pl-10"
                  css={undefined}
                />
                <span className="absolute h-[19px] left-2 top-1/2 transform -translate-y-1/2">
                  <Image
                    src="/images/india-flag.svg"
                    alt="indian flag"
                    height="19"
                    width="19"
                  />
                </span>
              </div>
              {/* <HelperText valid={false}>{errors.mobile?.message}</HelperText> */}
            </Label>
          </div>
          <div>
            <Label>
              <span className="font-medium">About</span>
              <Textarea
                // {...register('name')}
                id="name"
                name="name"
                className="mt-1"
                placeholder="John Doe"
                css={undefined}
              />
              {/* <HelperText valid={false}>{errors.name?.message}</HelperText> */}
              <HelperText>Brief description for your profile.</HelperText>
            </Label>
          </div>
          <div>
            <Label>
              <span className="font-bold md:font-medium">Business Name</span>
              <Input
                // {...register('name')}
                id="name"
                name="name"
                className="mt-1"
                placeholder="John Doe"
                css={undefined}
              />
              {/* <HelperText valid={false}>{errors.name?.message}</HelperText> */}
            </Label>
          </div>
          <div>
            <Label>
              <span className="font-bold md:font-medium">Business Address</span>
              <Textarea
                // {...register('name')}
                id="name"
                name="name"
                className="mt-1"
                placeholder="Address"
                css={undefined}
              />
              {/* <HelperText valid={false}>{errors.name?.message}</HelperText> */}
            </Label>
          </div>
          <div className="flex gap-8">
            <Label>
              <span className="font-bold md:font-medium">City</span>
              <Input
                // {...register('name')}
                id="name"
                name="name"
                className="mt-1"
                placeholder="City"
                css={undefined}
              />
              {/* <HelperText valid={false}>{errors.name?.message}</HelperText> */}
            </Label>
            <Label>
              <span className="font-bold md:font-medium">Pin Code</span>
              <Input
                // {...register('name')}
                id="name"
                name="name"
                className="mt-1"
                placeholder="Pin Code"
                css={undefined}
              />
              {/* <HelperText valid={false}>{errors.name?.message}</HelperText> */}
            </Label>
          </div>
          <div>
            <Label>
              <span className="font-bold md:font-medium">State</span>
              <Select css={undefined} className="mt-1">
                {indianState.map((item) => (
                  <option>{item}</option>
                ))}
              </Select>
              {/* <HelperText valid={false}>{errors.name?.message}</HelperText> */}
            </Label>
          </div>

          <Button className="my-6 h-10" block type="submit">
            {true ? <span>Save Details</span> : <Loader />}
          </Button>
          {/* end of fields */}
        </div>
      </div>
    </div>
  )
}
