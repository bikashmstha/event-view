import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent }   from './spinner.component';
import { SpinnerService }   from './spinner.service';

const declarables = [SpinnerComponent]
const providers = [SpinnerService];

@NgModule({
  imports: [CommonModule],
  exports: [SpinnerComponent],
  declarations: [declarables],
})
export class SpinnerModule {
  static providers = providers;
}

// // If I wanted to use this directly, instead of through SharedModule
// @NgModule({
//   imports: [
//     // SharedModule,
//       SpinnerModule,
//   ],
//   providers: [
//     SpinnerModule.providers
//   ]

// })
// export class AppModule { }