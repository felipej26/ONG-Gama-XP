/**
 * EmailController
 *
 * @description :: Server-side logic for managing emails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    enviarEmail: function(req, res) {
        EnviarEmail.enviarEmail(req.param('nome'), req.param('email'), req.param('telefone'), req.param('mensagem'));
    }
};

