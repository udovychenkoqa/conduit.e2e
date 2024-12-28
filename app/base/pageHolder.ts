import type { Page } from '@playwright/test';
import { step } from "../../helpers/step";

export abstract class PageHolder { 
    constructor(protected page: Page) { }
    
}