import React, { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
//sfc
const HookForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [entradas, setentradas] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    alert("Funciona ");
    setentradas([...entradas, data]);

    alert(JSON.stringify(entradas));
    Event.target.reset();
  };
  return (
    <Fragment>
      
      <main className="mt-4 p-5 h-100">
      <div className="p-2 mt-5 p-5">
        <h2>Registro de Empleados</h2>
      </div>
        <div className="row mt-5">
          <form className="col-6" onSubmit={handleSubmit(onSubmit)}>
            <input
              name="nombre"
              className="form-control m-2"
              placeholder="Ingresa tu nombre "
              //Validacion --register nombre

              {...register("nombre", {
                required: { value: true, message: "Este campo es requerido" },
                minLength: {
                  value: 2,
                  message: "El nombre tiene que ser mas largo",
                },
              })}
            />

            {errors.nombre && (
              <div className="alert alert-danger mt-1 p-1">
                {errors.nombre.message}
              </div>
            )}

            <input
              name="edad"
              className="form-control m-2"
              placeholder="Ingresa tu edad "
              //Validacion --register edad

              {...register("edad", {
                required: { value: true, message: "Este campo es requerido" },
                minLength: {
                  value: 2,
                  message: "La edad tiene que ser mas larga",
                },
              })}
            />

            {errors.edad && (
              <div className="alert alert-danger mt-1 p-1">
                {errors.edad.message}
              </div>
            )}

           

            <input
              name="email"
              className="form-control m-2"
              placeholder="Ingresa tu correo "
              //Validacion --register edad

              {...register("email", {
                required: { value: true, message: "Este campo es requerido" },
                minLength: {
                  value: 2,
                  message: "El correo tiene que tener mas caracteres",
                },
              })}
            />

            {errors.email && (
              <div className="alert alert-danger mt-1 p-1">
                {errors.email.message}
              </div>
            )}

            <button type="submit" className="m-5 btn btn-primary">
              {" "}
              Enviar{" "}
            </button>
          </form>

          {/* Tabla */}

          <table className="col-6 mt-2">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Correo</th>
              </tr>
            </thead>
            <tbody>
              {entradas.map((item) => (
                <tr>
                  <td>{item.nombre}</td>
                  <td>{item.edad}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </Fragment>
  );
};

export default HookForm;
