<template>
<form @submit.prevent='submitForm'>
  <div class='form-control'>
    <label for='firstName'>FirstName</label>
    <input type='text' id='firstName' v-model.trim='firstName.val' :class="{invalid: !firstName.isValid}" @blur="clearValidity('firstName')"/>
    <p v-if="!firstName.isValid"> First name must not be empty</p>
  </div>
  <div class='form-control'>
    <label for='lastName'>LastName</label>
    <input type='text' id='lastName' v-model.trim='lastName.val' :class="{invalid: !lastName.isValid}" @blur="clearValidity('lastName')"/>
    <p v-if="!lastName.isValid"> Last name must not be empty</p>
  </div>
  <div class='form-control'>
    <label for="description">Description</label>
    <textarea id='description' rows='5' v-model.trim='description.val' :class="{invalid: !description.isValid}" @blur="clearValidity('description')"></textarea>
    <p v-if="!description.isValid"> Description must not be empty</p>
  </div>
  <div class='form-control'>
    <label for='rate'>Hourly Rate</label>
    <input type='number' id='rate' v-model.number='rate.val' :class="{invalid: !rate.isValid}" @blur="clearValidity('rate')"/>
    <p v-if="!rate.isValid"> Rate must be greater then 0.</p>
  </div>
  <div class='form-control' :class="{invalid: !areas.isValid}" @blur="clearValidity('areas')" >
    <h3>Area of Experties</h3>
    <div>
      <input type='checkbox' id='frontend' value='frontend' v-model="areas.val" @blur="clearValidity('areas')">
      <label for='frontend'>Frontend Development</label>
    </div>
    <div>
      <input type='checkbox' id='backend' value='backend' v-model="areas.val" @blur="clearValidity('areas')">
      <label for='backend'>Backend Development</label>
    </div>
    <div>
      <input type='checkbox' id='career' value='career' v-model="areas.val">
      <label for='career'>Career</label>
    </div>
  </div>
  <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
<base-button>Register</base-button>
</form>
</template>

<script>
import BaseButton from '../ui/BaseButton';
export default {
  name: 'CoachForm',
  components: { BaseButton },
  data(){
    return{
      firstName:{
        type:String,
        val:'',
        isValid:true,
      },
      lastName:{
        type:String,
        val:'',
        isValid: true
      },
      description: {
        type:String,
        val:'',
        isValid: true
      },
      rate: {
        type:String,
        val: null,
        isValid: true
      },
      areas: {
        type:String,
        val:[],
        isValid: true
      },
      formIsValid:true
    };
  },
  emits:['save-data'],
  methods:{
    clearValidity(input){
      this[input].isValid = true
    },
    submitForm(){
      this.validForm();
      if (!this.formIsValid){
        return
      }
      const formData={
        first:this.firstName.val,
        last:this.lastName.val,
        rate:this.rate.val,
        disc:this.description.val,
        areas:this.areas.val
      }
     this.$emit('save-data',formData)
    },
    validForm(){
    this.formIsValid = true
      if(this.firstName.val===''){
        this.firstName.isValid = false
        this.formIsValid = false
      }
      if(this.lastName.val===''){
        this.lastName.isValid = false
        this.formIsValid = false
      }
      if(this.description.val===''){
        this.description.isValid = false
        this.formIsValid = false
      }
      if(!this.rate.val || this.rate.val <0){
        this.rate.isValid = false
        this.formIsValid = false
      }
      if(this.areas.length === 0){
        this.areas.isValid = false
        this.formIsValid = false
      }
    }

  },

};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  border-color: red;
}

.invalid ,
.invalid textarea {
  border: 1px solid red;
}
</style>