import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Home extends Component {

    state = {  } 
    render() { 
        return (
          
          
          
          <div className='container-home container-fluid'>
          <div class="first w-100 h-100 row mt-5">

            <div class="introduccion mt-5 pt-5 col-sm">
            <h1>TU CAMINO HACIA EL EXITO</h1>
                <p>Las empresas buscan personas con habilidades informáticas, <br/>
                gerenciales, de idiomas y mercadeo digital. Aprende con <br/> 
                las clases 100% en vivo por Internet de VLA. Tu rumbo a un <br/>
                  mejor empleo empieza aquí.</p>
                
            <NavLink to="/works"><button type="button" 
            class="btn btn-warning mt-5 h-25"><i class="bi bi-laptop-fill mr-2"></i>Ver todas clases</button>
            </NavLink>
            </div>

            <div class="col-sm embed-responsive embed-responsive-16by9 w-75 h-75 mb-5 mr-4">
            <iframe width="853" height="480" src="https://www.youtube.com/embed/dt63H3UPaXU" 
          title="Evolucionamos a Virtual Learning of America" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
          gyroscope; picture-in-picture; web-share" allowfullscreen>

          </iframe>
            </div>

          </div>
 


          <div class="second">
            <p>Compañías que confian en VLA</p>
            <div class="row">
              <div class="col-4 col-sm-2">
               <img className='companias-img  w-100 h-50' src='https://logodownload.org/wp-content/uploads/2020/03/copa-airlines-logo.png' alt='unknown'></img>
              </div>
              <div class="col-4 col-sm-2">
              <img class="companias-img  w-100 h-50" src="https://i.ibb.co/5n5N25k/cable-Onda-removebg-preview.png" alt="unknown"></img>
              </div>
              <div class="col-4 col-sm-2">
                <img className='companias-img w-100 h-50' src='https://lealto.com/wp-content/uploads/2021/02/Rocca_logo.png' alt='unknown'></img>
              </div>
              <div class="col-4 col-sm-2">
               <img className='companias-img  w-100 h-50' src='https://www.trintech.com/wp-content/uploads/2020/04/Auxis-Logo.png' alt='unknown'></img>
              </div>
              <div class="col-4 col-sm-2">
                <img className='companias-img  w-100 h-50' src='https://companieslogo.com/img/orig/CNXC_BIG-3709417e.png?t=1632605259' alt='unknown'></img>
              </div>
              <div class="col-4 col-sm-2">
                <img className='companias-img  w-100 h-50' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Fujitsu-Logo.svg/1280px-Fujitsu-Logo.svg.png' alt='unknown'></img>
              </div>
            </div> 
          </div>

          <div class="third w-100 h-50">
            <h1>¿Por qué elegir a VLA?</h1>
              <p class="col-sm-12 p-5 mb-5 ">Aquí vamos un paso más allá y te damos asistencia para conseguir un nuevo empleo, preparándote para <br/>
                  trabajar directamente con algunas de las empresas más importantes del mundo. </p>
               <p>Con VLA adquieres habilidades profesionales, certificados y títulos en línea. </p>
            <div class="row row-first">
              <div class="col-md-4 col-">
              <img class="w-25 h-30 mb-4" src="https://i.ibb.co/K6fPV7q/img2-removebg-preview-1.png" alt="img2-removebg-preview-1"></img>
                <p>Todos los cursos de VLA son enseñados totalmente <br/> 
                en vivo, con un método de enseñanza único. Las <br/>
                clases de VLA permiten a todos nuestros <br/>
                estudiantes interactuar con sus profesores y <br/>
                 responder todas sus dudas en tiempo real.</p>
              </div>
              <div class="col-md-4 col-">
              <img class="w-25 h-30 mb-4" src="https://i.ibb.co/mcWq8P3/img3-removebg-preview.png" alt="img3-removebg-preview"></img>
                <p>Te preparamos para ganar las certificaciones más <br/>
                   importantes de la industria como Cisco, PMP, <br/>
                   Microsoft Azure, Scrum y muchas más. Con <br/>
                   profesores expertos y certificados 100% en <br/>
                    vivo por Internet.</p>
              </div>
              <div class="col-md-4 col-">
              <img class="w-25 h-30 mb-4" src="https://i.ibb.co/tPkS70z/img4-removebg-preview.png" alt="img4-removebg-preview"></img>
                <p>Uno de los más grandes beneficios de VLA <br/>
                  es que  aquí tienes un programa de asistencia <br/>
                  completamente gratis que te prepara y ayuda <br/>
                   a conseguir tu próxima entrevista de trabajo <br/>
                   para asegurar tu éxito.</p>
              </div>
            </div>
          </div>

          </div>
        
          

          

        );
    }
}
 
export default Home;