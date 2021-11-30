import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import React, { Children, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  activeClassName?: string
}

const ActiveLink = ({
  children,
  activeClassName,
  ...props
}: ActiveLinkProps) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child?.props?.className || ''

  // exclude query params
  const isActiveUrl = asPath.split('?')[0] === props.href

  // append activeClassName on right to override childCLassname CSS
  const className = isActiveUrl
    ? `${childClassName} ${activeClassName}`.trim()
    : childClassName

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

ActiveLink.defaultProps = {
  activeClassName: '',
}

export default ActiveLink
