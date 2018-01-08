import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { DataService } from './data.service';
import { SmartService } from './smart.service';

@Injectable()
export class ExceptionService extends SmartService implements ErrorHandler {

  constructor(context: Injector) { 
      super(context);
  }

  async handleError(error) {
     console.error("[ERROR]:", error);
     const result = await this.data.sendError({error: error});
     console.log(result);
  }
  
}