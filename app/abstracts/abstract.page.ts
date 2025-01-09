import { step } from "../../helpers/step"
import { AbstractComponent } from "./abstract.component"
export abstract class AbstractPage extends AbstractComponent  {

    public abstract pagePath: string;

    @step()
    async open(path?: string) {
        await this.page.goto(path ?? this.pagePath);
        await this.expectLoaded();
    }

}