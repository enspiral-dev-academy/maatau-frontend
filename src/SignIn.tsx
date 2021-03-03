import React, { ChangeEvent, FormEvent, useState } from "react";
import "./SignIn.css";

function SignIn(): React.ReactElement {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setForm({
      username: "",
      password: "",
    });
  }

  return (
    <div className="SignIn">
      <p>Sign in to Matatau</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>: {` `}
          <input
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>: {` `}
          <input
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            required
          />
        </div>

        <button>Sign in</button>
      </form>
    </div>
  );
}

export default SignIn;
