import { join } from 'path'
import * as Generator from 'yeoman-generator'

interface IAnswer {
  appName: string
}

export default class NestjsGenerator extends Generator {
  private answer: IAnswer
  public paths() {
    this.sourceRoot(join(__dirname, '../../templates/app'))
    this.log(this.templatePath())
  }

  public async prompting() {
    this.answer = await this.prompt<IAnswer>([
      {
        type: 'input',
        message: 'app name',
        name: 'appName'
      }
    ])
  }

  public async writing() {
    this.copyTemplate(this.templatePath(), this.destinationPath(), {
      globOptions: {
        dot: true,
        ignore: ['**/node_modules']
      }
    }, this.answer)
    this.fs.copy(this.destinationPath('.env.defaults'), this.destinationPath('.env'))
    this.fs.copy(this.templatePath('.gitignore-template'), this.destinationPath('.gitignore'))
  }
}
