
console.log('service inits');

var request = require('superagent');

var mailchimpInstance   = 'us16',
    listUniqueId        = 'eeea5c8799',
    mailchimpApiKey     = '60a277cbd71c39904b2b8e4b3173ef15-us16';

module.exports = {
    enviarEmail: function(nome, email, telefone, mensagem) {
        request
        .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
        .send({
          'email_address': email,
          'status': 'subscribed',
          'merge_fields': {
            'NOME': nome,
            'TELEFONE': telefone,
            'MENSAGEM': mensagem
          }
        })
        .end(function(err, response) {
            if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
                console.log('Signed Up!');
            } else {
                console.log('Sign Up Failed :(');
            }
        });
    }
}

/*
var nodemailer = require('nodemailer');

var transporte;

var email = {
    from: '',
    to:'', 
    subject: '', 
    html: ''
};

module.exports = {
    carregarParametros: function() {
        Parametros.find({codigo: {'>=': 1, '<=': 4}})
        .then(function(parametros) {

            var usuario, senha;

            parametros.forEach(function(parametro) {
                if (parametro.codigo == 1) {
                    email.from = parametro.parametro;
                    usuario = parametro.parametro;
                }
                else if (parametro.codigo == 2) {
                    senha = parametro.parametro;
                }
                else if (parametro.codigo == 3) {
                    email.subject = parametro.parametro;
                }
                else if (parametro.codigo == 4) {
                    email.html = parametro.parametro;
                }
            });

            transporte = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    XOAuth2: {
                        user: usuario,
                        clientId: "407408718192.apps.googleusercontent.com",
                        clientSecret: "************",
                        refreshToken: "1/m0lprF9u3I-E5rXb5zZT1S8VjkDcz4bNbD8oXwXjAaQ"
                    }
                }
            });
        })
        .catch(function cbError(err) {
            console.log('Erro ao carregar os parametros. ' + err);
        });
    },

    enviarEmail: function(destinatario) {
        
        email.to = destinatario;

        transporte.sendMail(email, function(err, info){
            if (err) {
                console.log('Erro ao enviar o email. ' + JSON.stringify(err))
            }
            else {
                console.log('Email enviado! Leia as informações adicionais: ', info);
            }
        });
    }
}
*/