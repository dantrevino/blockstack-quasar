// import something here
// import * as blockstack from 'blockstack'
import { UserSession } from 'blockstack'

const userSession = new UserSession()

// "async" is optional
export default ({ router, Vue }) => {
  // something to do
  // Vue.prototype.$blockstack = blockstack
  // Vue.prototype.$userSession = userSession

  // add router to boot file (plugin) per example at
  // https://quasar.dev/quasar-cli/cli-documentation/boot-files#Router-authentication
  //
  router.beforeEach((to, from, next) => {
    if (to.matched.some(page => page.meta.requiresAuth)) {
      if (!userSession.isUserSignedIn()) {
        next('/')
      } else {
        next()
      }
    } else {
      next()
    }
  })
}

export { userSession }
