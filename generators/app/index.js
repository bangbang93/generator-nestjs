"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const Generator = require("yeoman-generator");
class NestjsGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.args = args;
        this.opts = opts;
        if (typeof args === 'string') {
            this.name = args;
        }
        else {
            this.name = args[0];
        }
    }
    paths() {
        this.sourceRoot(path_1.join(__dirname, '../../templates/app'));
        this.log(this.templatePath());
    }
    async prompting() {
        const answer = await this.prompt([
            {
                type: 'confirm',
                name: 'grpc',
                message: 'is enable grpc?',
            }
        ]);
        this.log(answer);
    }
    async writing() {
        this.log(this.args);
        this.copyTemplate(this.templatePath(), this.destinationPath(this.name), {
            globOptions: {
                dot: true,
                ignore: ['**/node_modules']
            }
        });
    }
}
exports.default = NestjsGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTJCO0FBQzNCLDhDQUE2QztBQU03QyxNQUFxQixlQUFnQixTQUFRLFNBQVM7SUFFcEQsWUFDa0IsSUFBdUIsRUFDdEIsSUFBYTtRQUU5QixLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBSEQsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBUztRQUc5QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtTQUNqQjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDcEI7SUFDSCxDQUFDO0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sS0FBSyxDQUFDLFNBQVM7UUFDcEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFVO1lBQ3hDO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRSxNQUFNO2dCQUNaLE9BQU8sRUFBRSxpQkFBaUI7YUFDM0I7U0FDRixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2xCLENBQUM7SUFFTSxLQUFLLENBQUMsT0FBTztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0RSxXQUFXLEVBQUU7Z0JBQ1gsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsTUFBTSxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDNUI7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUF2Q0Qsa0NBdUNDIn0=