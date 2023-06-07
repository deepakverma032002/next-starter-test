
export interface IconProps {
    className?: string
    width?: string | number
    height?: string | number
    fill?: string
    style?: string
    stroke?: string
  }
  
  export interface CheckIconProps extends IconProps {
    border?: string
    check?: string
  }
  
  export interface TokenIconProps extends IconProps {
    isActive?: boolean
  }
  