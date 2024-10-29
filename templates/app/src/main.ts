import {bootstrap} from './index.js'

bootstrap().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err)
  // eslint-disable-next-line n/no-process-exit
  process.exit(1)
})
