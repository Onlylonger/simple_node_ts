import * as ReflectSupports from 'es-feature-tests'

ReflectSupports('all', (results, timestamp) => {
  console.log(`当前node 版本: ${process.version}`)
  console.log(results)
})
