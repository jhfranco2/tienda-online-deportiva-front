import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import {HttpClientModule} from '@angular/common/http';
import { ItemsComponent } from './componentes/items/items.component';
import { TiendaService } from './servicios/tienda.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TiendaService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
