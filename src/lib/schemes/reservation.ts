import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().min(2).max(32).trim().required(),
  phone: yup
    .string()
    .matches(/^\+?\d{11,12}$/, 'Invalid phone number')
    .required(),
  time: yup
    .string()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format')
    .required(),
  email: yup.string().email().trim().required(),
  comment: yup.string().trim(),
});
