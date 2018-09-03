import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { ResultModule } from './result/result.module';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    PagesRoutingModule,
    ThemeModule,
    // ResultModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
