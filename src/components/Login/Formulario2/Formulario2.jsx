import React, { Component } from "react";
import '../../Login/Logo3/Logo3';



class Formulario2 extends Component {
constructor(){
    super();
    this.state = {
        items :[]
    }

}
render(){
    return (
        <section>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-12 text-center">
                    <div id="msnUsuario">
                        <p></p>
                    </div>
                    <div id="login">
                        <div>
                            <input id="email" class="inputInicioSesion" type="email" placeholder="Correo electrónico" ref={(input) => this.emailInput = input}/>
                        </div>
                        <div>
                            <input id="password" class="inputInicioSesion" type="password" placeholder="Contraseña" ref={(input) => this.contraseñaInput = input}/>
                        </div>
                        <div>
                            <p>Olvidé mi contraseña</p>
                        </div>
                        <div>
                            
                            <input id="loginButton" class="inputInicioSesion" onclick="loginWithFirebase();" type="button" value="Iniciar sesión"/>
                        </div>
                        <div class="ingresarConCuenta">¿No tienes una cuenta?
                            <a class="entrar" href="register.html">Regístrate</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}
}

export default Formulario2 ; 