import "./TemplateHTML.scss";
import { social } from "../../data/data";
import PropTypes from "prop-types";

const TemplateHTML = ({ infoHTML }) => {
  console.log(infoHTML);
  const { name, job, address, phone } = infoHTML;

  const formatPhoneNumber = (phoneNumber) => {
    // Eliminar todos los caracteres que no sean dígitos
    const cleaned = ("" + phoneNumber).replace(/\D/g, "");

    // Aplicar el formato deseado
    const regex = /^(\d{3})(\d{3})(\d{4})$/;
    const match = cleaned.match(regex);

    if (match) {
      return "+57 " + match[1] + " " + match[2] + " " + match[3];
    } else {
      // Si el número no coincide con el formato esperado, retornar el número sin formato
      return phoneNumber;
    }
  };

  const postalCode = (address) => {
    if (address === "Cra. 61 # 56 - 51 Medellín, Colombia") {
      return "Código postal 050022";
    } else if (address === "Cl. 24N # 8N-10 Cali, Colombia") {
      return "Código postal 760046";
    } else if (address === "Km 1.6 Vía Llanogrande, Colombia") {
      return "Código postal 054048";
    }
  };

  return (
    <div className="template">
      <article className="article">
        <figure className="article__separator">
          <img
            src="https://res.cloudinary.com/dlkvt6uph/image/upload/v1709157984/Firma%20digital%20Alarmar/barraM_q2wlyd.jpg"
            alt="barra-separadora"
          />
        </figure>
        <br />
        <br />
        <div className="container">
          <div className="container__info">
            <section style={{ display: "flex" }}>
              <figure className="witheSpace2">
                <img
                  src="https://res.cloudinary.com/dlkvt6uph/image/upload/v1707168690/Firma%20digital%20Alarmar/space_ey9qrb.jpg"
                  alt="space"
                />
              </figure>
              <section className="personalInfo">
                <figure className="personalInfo__logo">
                  <img
                    src="https://res.cloudinary.com/dlkvt6uph/image/upload/v1709157501/Firma%20digital%20Alarmar/Logo_ARISTA_MORADO-01_grxcou.png"
                    alt="logo"
                  />
                </figure>
                <div style={{ display: "flex" }}>
                  <div className="witheSpace3"></div>
                  <div>
                    <h1 className="personalInfo__name">
                      {name ? name : "Empleado no encontrado"}
                    </h1>
                    <h2 className="personalInfo__job">
                      {job ? job : "Cargo no encontrado"}
                    </h2>
                  </div>
                </div>
              </section>
            </section>
            <section className="companyInfo">
              <div className="companyInfo__container">
                <figure>
                  <img
                    src="https://res.cloudinary.com/dlkvt6uph/image/upload/v1709336943/Firma%20digital%20Alarmar/direccion_dgxxyv.png"
                    alt="address"
                  />
                </figure>
                <div className="witheSpaceIcons"></div>
                <p>{address ? address : "Dirección no encontrada"}</p>
              </div>
              <div className="witheSpaceIcons2"></div>
              <div className="companyInfo__container">
                <figure>
                  <img
                    src="https://res.cloudinary.com/dlkvt6uph/image/upload/v1709336943/Firma%20digital%20Alarmar/telefono_w0djya.png"
                    alt="phone"
                  />
                </figure>
                <div className="witheSpaceIcons"></div>
                <p className="companyInfo__number">
                  {phone ? formatPhoneNumber(phone) : "Teléfono no encontrado"}
                </p>
              </div>
              <div className="witheSpaceIcons2"></div>
              <div className="companyInfo__container">
                <figure>
                  <img
                    src="https://res.cloudinary.com/dlkvt6uph/image/upload/v1709336943/Firma%20digital%20Alarmar/ubicacion_tkeef5.png"
                    alt="ubication"
                  />
                </figure>
                <div className="witheSpaceIcons"></div>
                <p>
                  {address ? postalCode(address) : "Código postal no econtrado"}
                </p>
              </div>
              <div className="witheSpaceIcons2"></div>
              <div className="companyInfo__container">
                <figure>
                  <img
                    src="https://res.cloudinary.com/dlkvt6uph/image/upload/v1709336943/Firma%20digital%20Alarmar/web_zkaql6.png"
                    alt="web"
                  />
                </figure>
                <div className="witheSpaceIcons"></div>
                <a
                  className="companyInfo__container--linkCompany"
                  href="portafolio-murex-nine.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.andresparra.com
                </a>
              </div>
            </section>
          </div>
          <div className="container__logo">
            <figure className="container__figure">
              <img
                src="https://res.cloudinary.com/dlkvt6uph/image/upload/v1709157500/Firma%20digital%20Alarmar/Icono_Arista-03_oa7dxn.png"
                alt="arista"
              />
            </figure>
          </div>
        </div>
        <figure className="article__separator2">
          <img
            src="https://res.cloudinary.com/dlkvt6uph/image/upload/v1709157984/Firma%20digital%20Alarmar/barraM_q2wlyd.jpg"
            alt="barra-separadora"
          />
        </figure>
        <section className="social">
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="witheSpace"></div>
                </td>
                {social.map((item) => (
                  <td key={item.id}>
                    <section className="social__container">
                      <div
                        style={{ display: "flex" }}
                        className={`social__container--${item.name}`}
                      >
                        <figure>
                          <a href={item.link} target="_blank" rel="noreferrer">
                            <img src={item.img} alt={item.name} />
                          </a>
                        </figure>
                      </div>
                    </section>
                    <div className="social__space">{""}</div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </section>
      </article>
      <figure className="article__separator">
        <img
          src="https://res.cloudinary.com/dlkvt6uph/image/upload/v1709157984/Firma%20digital%20Alarmar/barraM_q2wlyd.jpg"
          alt="barra-separadora"
        />
      </figure>
      <p className="legal">
        <span className="legal__title">AVISO:</span> El presente correo y sus
        archivos adjuntos están dirigidos exclusivamente a su destinatario y
        pueden contener información confidencial sujeta a secreto profesional.
        Queda prohibida su reproducción o distribución sin la autorización
        expresa de la empresa. Si usted no es el destinatario final, le
        solicitamos eliminar este mensaje e informarnos por este mismo medio. De
        acuerdo con la normativa vigente sobre protección de datos (Ley
        Estatutaria 1581 de 2012 y Decreto 1377 de 2013), el titular de los
        datos presta su consentimiento y/o autorización para que la información
        proporcionada voluntariamente pase a formar parte de una base de datos
        gestionada por nuestra empresa.
      </p>
    </div>
  );
};

TemplateHTML.propTypes = {
  infoHTML: PropTypes.object.isRequired,
};

export default TemplateHTML;
