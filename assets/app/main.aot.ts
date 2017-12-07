import './polyfills';

import { platformBrowser } from '@angular/platform-browser';
//the next file will be built during the build process and is not there yet
import { AppModuleNgFactory } from "./app.module.ngfactory";

import { enableProdMode } from "@angular/core";

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);