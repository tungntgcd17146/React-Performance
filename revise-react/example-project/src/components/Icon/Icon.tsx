/* eslint-disable @typescript-eslint/no-explicit-any */
interface IconProps {
  Icon: any
}

const CommonIcon = ({ Icon }: IconProps) => {
  return (
    <div className='w-[48px] h-[48px] p-[12px]'>
      <Icon style={{ color: 'gray-800' }} />
    </div>
  )
}

export default CommonIcon
