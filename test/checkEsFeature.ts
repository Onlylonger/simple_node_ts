import * as ReflectSupports from 'es-feature-tests'

ReflectSupports('all', (results, timestamp) => {
  /* tslint:disable no-console */
  console.log(`当前node 版本: ${process.version}`)
  console.log(results)
  /* tslint:enable no-console */
})
