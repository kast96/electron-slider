import { itemGroups } from "../data/items"

export const getRandonItems = () => {
  return itemGroups.map(group => group[Math.floor(Math.random() * group.length)])
}