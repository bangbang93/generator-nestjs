import {ClassValidationPipe} from '@bangbang93/utils/nestjs/class-validation.pipe.js'
import {HttpExceptionFilter} from '@bangbang93/utils/nestjs/http-exception.filter.js'
import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {LoggerModule} from 'nestjs-pino'
import {fileURLToPath} from 'url'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: fileURLToPath(new URL('../../.env', import.meta.url)),
      load: [
        () => ({
          PROJECT_ROOT: fileURLToPath(new URL('../../', import.meta.url)),
          APP_NAME: '<%= appName %>',
        }),
      ],
    }),
    LoggerModule.forRoot(),
  ],

  providers: [ClassValidationPipe, HttpExceptionFilter],
})
export class AppModule {}
