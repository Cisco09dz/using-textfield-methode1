import { Password } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { useState } from "react";

function Test() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpasword] = useState("");
  return (
    <div>
      <TextField
        type={"text"}
        sx={{ margin: 3 }}
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="name"
        variant="outlined"
      />
      <TextField
        type={"text"}
        sx={{ margin: 3 }}
        value={email}
        onChange={(e) => setemail(e.target.value)}
        placeholder="email"
        variant="standard"
      />
      <TextField
        type={"password"}
        sx={{ margin: 3 }}
        value={password}
        onChange={(e) => setpasword(e.target.value)}
        placeholder="pasword"
        variant="filled"
      />
    </div>
  );
}

export default Test;
