import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { KeyUpComponent_v1 } from './keyup/keyup.component';
import { KeyUpComponent_v2 } from './keyup/keyup.component';
import { KeyUpComponent_v3 } from './keyup/keyup.component';
import { KeyUpComponent_v4 } from './keyup/keyup.component';
import { LoopbackComponent } from './loop-back/loop-back.component';
import { LittleTourComponent } from './little-tour/little-tour.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ClickMeComponent,
    KeyUpComponent_v1,
    KeyUpComponent_v2,
    KeyUpComponent_v3,
    KeyUpComponent_v4,
    LoopbackComponent,
    LittleTourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
