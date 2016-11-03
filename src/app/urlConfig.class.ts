

export class UrlConfig{
    private _baseIpAddr = 'http://192.168.1.126:'
    private _sitePort = '3200'
    private _authSockPort = '9000';

    get baseIpAddr(): string {
        return this._baseIpAddr;
    }

    get sitePort(): string{
        return this._sitePort;
    }

    get authSockPort(): string{
        return this._authSockPort;
    }
}
