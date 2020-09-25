const winston = require('winston');

const dateFormat = () => {
    return new Date(Date.now()).toLocaleString();
};

class Logger {
    constructor() {
        this.log_data = null;

        this.stream = {
            write: (message, encoding) => {
                this.info(message.trim());
            },
        };

        this.logger = winston.createLogger({
            transports: [
                new winston.transports.Console({
                    colorize: true,
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.printf((info) => {
                            let message = `${dateFormat()} | ${info.level} | `;
                            message += `${process.env.APP_NAME || 'app'} | ${info.message}`;
                            message += info.obj ? ` | ` + `data: ${JSON.stringify(info.obj)}` : '';
                            message += this.log_data ? ` | ` + `extra_data: ${JSON.stringify(this.log_data)}` : '';

                            return message;
                        })
                    ),
                }),
                // new winston.transports.File({
                //     filename: './logs/combined.log',
                //     colorize: false,
                //     level: 'info',
                // }),
                // new winston.transports.File({
                //     filename: './logs/errors.log',
                //     colorize: false,
                //     level: 'error',
                // }),
            ],
            format: winston.format.printf((info) => {
                let message = `${dateFormat()} | ${info.level} | `;
                message += `${process.env.APP_NAME || 'app'} | ${info.message}`;
                message += info.obj ? ` | ` + `${JSON.stringify(info.obj)}` : '';
                message += this.log_data ? ` | ` + `extra_data: ${JSON.stringify(this.log_data)}` : '';

                return message;
            }),
        });
    }

    info(message, obj, extra = null) {
        if (extra !== null) {
            this._extraData(extra);
        }

        this.logger.log('info', message, {
            obj,
        });
    }

    debug(message, obj, extra = null) {
        if (extra !== null) {
            this._extraData(extra);
        }

        this.logger.log('debug', message, {
            obj,
        });
    }

    error(message, obj, extra = null) {
        if (extra !== null) {
            this._extraData(extra);
        }

        this.logger.log('error', message, {
            obj,
        });
    }

    _extraData(log_data) {
        this.log_data = log_data;
    }
}

module.exports = new Logger();
