import React, {Component, Fragment} from 'react';
import axios from 'axios'

class Empleados extends Component {
    state = { 

        empleados: [],

     }
    
    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {

            const empleados = response.data;
            console.log(empleados)
            this.setState({empleados})
        
        })

    }


    render() { 
        return (

          <Fragment>

            <header className='mt-5 pt-5'>
              <h1 className='mt5 p-5'>Colaboradores:ejercicio API</h1>
            </header>
            <div class="table w-100 ">
<table class="table-striped">
      <thead class="thead">
        <tr>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <th>      
            {this.state.empleados.map(data => 

            <tr>{data.id}</tr>

            )}</th>


        <th>
        {this.state.empleados.map(data => 

        <tr>{data.name}</tr>

        )}
        </th>
        <th>
        {this.state.empleados.map(data => 

        <tr>{data.email}</tr>

        )}
        </th>


      </tbody>
    </table>
</div>
          </Fragment>




        );
    }           
}
 
export default Empleados;


