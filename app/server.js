const http = require('http');
const fs = require('fs');
const path = require('path');
const defaultConfig = require('./config');
const winston = require('winston');

function requestHandler(req, res) {
    
}

module.exports = class Server {
    constructor(config) {
        this.config = config || defaultConfig;
        this.createLoggerFile();
    }

    createLoggerFile() {
        let logger = [];
        let filepath = this.config.logger.filepath;
        if ( filepath.error ) {
            logger.push(new winston.transports.File({filename:filepath.error, level:'error'}))
        } else {
            logger.push(new winston.transports.File({filename:filepath.all}))
        }

        this.logger = winston.createLogger({
            level: this.config.logger.level,
            format: winston.format[this.config.logger.format](),
            transports: logger
        });
    }

    run() {
        http.createServer(requestHandler).listen(this.config.port, _ => {
            this.logger.log({
                level:'info',
                time: new Date(),
                message: `Server is up and running on port ${this.config.port}`
            });
        });
    }
}