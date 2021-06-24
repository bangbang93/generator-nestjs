import { join } from 'path'
import * as Generator from 'yeoman-generator'

interface IAnswer {
  grpc: boolean
}

export default class NestjsGenerator extends Generator {
  public paths() {
    this.sourceRoot(join(__dirname, '../../templates/app'))
    this.log(this.templatePath())
  }

  public async prompting() {
    const answer = await this.prompt<IAnswer>([
      {
        type: 'confirm',
        name: 'grpc',
        message: 'is enable grpc?',
      }
    ])
    this.log(answer)
  }

  public async writing() {
    this.copyTemplate(this.templatePath(), this.destinationPath(), {
      globOptions: {
        dot: true,
        ignore: ['**/node_modules']
      }
    })
  }
}
