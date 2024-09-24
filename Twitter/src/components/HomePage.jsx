import React from "react";
import miLogo from "../Logo/x.png";
import "../styles/home.css";

export const HomePage = () => {
  return (
    <>
      <div div className="vh-100 bg-black">
        <div className=" d-flex ">
          <div style={{ marginTop: "100px" }}>
            <img
              src={miLogo}
              className="img-fluid"
              alt="Imagen"
              style={{ marginTop: "130px", marginLeft: "150px" }}
            />
          </div>
          <div
            className="text-light"
            style={{
              marginLeft: "370px",
              marginTop: "130px",
              marginRight: "200px",
            }}
          >
            <span style={{ fontSize: "75px" }}>Lo que está pasando ahora</span>
            <div style={{ position: "absolute", top: "400px", right: "500px" }}>
              <h4>Únete Hoy</h4>
              <div>
                <button className="btn">Registrarse con Google</button>
              </div>
              <button className="btn" style={{ marginTop: "-10px" }}>
                Registrarse con Apple
              </button>
              <div style={{ textAlign: "center" }}>
                <p style={{ marginTop: "-15px" }}>o</p>
                <button className="btn2">Crear Cuenta</button>
              </div>
            </div>
            <p
              style={{
                marginTop: "283px",
                fontSize: "10px",
                marginRight: "300px",
              }}
            >
              Al registrarte, aceptas los{" "}
              <a href="https://x.com/es/tos">Términos de servicio</a> y la{" "}
              <a href="https://x.com/es/privacy">Política de privacidad,</a>{" "}
              incluida la política de{" "}
              <a href="https://help.x.com/es/rules-and-policies/x-cookies">
                Uso de Cookies.
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="text-light"></div>
      </div>
    </>
  );
};
