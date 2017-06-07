/* eslint-disable */
export const dbConfig = {
    mongoDb : {
        //fill this out with your provider (or local)
        username: 'shane.arthur',
        'password':'Dallas4mavs8',
        'url' : 'ds011261.mlab.com:11261',
        'dbName' : 'shanewebsite'
    }
};

export const serverConfig = {
    webpackDevServerPort : 8080,
    expressPort : 3000
};

export const endpoints = {
    debug : 'http://localhost:3000',
    prod: 'http://localhost:3000'
};