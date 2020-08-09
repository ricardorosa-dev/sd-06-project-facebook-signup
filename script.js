window.onload = () => {
  let justValidate = new JustValidate('.js-form', {
      rules: {
        name: {
          required: true,
        },
        lastname: {
          required: true,
        },
        contact: {
          required: true,
        },
        password: {
          required: true,
        },
        date: {
          required: true,
        },
        gender: {
          required: true,
        },
      },
  });
};
