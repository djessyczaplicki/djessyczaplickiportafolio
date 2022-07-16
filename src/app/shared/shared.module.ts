import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  exports: [PrimeNgModule],
  imports: [CommonModule, PrimeNgModule, RouterModule],
})
export class SharedModule {}
