/**
 * EmailController
 *
 * @description :: Server-side logic for managing emails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var nodemailer = require('nodemailer');

var transporte = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'felipej2626@gmail.com',
    pass: 'oloqwjrqacghtrhl'
  } 
});

module.exports = {
    enviarEmail: function(req, res) {

        var email = {
            from: 'felipej2626@gmail.com',
            to: 'felipej2626@gmail.com',
            subject: 'Node.js ♥ unicode', 
            html: 'E-mail foi enviado do <strong>Node.js</strong>'
        };

        transporte.sendMail(email, function(err, info){
            if (err) throw err;

            console.log('Email enviado! Leia as informações adicionais: ', info);
            
        });

        return res.view('homepage');
    }
};

