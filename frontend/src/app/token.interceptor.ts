import {Injectable} from "@angular/core";
import {HttpHandler,HttpRequest,HttpEvent,HttpInterceptor} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    constructor() {}
    intercept(request : HttpRequest<any>,next : HttpHandler) : Observable<HttpEvent<any>>{
        if(request.url.includes('/api/auth/login') || request.url.includes('/api/auth/signup')){
            return next.handle(request);
        } 
        request = request.clone({
            setHeaders :{
                'Authorization' : localStorage.getItem('token') 
            }
        })
        return next.handle(request);
    }
}