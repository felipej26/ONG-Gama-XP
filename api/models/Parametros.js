/**
 * Parametros.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    autoPK: false,

    codigo: {
      type: 'integer',
      primaryKey: true,
      unique: true
    },

    descricao: {
      type: 'string',
      size: 100
    },

    parametro: {
      type: 'string',
      size: 500
    }
  }
};

