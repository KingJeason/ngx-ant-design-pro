import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ResultRoutingModule, routedComponents } from './result-routing.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { ResultFailComponent } from './fail/fail.component';
import { ResultSuccessComponent } from './success/success.component';
@NgModule({
  imports: [
    ThemeModule,
    NgZorroAntdModule,
    ResultRoutingModule,
  ],
  declarations: [
    ResultFailComponent,
    ResultSuccessComponent
  ],
})
export class ResultModule { }
