// app/features/home/home.routing.ts

// Routing for Home Page. Should be pretty Spartan for now.

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

/**
 * Remember Routing Module is a ModuleWithProviders and 
 * All but the App's main RouterModule is forChild instead of for Root.
 */

export const HomeRoutingModule: ModuleWithProviders = RouterModule.forChild([
    { path: '', pathMatch:'full',  component: HomeComponent }
])