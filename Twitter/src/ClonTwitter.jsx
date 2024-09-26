import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { CreateAccount } from "./components/CreateAccount";
import { Login } from "./components/Login";
export const ClonTwitter = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};
