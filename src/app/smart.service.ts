import { Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "./data.service";
import {ActivatedRoute, Router} from "@angular/router";

export abstract class BaseInjector {

    protected router: Router;
    protected route: ActivatedRoute;

    constructor(context: Injector) {
        this.router = context.get(Router);
        this.route = context.get(ActivatedRoute);
    }
}

export abstract class SmartService extends BaseInjector {
    
  protected data: DataService;

  constructor(context: Injector) {
    super(context);
    this.data = context.get(DataService);
  }

}