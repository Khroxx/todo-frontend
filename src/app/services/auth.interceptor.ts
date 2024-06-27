import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { RedirectCommand, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('token');
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Token ${authToken}`
    }
  });
  return next(authReq).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse){
        if (err.status === 401){
          const router = inject(Router)
          router.navigateByUrl('login')
          }
      }
      return throwError(() => err);
    })
  );

};
