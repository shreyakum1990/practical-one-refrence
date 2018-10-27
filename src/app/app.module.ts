import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { AverageComponent } from './average/average.component';
import { HeronsComponent } from './herons/herons.component';
import { DoctorComponent } from './doctor/doctor.component';
import { BindingComponent } from './binding/binding.component';
import { CrudComponent } from './crud/crud.component';
import { ProductComponent } from './product/product.component';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { CrudOneComponent } from './crud-one/crud-one.component';
import { FishesComponent } from './fishes/fishes.component';
// import { TeacherComponent } from './teacher/teacher.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ActorInfoComponent } from './actor-info/actor-info.component';
import { CityComponent } from './city/city.component';
import { MycalcComponent } from './mycalc/mycalc.component';
import { TriangleComponent } from './triangle/triangle.component';
import { TriService } from './services/triangle.service';

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    AverageComponent,
    HeronsComponent,
    DoctorComponent,
    BindingComponent,
    CrudComponent,
    ProductComponent,
    DoctorInfoComponent,
    EmployeeInfoComponent,
    CrudOneComponent,
    FishesComponent,
    // TeacherComponent,
    EmployeeComponent,
    ProductInfoComponent,
    NewProductComponent,
    ActorInfoComponent,
    CityComponent,
    MycalcComponent,
    TriangleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   
  ],
  providers: [TriService],
  bootstrap: [AppComponent]
})
export class AppModule { }
