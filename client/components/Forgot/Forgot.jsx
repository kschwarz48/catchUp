import React from "react";
import "./forgot.css";

const Forgot = () => {
  return (
    <main>
      <label for="forgot-password">Please enter email address: </label>
      <form action="">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter Email Address"
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
export default Forgot;
