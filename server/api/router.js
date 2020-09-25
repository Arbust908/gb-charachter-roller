module.exports = (express) => {
    const router = express.Router();

    const email = require('./routes/email');
    const respond = require('../helpers/respond');

    router.use('/email', email);

    router.use('*', (req, res) => {
        respond(res, {
            code: 404,
            message: "Endpoint doesn't exist",
        });
    });

    return router;
};
