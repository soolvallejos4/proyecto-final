
import { defineStore } from "pinia";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: null,
    };
  },
  actions: {
    async register(user) {
      try {
        const { email, password, username, nombre, apellido, fechaNacimiento , posicion, nivelJuego,  genero, /* pais, ciudad, barrio, telefono */ } = user;

        // Registrar el usuario en Firebase Authentication
        await createUserWithEmailAndPassword(auth, email, password);
        this.user = auth.currentUser;

        // Guardar los demás parámetros en la base de datos como un nuevo documento en la colección "usuarios"
        const userDocRef = doc(db, "usuarios", this.user.uid); // Crea una referencia al documento con el mismo ID del usuario autenticado
        await setDoc(userDocRef, {
          email,
          password,
          username,
          nombre,
          apellido,
          fechaNacimiento,
          posicion,
          nivelJuego, 
          genero,
           /*
          pais,
          ciudad,
          barrio,
          telefono, */
        });

        console.log("Usuario registrado con éxito.");
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Email en uso.");
            break;
          case "auth/invalid-email":
            alert("Email inválido.");
            break;
          default:
            alert("Error al registrar el usuario.");
            break;
        }
      }
    },
    async login(email, password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("Usuario no encontrado en nuestros registros.");
            break;
          case "auth/wrong-password":
            alert("Email inválido.");
            break;
          default:
            alert("Contraseña incorrecta.");
            break;
        }
        return;
      }
      this.user = auth.currentUser;
      console.log("sesion iniciada")

    },
  },
});
