import { BUG_ADD, BUG_REMOVE } from './actionTypes'

// export function bugAdd(description) {
//   return {
//     type: BUG_ADD,
//     payload: {
//       description: 'Bug1',
//     },
//   }
// }

export const bugAdd = description => ({
  type: BUG_ADD,
  payload: {
    description,
  },
})

export const bugRemove = () => ({
  type: BUG_REMOVE,
  payload: { id: 1 },
})
