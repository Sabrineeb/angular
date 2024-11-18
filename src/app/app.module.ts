import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { RouterModule } from "@angular/router";
@NgModule({
    declarations:[
        AccueilComponent,
        ConnexionComponent,
        InscriptionComponent,
        AppComponent,
    ],
    imports:[
        RouterModule,
        BrowserModule ,],
    bootstrap:[AppComponent],
})
export class AppModule{

}