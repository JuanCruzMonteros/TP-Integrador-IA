import { HttpInterceptorFn } from '@angular/common/http';
import { LocalManagerService } from '@auth/services/local-manager.service';
import { LocalKeys } from '../services/local-manager.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const token = LocalManagerService.getElement(LocalKeys.token);

    let headers = req.headers.set('Content-Type', 'application/json');

    if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
    }

    const autReq = req.clone({headers})
    return next(autReq);
};
