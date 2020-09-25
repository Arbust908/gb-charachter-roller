const respond = require('../../helpers/respond');
const emails = require('../../services/emails');

const sendContactEmail = async (req, res) => {
    const { name, email, text } = req.body;
    const errors = {
        name: false,
        email: false,
        cel: false,
        text: false,
        news: false,
    };

    let body = '';

    if (req.body.name && req.body.name !== '') {
        body += `<p>Nombre: ${name}</p>`;
    } else {
        errors.name = true;
    }

    if (req.body.email && req.body.email !== '') {
    } else {
        errors.name = true;
    }

    // if (req.body.linkedin && req.body.linkedin !== '') {
    //     body += `<br><p>Linkedin: ${req.body.linkedin}</p>`;
    // } else {
    //     errors.linkedin = true;
    // }

    if (req.body.cel && req.body.cel !== '') {
        body += `<br><p>Teléfono: ${req.body.cel}</p>`;
    } else {
        errors.cel = true;
    }

    if (req.body.text && req.body.text !== '') {
        body += `<br><p>Mensaje: ${text}</p>`;
    }

    const payload = {
        from: email,
        to: process.env.SENDGRID_EMAIL,
        replyTo: email,
        subject: `Contacto desde la web: ${name}`,
        html: body,
    };

    if (Object.values(errors).includes(true)) {
        return respond(res, {
            code: 409,
            message: 'required data missing',
        });
    } else {
        const sent = await emails.send(payload);

        if (sent === true) {
            return respond(res, {
                code: 200,
                data: 'ok',
            });
        } else {
            return respond(res, {
                code: 400,
                message: 'error sending email',
            });
        }
    }
};

module.exports = {
    sendContactEmail,
};
