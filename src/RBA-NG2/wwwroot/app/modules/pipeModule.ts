
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { KeysPipe } from "../pipes/keys";

@NgModule({
    declarations: [KeysPipe],
    imports: [CommonModule],
    exports: [KeysPipe]
})

export class PipeModule { }