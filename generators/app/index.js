"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const Generator = require("yeoman-generator");
class NestjsGenerator extends Generator {
    paths() {
        this.sourceRoot(path_1.join(__dirname, '../../templates/app'));
        this.log(this.templatePath());
    }
    async prompting() {
        this.answer = await this.prompt([
            {
                type: 'input',
                message: 'app name',
                name: 'appName'
            }
        ]);
    }
    async writing() {
        this.copyTemplate(this.templatePath(), this.destinationPath(), {
            globOptions: {
                dot: true,
                ignore: ['**/node_modules']
            }
        }, this.answer);
    }
}
exports.default = NestjsGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTJCO0FBQzNCLDhDQUE2QztBQU03QyxNQUFxQixlQUFnQixTQUFRLFNBQVM7SUFFN0MsS0FBSztRQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sS0FBSyxDQUFDLFNBQVM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQVU7WUFDdkM7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRTtZQUM3RCxXQUFXLEVBQUU7Z0JBQ1gsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsTUFBTSxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDNUI7U0FDRixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNqQixDQUFDO0NBQ0Y7QUF6QkQsa0NBeUJDIn0=