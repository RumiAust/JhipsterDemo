import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UgDemoSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [UgDemoSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class UgDemoHomeModule {}
