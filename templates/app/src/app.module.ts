import {ClassValidationPipe} from '@bangbang93/utils/nestjs/class-validation.pipe'
import {HttpExceptionFilter} from '@bangbang93/utils/nestjs/http-exception.filter'
import {Module} from '@nestjs/common'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {BunyanLoggerModule} from 'nestjs-bunyan'
import {join} from 'path'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(__dirname, '../../.env'),
      load: [() => ({
        PROJECT_ROOT: join(__dirname, '../../'),
        APP_NAME: '<%= appName %>',
      })],
    }),
    BunyanLoggerModule.forRootAsync({
      isGlobal: true,
      bunyan: {
        inject: [ConfigService],
        useFactory(configService: ConfigService) {
          return {
            name: '<%= appName %>',
            level: configService.get('LOGLEVEL', 'trace'),
          }
        },
      },
    }),
  ],
  providers: [
    ClassValidationPipe,
    HttpExceptionFilter,
  ],
})
export class AppModule {}
