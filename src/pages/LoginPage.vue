<template>
   <div class="login-box">
      <div class="login-box__card card card-outline card-primary">
         <div class="card-header text-center">
            <router-link to="#" class="h1">Kino Cms</router-link>
         </div>
         <div class="login-box__card-body card-body">
            <p class="login-box__login-box login-box-msg">
               {{ subtitle }}
            </p>
            <form class="login-box__form" @submit="onSubmit" :validation-schema="schema" keep-values>
               <TextInput class="login-box__imput" v-for="elem in imputsList" :dataInput="elem" :name="elem.name"
                  :key="elem.id" />
               <button class="login-box__buuton-form">
                  Увійти
               </button>
            </form>
            <p class="login-box__lebel mb-1">
               <router-link to="/">
                  {{ labelPorgotPassword }}
               </router-link>
            </p>
            <p class="login-box__lebel mb-0">
               <router-link to="/" class="text-center">
                  {{ labelRegisterMembership }}
               </router-link>
            </p>
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import TextInput from '../shared/TextInput.vue'

const router = useRouter();
const imputsList = {
   '0': { id: 'email', placeholder: 'Email', type: 'email', name: "email" },
   '1': { id: 'password', placeholder: 'Password', type: 'password', name: "password" },

};
const isUA = ref(true);
const labelPorgotPassword = computed(() => {
   return isUA.value ? 'Я забув свій пароль' : 'I forgot my password'
})
const labelRegisterMembership = computed(() => {
   return isUA.value ? 'Створити новий обліковий запис' : 'Register a new membership'
})
const subtitle = computed(() => {
   return isUA.value ? 'Увійдіть, щоб почати сеанс' : 'Sign in to start your session'
})

const schema = yup.object({
   email: yup.string().required().email(),
   password: yup.string().required().min(3),
});

const { handleSubmit } = useForm({
   // vee-validate will be aware of computed schema changes
   validationSchema: schema,
   // turn this on so each step values won't get removed when you move back or to the next step
   keepValuesOnUnmount: true,
});

const onSubmit = handleSubmit((values) => {
   console.log(JSON.stringify(values, null, 2));
   router.push('/')
});
</script>

<style lang="scss" scoped>
.login-box {
   width: 100vw;
   min-height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   &__card {
      max-width: 360px;
      width: 100%;
   }

   &__imput:not(:last-child) {
      margin-bottom: 10px;
   }

   &__login-box {}


   &__buuton-form {
      margin-bottom: 5px;
      border: 1px solid grey;
      border-radius: 3px;
      padding: 5px 15px;
      display: block;
   }

   &__lebel {
      color: cornflowerblue;

      &:hover {
         color: blue;
      }
   }
}

.wrapper {
   width: 100%;
   height: 100%;
}

.card {
   max-width: 300px;

}

.card-header {}

.card-title {}

.card-tools {}

.badge {}

.badge-primary {}

.card-body {}

.card-footer {}
</style>