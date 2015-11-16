module.exports = {
  development: {
    db: 'mongodb://localhost/klassroom',
    
    app: {
      name: 'Klassroom'
    },

    facebook: {
      clientID: '{{PLACEHOLDER}}',
      clientSecret: '{{PLACEHOLDER}}',
      callbackURL: '{{PLACEHOLDER}}'
    },

    google: {
      clientID: '{{PLACEHOLDER}}',
      clientSecret: '{{PLACEHOLDER}}',
      callbackURL: '{{PLACEHOLDER}}'
    }
  },
  production: {
    db: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL,
    
    app: {
      name: 'Klassroom'
    },

    facebook: {
      clientID: '',
      clientSecret: '',
      callbackURL: ''
    },

    google: {
      clientID: '',
      clientSecret: '',
      callbackURL: ''
    }
  }
}