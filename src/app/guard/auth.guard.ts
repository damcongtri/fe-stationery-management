import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';


export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean => {
  const token = sessionStorage.getItem('token_4fa1u');
  const router = inject(Router);
  if(!token){
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
