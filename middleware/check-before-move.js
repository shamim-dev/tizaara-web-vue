export default function ({ store }) {
  store.app.router.beforeEach((to, from, next) => {
    if(confirm("Are you sure?")) {
      next()
    } else {
      next(false)
    }
  })
}