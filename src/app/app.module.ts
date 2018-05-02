import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'



import { AppComponent } from './app.component';
import { PrescriberListComponent } from './prescriber-list.component';
import { WelcomeImageComponent } from './welcome-image.component';
import { PrescriberFilterPipe } from './filter.pipe';
import { PrescriberDetailsComponent } from './prescriber-details/prescriber-details.component';
import { TabSetupComponent } from './tab-setup/tab-setup.component';
import { PrescriberService } from './prescriber.service';
import { HttpModule } from '@angular/http';
import { AddPrescriberComponent } from './add-prescriber/add-prescriber.component';

@NgModule({
  declarations: [AppComponent, PrescriberListComponent, PrescriberDetailsComponent, PrescriberFilterPipe, WelcomeImageComponent, TabSetupComponent, AddPrescriberComponent],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([
      { path: 'prescribers', component: PrescriberListComponent },
      { path: 'homepage', component: WelcomeImageComponent },
      { path: 'prescribers/:id', component: PrescriberDetailsComponent },
      { path: 'addPrescriber', component: AddPrescriberComponent }
    ])],
  providers: [PrescriberService],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = "App Module"
}
