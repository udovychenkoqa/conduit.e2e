import {step} from "../../helpers/step"
import { PageHolder } from "./pageHolder"

export abstract class BaseComponent extends PageHolder {
    abstract expectLoaded(message?: string): Promise<void>;

    @step()
    async isLoaded(): Promise<boolean> {
        try { 
            await this.expectLoaded()
            return true
        } catch {
            return false
        }
    }
}