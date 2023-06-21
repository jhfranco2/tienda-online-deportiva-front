import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsComponent } from './componentes/items/items.component';
import { TiendaService } from './servicios/tienda.service';
import { FooterComponent } from './componentes/footer/footer.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './componentes/items/crear/crear.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: ItemsComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'crear-item', component: CrearComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemsComponent,
    FooterComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [TiendaService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
