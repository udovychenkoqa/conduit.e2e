import {step} from "../../helpers/step"
import { PageHolder } from "./abstract"

export abstract class AbstractComponent extends PageHolder {
    
    abstract expectLoaded(message?: string): Promise<void>;

}