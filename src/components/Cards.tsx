import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

interface CardProps {
  title?: string
  children?: React.ReactNode
  link?: string
  linkTitle?: string
  icon?: React.ReactNode
}

export default function Card({
  title,
  children,
  link,
  linkTitle,
  icon,
}: CardProps) {
  return (
    <div className="my-5 border  border-pink-900 container overflow-auto p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-lg items-center  font-semibold flex gap-2">
          {icon}
          {title}
        </h1>
        <a
          href={link}
          className="text-xs flex items-center  text-blue-600"
          target="_blank"
          rel="noreferrer"
        >
          {linkTitle ? (
            <>
              {linkTitle} <MdOutlineKeyboardArrowRight />
            </>
          ) : null}
        </a>
      </div>
      <div className="whitespace-normal">{children}</div>
    </div>
  )
}
