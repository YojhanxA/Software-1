import React from "react";
import miLogo from "../Logo/x.png";
import "../styles/home.css";

export const HomePage = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div className=" d-flex ">
          <div style={{ marginTop: "100px" }}>
            <img
              src={miLogo}
              className="img  img-fluid "
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
            <span
              style={{
                fontSize: "75px",
                position: "absolute",
                top: "70px",
                left: "750px",
                right: "100px",
              }}
            >
              Lo que está pasando ahora
            </span>
            <div style={{ position: "absolute", top: "320px", right: "470px" }}>
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
                marginTop: "430px",
                fontSize: "10px",
                marginRight: "300px",
                marginLeft: "-140px",
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
        <div className="last text-light">
          <h6>¿Ya tienes una cuenta?</h6>
          <button className="btn3">Iniciar sesion</button>
        </div>
        <h6
          style={{
            color: "white",
            marginTop: "100px",
            fontSize: "13px",
            textAlign: "center",
          }}
        >
          Información-Descarga la app de X-Centro de Ayuda-Condiciones de
          Servicio-Política de Privacidad-Política de cookies-Accesibilidad
          Información de anuncios-Blog-Empleos-Recursos para
          marcas-Publicidad-Marketing
        </h6>
      </div>
    </>
  );
};
