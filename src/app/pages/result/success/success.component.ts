import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'result-success',
  templateUrl: './success.component.html',
})
export class ResultSuccessComponent {
  constructor(public msg: NzMessageService) {}
}
