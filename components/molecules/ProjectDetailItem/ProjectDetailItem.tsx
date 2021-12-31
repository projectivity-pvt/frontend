import React from 'react'
import Icon from 'public/images/notification.svg'
interface Props {}

export const ProjectDetailItem = (props: Props) => {
  return (
    <div className="flex ">
      <div className="sel self-end">
        <Icon height={30} width={30} />
      </div>
      <div>
        <p className="text-xs text-gray-500 font-medium">Project Name</p>
        <p className="text-base font-medium">Burger Singh Ad shoot</p>
      </div>
    </div>
  )
}
