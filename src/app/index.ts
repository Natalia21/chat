import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {routing, RootComponent} from './routes';
import {LocalStorageModule} from 'angular-2-local-storage';
import {store} from './reducers';

import {HeaderComponent} from './components/layout/header';
import {FooterComponent} from './components/layout/footer';
import {ChatComponent} from './components/chat/chat';
import {MsgComponent} from './components/chat/msg';
import {ChatFooterComponent} from './components/chat/chatFooter';
import {LoginComponent} from './components/auth/login';
import {SchrollBottomDirective} from './directives/scrollDirective';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    store,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    })
  ],
  declarations: [
    RootComponent,
    HeaderComponent,
    FooterComponent,
    ChatComponent,
    MsgComponent,
    ChatFooterComponent,
    LoginComponent,
    SchrollBottomDirective
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
