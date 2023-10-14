import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class IconModule {
  constructor(public matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("application/pdf", this.setPath("assets/icons/icons8-pdf-100.svg"));
    this.matIconRegistry.addSvgIcon("application/vnd.openxmlformats-officedocument.wordprocessingml.document", this.setPath("assets/icons/icons8-docx-80.svg"));
  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
