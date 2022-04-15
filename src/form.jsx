import { useState } from "react";

const initState = {
  name: "",
  age: "",
  email: "",
  country: ""
};

export default function Form({ setUserData, userData }) {
  const [data, setData] = useState(initState);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);

  const handleFormFilling = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };
  const { name, age, email, country } = data;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUserData([...userData, data]);
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return isLoading ? (
    <div>...Loading please wait</div>
  ) : isError ? (
    <div>
      <p>404 Something went wrong</p>
      <button onClick={() => setIsError((prev) => !prev)}>
        Cleick here to Try again!
      </button>
    </div>
  ) : (
    <>
      <form onSubmit={handleFormSubmit}>
        <h4>Fill the form</h4>
        <input
          name="name"
          value={name}
          placeholder="name"
          onChange={handleFormFilling}
        />
        <br />
        <input
          placeholder="age"
          name="age"
          value={age}
          onChange={(e) => handleFormFilling(e)}
        />
        <br />
        <input
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => handleFormFilling(e)}
        />
        <br />
        <input
          name="country"
          placeholder="country"
          value={country}
          onChange={(e) => handleFormFilling(e)}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
