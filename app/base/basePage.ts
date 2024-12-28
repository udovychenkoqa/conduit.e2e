import { step } from "../../helpers/step"
import { BaseComponent} from "./baseComponent"
export abstract class BasePage extends BaseComponent {

    public abstract pagePath: string;

    @step()
    async open(path?: string) {
        await this.page.goto(path ?? this.pagePath);
        await this.expectLoaded();
    }

}