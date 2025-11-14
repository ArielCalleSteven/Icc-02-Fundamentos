import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './Formularios.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Formularios { 

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log('Datos del formulario:', this.myForm.value);
    alert('Formulario enviado con éxito!');
    this.myForm.reset();
  }

  isValidField(fieldName: string): boolean | null {
    return(
      this.myForm.controls[fieldName].errors &&
      this.myForm.controls[fieldName].touched
    );
  }


  getFieldError(fieldName: string): string | null{
    if(!this.myForm.controls[fieldName]) return null;

    const errors = this.myForm.controls[fieldName].errors ?? {};

    for (const key of Object.keys(errors)) {
      switch(key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minLength':
          return 'Este campo es requerido';   
        case 'min':
          return `Valor mínimo de ${errors['min'].min}`; 
        case 'email':
          return 'Valor de correo invalido';   
      
      }
    }
    return null;
  }



  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    edad: [0,[Validators.required, Validators.min(18)]],
    correo: ['',[Validators.required, Validators.email]],

  });


  
}




