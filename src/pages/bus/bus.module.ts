import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusPage } from './bus';
import { GreenBusIonItemComponent } from '../../components/green-bus-ion-item/green-bus-ion-item';
import { GreenBusIonItemWrapperComponent } from '../../components/green-bus-ion-item-wrapper/green-bus-ion-item-wrapper';

@NgModule({
  declarations: [
    BusPage,
    GreenBusIonItemComponent,
    GreenBusIonItemWrapperComponent
  ],
  imports: [
    IonicPageModule.forChild(BusPage)
  ]
})
export class BusPageModule {}
