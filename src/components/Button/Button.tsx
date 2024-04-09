import { FC } from "react"
import s from './Button.module.scss'

type PropsType = {
  title: string
  className?: string
  onClick?: () => void
}

export const Button: FC<PropsType> = ({title, className, onClick}) => {
  return (
    <button className={[s.button, className].join(' ')} onClick={onClick}>{title}</button>
  )
}