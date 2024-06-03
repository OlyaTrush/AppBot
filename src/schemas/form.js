import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Ім'я обов'язкове для заповнення")
    .min(2, "Ім'я надто коротке"),
  number: Yup.string().required("Номер телефону обов'язковий для заповнення"),
  email: Yup.string()
    .required("Електронна пошта обов'язкова для заповнення")
    .min(10)
    .max(63),
  deliveryService: Yup.string().required(
    "Служба доставки обов'язкова для заповнення"
  ),
  postOfficeId: Yup.string().required(
    "Відділення пошти обов'язкове для заповнення"
  ),
});

export default validationSchema;
