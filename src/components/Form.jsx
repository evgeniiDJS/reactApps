import { Field, reduxForm } from "redux-form";
import style from "./Header.module.css";

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.form}>
      <Field name={"user"} type="text" component={"input"} className={style.form_input} placeholder={"search on github "} />
    </form>
  );
};

const ReduxForm = reduxForm({
  form: "search",
})(Form);

export default ReduxForm;
