<template>
  <div>
    <base-card>
      <section>
        <h2>
          Register as a Coach now!
        </h2>
        <coach-form @save-data="saveData"></coach-form>
      </section>
    </base-card>
  </div>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm';
import BaseCard from '../../components/ui/BaseCard';
export default {
  name: 'CoachesRegister',
  components: { BaseCard, CoachForm },
  methods:{
    saveData(data){
      this.$store.dispatch('coaches/registerCoach',data)
      this.$router.replace('/coaches')
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

.invalid  {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>