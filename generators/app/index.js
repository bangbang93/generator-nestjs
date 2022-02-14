"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const Generator = require("yeoman-generator");
class NestjsGenerator extends Generator {
    paths() {
        this.sourceRoot((0, path_1.join)(__dirname, '../../templates/app'));
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
        this.fs.copy(this.destinationPath('.env.defaults'), this.destinationPath('.env'));
    }
}
exports.default = NestjsGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTJCO0FBQzNCLDhDQUE2QztBQU03QyxNQUFxQixlQUFnQixTQUFRLFNBQVM7SUFFN0MsS0FBSztRQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBQSxXQUFJLEVBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDLENBQUMsQ0FBQTtRQUN2RCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSxLQUFLLENBQUMsU0FBUztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBVTtZQUN2QztnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRU0sS0FBSyxDQUFDLE9BQU87UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQzdELFdBQVcsRUFBRTtnQkFDWCxHQUFHLEVBQUUsSUFBSTtnQkFDVCxNQUFNLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUM1QjtTQUNGLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDbkYsQ0FBQztDQUNGO0FBMUJELGtDQTBCQyJ9