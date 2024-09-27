import React, { useState } from "react";
import Styles from "./Home.module.css";

const Home = () => {
  const [user, setUser] = useState({
    fullName: "",
    Email: "",
    Empresa: "",
    Mensaje: "",
  });

  const [err, setErr] = useState(false);
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({
    fullName: false,
    Email: false,
    Empresa: false,
    Mensaje: false,
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(true);
    setSuccess(false);
    let newErrors = {
      fullName: user.fullName.length === 0,
      Email: user.Email.length === 0,
      Empresa: user.Empresa.length === 0,
      Mensaje: user.Mensaje.length === 0,
    };

    setErrors(newErrors);

    if (
      newErrors.fullName ||
      newErrors.Email ||
      newErrors.Empresa ||
      newErrors.Mensaje
    ) {
      setErr(true);
    } else {
      setErr(false);
      setSuccess(true);
    }
  };

  let mensaje;
  if (err) {
    mensaje =
      "Uno o más campos tienen un error. Por favor revísalos e inténtalo de nuevo";
  }

  return (
    <>
      <div className="m-2 p-5">
        <div className={`${Styles.textBody} col-md-3 col-xl-2`}>
          <p>EMPECEMOS A</p>
          <p>HACERLO SENCILLO</p>
        </div>
        <div className={`${Styles.textBody1} col-md-9 col-xl-10`}>
          <p>Nos emociona impulsar tu transformación digital</p>
        </div>
      </div>
      <div className={Styles.form}>
        <form className="row g-3 p-5" onSubmit={handleSubmit}>
          <div className="col-xl-4 p-4">
            <div className="form-outline p-4">
              <label className="form-label">Nombres y apellidos</label>
              <input
                type="text"
                className={`${Styles.inputForm} form-control`}
                value={user.fullName}
                onChange={(event) =>
                  setUser({ ...user, fullName: event.target.value })
                }
              />
              {errors.fullName && (
                <span className={Styles.errorText}>
                  El campo es obligatorio.
                </span>
              )}
            </div>
            <div className="form-outline p-4">
              <label className="form-label">Email</label>
              <input
                type="text"
                className={`${Styles.inputForm} form-control`}
                value={user.Email}
                onChange={(event) =>
                  setUser({ ...user, Email: event.target.value })
                }
              />
              {errors.Email && (
                <span className={Styles.errorText}>
                  El campo es obligatorio.
                </span>
              )}
            </div>
            <div className="form-outline p-4">
              <label className="form-label">Empresa/Organismo</label>
              <input
                type="text"
                className={`${Styles.inputForm} form-control`}
                value={user.Empresa}
                onChange={(event) =>
                  setUser({ ...user, Empresa: event.target.value })
                }
              />
              {errors.Empresa && (
                <span className={Styles.errorText}>
                  El campo es obligatorio.
                </span>
              )}
            </div>
            <div className="form-outline p-4">
              <label className="form-label">País</label>
              <input
                type="text"
                className={`${Styles.inputForm} form-control`}
              />
            </div>
          </div>
          <div className="col-xl-4 p-4">
            <div className="form-outline p-4">
              <label className="form-label">Teléfono</label>
              <input
                type="text"
                className={`${Styles.inputForm} form-control`}
              />
            </div>
            <div className="form-outline p-4">
              <label className="form-label">Mensaje:</label>
              <textarea
                className={`${Styles.inputForm} form-control`}
                rows="5"
                value={user.Mensaje}
                onChange={(event) =>
                  setUser({ ...user, Mensaje: event.target.value })
                }
              />
              {errors.Mensaje && (
                <span className={Styles.errorText}>
                  El campo es obligatorio.
                </span>
              )}
            </div>
            <div className="form-outline p-4 d-flex justify-content-end">
              <button
                type="submit"
                className={`${Styles.button} btn btn-primary p-4`}
              >
                Enviar
              </button>
            </div>

            <div className="col-xl-12">
              <div className="form-outline p-4">
                {show && err && (
                  <p className={Styles.errorMessage}>{mensaje}</p>
                )}{" "}
                {show && success && (
                  <p className={Styles.successMessage}>
                    Formulario enviado exitosamente.
                  </p>
                )}{" "}
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={Styles.verticalContainer}>
        <div className={`${Styles.verticalBox} ${Styles.brandBox}`}>
          Brand
        </div>
        <div className={`${Styles.verticalBox} ${Styles.productBox}`}>
          Product
        </div>
        <div className={`${Styles.verticalBox} ${Styles.motionBox}`}>
          Motion
        </div>
        <div className={`${Styles.verticalBox} ${Styles.designBox}`}>
          Design
        </div>
      </div>
    </>
  );
};

export default Home;
