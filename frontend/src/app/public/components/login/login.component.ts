import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@auth/services';
import { firstValueFrom } from 'rxjs';
import { CustomInputComponent } from "../../../shared/components/custom-input/custom-input.component";

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  authService = inject(AuthService);

  loginForm = new FormGroup<LoginForm>({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.email, Validators.required]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  async onSubmit() {
    if (this.loginForm.valid) {
      try {
        await firstValueFrom(this.authService.login(this.loginForm.getRawValue()));
      } catch (error) {
        console.error(error);
      }
    }

    this.loginForm.reset()
  }
  
}
