new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
    },
    lastname: {
      required: true,
    },
    contact: {
      required: true
    },
    password: {
      required:true,
      strength: {
        default: true,
        },
    },
    date: {
      required: true,
    },
    gender: {
      required: true,
    },
  },
  messages: {
    name: 'Campos Invalidos',
    lastname: 'Campos Invalidos',
  },
});
