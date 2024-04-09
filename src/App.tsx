import { useState } from 'react'
import s from './App.module.scss'
import { Dots } from './components/Dots/Dots'
import { ProgressBar } from './components/ProgressBar/ProgressBar'
import { Button } from './components/Button/Button'
import { getRandonItems } from './functions/getRandomItems'

const items = getRandonItems()

const App = () => {
  const [activeDot, setActiveDot] = useState(0)
  const [activeItem, setActiveItem] = useState(items[activeDot])
  const [currentTime, setCurrentTime] = useState(0)
  
  const setActiveSlide = (index: number) => {
    if (items[index]) {
      setActiveDot(index)
      setActiveItem(items[index])
      setCurrentTime(0)
    }
  }

  const progressFinishHandler = () => {
    setActiveSlide(activeDot + 1) 
  }

  const resetHandler = () => {
    setActiveSlide(0)
  }

  return (
    <>
      <div className={s.container}>
        <img className={s.background} src={activeItem.background} alt={activeItem.title} />
        <div className={s.overlay}></div>
        <Dots className={s.dots} count={items.length} activeDot={activeDot} onClick={setActiveSlide} />
        <Button className={s.reset} title={'Reset'} onClick={resetHandler} />
        <div className={s.content}>
          <div className={s.title}>{activeItem.title}</div>
          <div className={s.tags}>
            {activeItem.tags.map(tag => (
              <span key={tag} className={s.tag}>{tag}</span>
            ))}
          </div>
          <div className={s.description}>{activeItem.description}</div>
          <ProgressBar currentTime={currentTime} total={activeItem.secounds} onFinish={progressFinishHandler} setCurrentTime={setCurrentTime} />
        </div>
      </div>
    </>
  )
}

export default App