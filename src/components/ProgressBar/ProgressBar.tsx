import { Dispatch, FC, SetStateAction, useEffect } from "react"
import s from './ProgressBar.module.scss'

type PropsType = {
  total: number
  currentTime: number
  setCurrentTime?: Dispatch<SetStateAction<number>>
  onFinish?: () => void
}

export const ProgressBar: FC<PropsType> = ({total, currentTime, setCurrentTime, onFinish}) => {
  useEffect(() => {
    if (!setCurrentTime) return;

    const intervalId = setInterval(() => {
      setCurrentTime(value => value + 1)
    }, 1000)

    if (currentTime >= total) {
      clearTimeout(intervalId)
      if (onFinish) {
        onFinish()
      }
    }

    return () => clearTimeout(intervalId)
  }, [currentTime, total, setCurrentTime, onFinish])

  return (
    <progress className={s.progress} value={currentTime} max={total} data-value={total - currentTime + 's'} />
  )
}