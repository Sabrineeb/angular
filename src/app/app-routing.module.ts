import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { Router } from "@angular/router";
const routers:Router=[
    {path:'',Component:AccueilComponent},
    {path:'connexion',Component:ConnexionComponent},
    {path:'inscription',Component:InscriptionComponent},
    {path:'accueil',Component:AccueilComponent},


]
@NgModule({
    imports:[RouterModule.forRoot(routers)],
    exports:[RouterModule],
})
export class AppRouter{}


