import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email().trim().required(),
  password: yup.string().min(6).max(32).trim().required(),
});
