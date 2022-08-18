import "./login.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };
  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            value={username}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            name="username"
            onChange={handleChange}
          />{" "}
          <TextField
            name="password"
            value={password}
            id="outlined-basic"
            label="Password"
            type="password"
            onChange={handleChange}
            variant="outlined"
          />{" "}
        </Stack>
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
