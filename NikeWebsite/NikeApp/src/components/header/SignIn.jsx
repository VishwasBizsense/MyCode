import React from "react";
import { useFor, SubmitHandler } from "react-hook-form";
import styles from "../../Styles/signin.module.css";
function SignIn() {
  const { register } = useForm();

  const SubmitHandler = (data) => {
    console.log("getting data", data);
  };

  return (
    <div>
      <form className={styles.signInForm}>
        <div>
          <label className={styles.label}>
            Email:
            <input
              {...register("email")}
              type="email"
              name="email"
              placeholder="Email"
            />
          </label>
        </div>
        <div>
          <label className={styles.label}>
            Password:
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              name="password"
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
