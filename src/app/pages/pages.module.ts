import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule} from './pages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    PagesRoutingModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
