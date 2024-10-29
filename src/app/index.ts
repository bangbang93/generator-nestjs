import { fileURLToPath } from "url";
import Generator from "yeoman-generator";

interface IAnswer {
  appName: string;
}

export default class NestjsGenerator extends Generator {
  private answer!: IAnswer;
  public paths(): void {
    this.sourceRoot(
      fileURLToPath(new URL("../../templates/app", import.meta.url)),
    );
    this.log(this.templatePath());
  }

  public async prompting(): Promise<void> {
    this.answer = await this.prompt<IAnswer>([
      {
        type: "input",
        message: "app name",
        name: "appName",
      },
    ]);
  }

  public writing(): void {
    this.copyTemplate(
      this.templatePath(),
      this.destinationPath(),
      {
        globOptions: {
          dot: true,
          ignore: ["**/node_modules"],
        },
      },
      this.answer,
    );
    this.fs.copy(
      this.destinationPath(".env.defaults"),
      this.destinationPath(".env"),
    );
    this.fs.move(
      this.destinationPath(".gitignore-template"),
      this.destinationPath(".gitignore"),
    );
  }
}
