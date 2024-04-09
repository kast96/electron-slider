import { ItemType } from "../types/types"
import waterImage from '../images/background/water.png'
import starsImage from '../images/background/stars.png'

export const itemGroups = [
  [
    {
      title: 'Sea of Thieves',
      tags: ['Microsoft Studios', 'Action & Adventure'],
      description: 'Sea of Thieves offers the essential pirate experience, from sailing and fighting to exploring and looting – everything you need to live the pirate life and become a legend in your own right. With no set roles, you have complete freedom to...',
      secounds: 5,
      background: waterImage,
    },
  ],
  [
    {
      title: 'Stars of Akarios',
      tags: ['OOMM', 'Настольная игра'],
      description: 'Stars of Akarios - это настольная кооперативная настольная игра для 1-4 игроков, дейтвие которой происходит в Draconian System. Вы и ваши друзья близки к завершению обучения на пилотов, когда неизвестный враг атакует и уничтожает вашу родную планету. Вам удается сбежать и вы оказываетесь привлечены к  охране последнего оставшегося корабля беженцев.',
      secounds: 8,
      background: starsImage,
    },
  ],
] as Array<Array<ItemType>>