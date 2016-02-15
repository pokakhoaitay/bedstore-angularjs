var appConfig = {
    apiRoute: 'http://dev.bedstore.com:9999/proxy/',
    lastUrl: '',
    xsrfHeaderName: 'X-BSTokenWeb',
    xsrfCookieName: 'BSTokenWeb',
    isDebug: true,
    enableConsoleLog: true
}



var utils = {
    GetApiUrl: function (path) {
        return appConfig.apiRoute + path;
    },
    logWithCheck: function (message) {
        if (appConfig.enableConsoleLog)
            console.log(message);
    }
}

