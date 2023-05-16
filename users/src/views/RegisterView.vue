<script setup> //Usando composition API
  import {ref} from "vue";
  import { useUserStore } from "../stores/user";

  const email = ref("");
  const password = ref("");
  const username = ref("")
  const nombre = ref("");
  const apellido = ref("");
  const fechaNacimiento = ref("");
  const posicion = ref("");
  const nivelJuego = ref(""); 
  const genero = ref(""); 

  const userStore = useUserStore();

 /*  const register = () => {
    userStore.register(email.value , password.value);
  } */
  const register = () => {
    const user = {
      email: email.value,
      username: username.value,
      password: password.value,
      nombre: nombre.value,
      apellido: apellido.value,
      fechaNacimiento: fechaNacimiento.value,
       posicion: posicion.value,
      nivelJuego: nivelJuego.value, 
     genero: genero.value,
      /* 
      pais: pais.value,
      ciudad: ciudad.value,
      barrio: barrio.value,
      telefono: telefono.value, */
    };
    userStore.register(user);
  };
</script>

 <template>
 <div class="container-fluid">
  <div class="form mx-auto my-4 col-lg-12 col-md-12 col-sm-12">
    <h2 class="mb-3">Registro</h2>
    <form @submit.prevent="register" class="mt-5">
      <div class="mb-3 mt-5">
        <input type="username" required v-model="username" placeholder="Nombre de Usuario" />
      </div>
      <div class="mb-3 mt-5">
        <input type="email" required v-model="email" placeholder="Correo Electronico" />
      </div>
      <div class="mb-3 mt-5">
        <input type="password" required v-model="password" placeholder="Contraseña" />
      </div>
      <div class="mb-3 mt-5">
        <input type="text" required v-model="nombre" placeholder="Nombre" />
      </div>
      <div class="mb-3 mt-5">
        <input type="text" required v-model="apellido"  placeholder="Apellido"/>
      </div>
      <div class="mb-3 mt-5">
        <label>Fecha de Nacimiento</label>
        <input id="date" type="date" required v-model="fechaNacimiento"/>
        
      </div>
   <div class="mb-3 mt-5">
        <label>Posición en Cancha</label>
        <select required v-model="posicion">
          <option value="">Seleccionar</option>
          <option value="delantero">Delantero</option>
          <option value="medio campista">Medio Campista</option>
          <option value="defensor">Defensor</option>
          <option value="arquero">Arquero</option>
        </select>
        
      </div>
      <div class="mb-3 mt-5">
        <label>Nivel de Juego</label>
        <select required v-model="nivelJuego">
          <option value="">Seleccionar</option>
          <option value="1">★</option>
          <option value="2">★★</option>
          <option value="3">★★★</option>
          <option value="4">★★★★</option>
          <option value="5">★★★★★</option>
        </select>
     
      </div> 
       <div class="mb-3 mt-5">
        <label>Género</label>
        <select required v-model="genero">
          <option value="">Seleccionar</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="no_decir">Prefiero no decir</option>
        </select>
          </div>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <button class="register__submit" type="submit">Registrarme</button>
            <button class="register__submit mt-5" type="submit"><router-link to="/login" class="btn-home">Ya tengo cuenta</router-link></button>


          </div>
    
      
    </form>
  </div>
 </div>
</template> 

<style src="../css/auth.css"> </style>
