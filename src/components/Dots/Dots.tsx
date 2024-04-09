import { FC } from "react"
import s from './Dots.module.scss'

type PropsType = {
  count: number
  activeDot: number
  className?: string
  onClick?: (index: number) => void
}

export const Dots: FC<PropsType> = ({count, activeDot, className, onClick}) => {
  const clickDotHandler = (index: number) => () => {
    if (onClick) {
      onClick(index)
    }
  }

  return (
    <div className={[s.container, className].join(' ')}>
      <div className={s.dots}>
        {[...Array(count)].map((_, dot) => (
          <button key={dot} className={[s.dot, activeDot === dot && s.dotActive].join(' ')} onClick={clickDotHandler(dot)}></button>
        ))}
      </div>
      <div className={s.label}>{'#'+(activeDot+1)}</div>
    </div>
  )
}