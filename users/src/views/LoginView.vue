<script setup>
import {ref} from "vue"
import { useUserStore } from "../stores/user";

const email = ref("")
const password = ref("")

const userStore = useUserStore();

const login = () => {
  userStore.login(email.value , password.value)
}
</script>

  <template>
  <div class="login">
    <h2>Iniciar Sesion</h2>
    <form @submit.prevent="login" class="mt-5">
      <div class="mb-3 mt-5">
        <input type="username" required v-model="email" placeholder="Email" />
      </div>
      <div class="mb-3 mt-5">
        <input type="password" required v-model="password" placeholder="Contraseña" />
      </div>

      <button class="login__submit" type="submit">Login</button>
    </form>
  </div>
</template>

  <style src="../css/auth.css"> </style>