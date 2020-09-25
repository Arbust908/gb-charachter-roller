const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

const logger = require('./logger');

const transport = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: process.env.SENDGRID_API_KEY,
    })
);

const send = (payload) => {
    return transport
        .sendMail(payload)
        .then(([response]) => {
            logger.info(`Message delivered with code ${response.statusCode} ${response.statusMessage}`);

            return true;
        })
        .catch((err) => {
            logger.info('Errors occurred, failed to deliver message');

            if (err.response && err.response.body && err.response.body.errors) {
                err.response.body.errors.forEach((error) => logger.error(`${error.field}: ${error.message}`));
            } else {
                logger.error(err);
            }
            return false;
        });
};

module.exports = {
    send,
};
