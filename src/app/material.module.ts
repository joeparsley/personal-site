// Angular Material components

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
    imports: [
			MatButtonModule,
			MatMenuModule,
			MatTooltipModule,
		],
    exports: [
			MatButtonModule,
			MatMenuModule,
			MatTooltipModule,
		],
})

export class MaterialModule {}
