<template>
  <div>
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Your email</label>
        <input v-model="email" type="email" class="form-control" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Your message</label>
        <textarea v-model="message" class="form-control" rows="3"></textarea>
      </div>
    </form>
  </div>
</template>

<script>
  export default{
    computed:{
      email: {
        get () {
          return this.$store.state.email
        },
        set (value) {
          this.$store.commit('updateEmail', value)
        }
      },
      message: {
        get () {
          return this.$store.state.message
        },
        set (value) {
          this.$store.commit('updateMessage', value)
        }
      }
    }
  }
</script>