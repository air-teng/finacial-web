import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02LianxiComponent } from './demo02-lianxi/demo02-lianxi.component';
import { Demo03BindingsComponent } from './demo03-bindings/demo03-bindings.component';
import { Demo04LianxiComponent } from './demo04-lianxi/demo04-lianxi.component';
import { MyChangeDirective } from './my-change.directive';
import { Demo05PipeComponent } from './demo05-pipe/demo05-pipe.component';
import { ChangeBgDirective } from './change-bg.directive';
import { Demo06LianxiComponent } from './demo06-lianxi/demo06-lianxi.component';
import { Demo07PipeComponent } from './demo07-pipe/demo07-pipe.component';
import { TestPipe } from './test.pipe';
import { SexPipe } from './sex.pipe';
import { Demo08ServiceComponent } from './demo08-service/demo08-service.component';
import { Demo09CartComponent } from './demo09-cart/demo09-cart.component';
import { Demo09ListComponent } from './demo09-list/demo09-list.component';
import { Demo09HeaderComponent } from './demo09-header/demo09-header.component';
import { Demo10ChatroomComponent } from './demo10-chatroom/demo10-chatroom.component';
import { Demo10UserComponent } from './demo10-user/demo10-user.component';
import { Demo11ParentComponent } from './demo11-parent/demo11-parent.component';
import { Demo11SonComponent } from './demo11-son/demo11-son.component';
import { Demo12HttpComponent } from './demo12-http/demo12-http.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo01Component,
    Demo02LianxiComponent,
    Demo03BindingsComponent,
    Demo04LianxiComponent,
    MyChangeDirective,
    Demo05PipeComponent,
    ChangeBgDirective,
    Demo06LianxiComponent,
    Demo07PipeComponent,
    TestPipe,
    SexPipe,
    Demo08ServiceComponent,
    Demo09CartComponent,
    Demo09ListComponent,
    Demo09HeaderComponent,
    Demo10ChatroomComponent,
    Demo10UserComponent,
    Demo11ParentComponent,
    Demo11SonComponent,
    Demo12HttpComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
