import configureStoreDev from './configureStore.dev'
import configureStoreProd from './configureStore.prod'
import configureStoreTest from './configureStore.test'

const ENV = process.env.NODE_ENV

export default (ENV === 'development'
  ? configureStoreDev
  : ENV === 'test' ? configureStoreTest : configureStoreProd)
