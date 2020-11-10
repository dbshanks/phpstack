import barba from '@barba/core'
import barbaRouter from '@barba/router'
import { routes } from './routes/routes'

barba.use(barbaRouter, {
  routes: routes,
})

barba.init({
  transitions: {
    enter({ next }) {},
    leave({ current }) {},
  },
})

// enter({ next }) {
//   animationEnter(next.container)
//   titleMove(next.container)
// },
// leave({ current }) {
//   animationLeave(current.container)
// },
