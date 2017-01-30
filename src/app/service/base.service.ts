import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggingService } from './logging.service';
import { RequestOptionsArgs, Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class BaseService implements OnInit {

    public activeRequest: boolean = false;

    ngOnInit() {

    }

    constructor(public authHttp: AuthHttp,
                public http: Http,
                public loggingService: LoggingService) {
    }

    getList(url: string, options?: RequestOptionsArgs): Observable<any[]> {
        this.activeRequest = true;
        return this.authHttp.get(url, options)
            .map(response => <any[]> response.json().results)
            .do(response => LoggingService.logPrettyDebugJson(response))
            .catch(this.loggingService.handleError)
            .finally(() => this.activeRequest = false);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.activeRequest = true;
        return this.authHttp.get(url, options)
            .map(response => <any> response.json().result)
            .do(response => LoggingService.logPrettyDebugJson(response))
            .catch(this.loggingService.handleError)
            .finally(() => this.activeRequest = false);
    }

    post(url: string, model: any, options?: RequestOptionsArgs): Observable<any> {
        this.activeRequest = true;
        return this.authHttp.post(url, JSON.stringify(model), options)
            .map(response => <any> response.json().result)
            .do(response => LoggingService.logPrettyDebugJson(response))
            .catch(this.loggingService.handleError)
            .finally(() => this.activeRequest = false);
    }

    put(url: string, model: any, options?: RequestOptionsArgs): Observable<any> {
        this.activeRequest = true;
        return this.authHttp.put(url, JSON.stringify(model), options)
            .do(response => LoggingService.logPrettyDebugJson(response))
            .catch(this.loggingService.handleError)
            .finally(() => this.activeRequest = false);
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.activeRequest = true;
        return this.authHttp.delete(url, options)
            .do(response => LoggingService.logPrettyDebugJson(response))
            .catch(this.loggingService.handleError)
            .finally(() => this.activeRequest = false);
    }

    httpPost(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        this.activeRequest = true;
        return this.http.post(url, JSON.stringify(body), options)
            .do(response => LoggingService.logPrettyDebugJson(response))
            .catch(this.loggingService.handleError)
            .finally(() => this.activeRequest = false);
    }
}