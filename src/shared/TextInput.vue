<template>
   <div class="text-input" :id="dataInput.id">
      <input :id="dataInput.id" class="text-input__input"
         :class="{ 'input-active': meta.valid && meta.touched, 'input-error': !meta.valid && meta.touched }"
         :value="whichValue" :type="dataInput.type" :placeholder="dataInput.placeholder" :readonly="dataInput.readonly"
         @input="handleChange" @blur="handleBlur">
      <div class="text-input__error-message error-message">
         {{ errorMessage }}
      </div>
   </div>
</template>

<script setup>
import { toRefs, computed } from 'vue';
import { useField } from 'vee-validate';
const props = defineProps({
   dataInput: Object,
   modelValue: {
      type: null,
   },
   value: {
      type: String,
      default: '',
   },
   name: String,
});
const { name } = toRefs(props);
const {
   value: inputValue,
   errorMessage,
   handleBlur,
   handleChange,
   meta,
} = useField(name, undefined, {
   initialValue: props.value,
});
const whichValue = computed(() => {
   return props.dataInput.confNumber ? props.dataInput.confNumber : inputValue.value
})
</script>

<style lang="scss" scoped>
.text-input {

   &__input {
      //@include medium_16;
      width: 100%;
      height: 45px;
      padding-left: 20px;
      border-radius: 2px;
      border: 1px solid #D7D7D7;
      color: #606276;

      &:not(:last-child) {
         //margin-bottom: 10px;
      }

      &::placeholder {
         //@include medium_16;
         color: #D7D7D7;
      }

      &:focus {
         border-color: #606276;
      }

      //&:in-range {
      //   background: none;
      //}

      // Прибирає фон за замовченням при виборі з запропонованих варіантів
      &:-webkit-autofill {
         -webkit-box-shadow: 0 0 0px 1000px #FFFFFF inset;
      }
   }

   &__error-message {
      //@include regular_16;
      color: red;
   }
}

.input-error {
   border: 1px solid #F54E4E;
}
</style>