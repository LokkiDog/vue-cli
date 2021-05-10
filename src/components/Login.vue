<template> 
  <div class="wrapper-content wrapper-content--fixed">
    <div class="login-box">
      <div class="login-box-header">
        <h2>Вход в систему</h2>
      </div>
      <form  class="login" @submit.prevent="login">
        <div class="user-box">
          <input required v-model="loginx" type="text" >
          <label>Логин</label>
        </div>
        <div class="user-box">
          <input required v-model="passwordx" type="password" >
          <label>Пароль</label>
        </div>
        <a href="#" id="form_btn" v-on:click="login">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Войти
        </a>
        
      <p class="errorText" v-if="this.$store.getters.authStatus == 'error'">Вход не выполнен. Попробуйте еще раз</p>
      </form>
      <div class="login-box-footer">
        <router-link class="link" to="/registration">Регистрация</router-link>
      </div>
    </div> 
 </div>
 <!-- /.wrapper-content -->
</template>

<script> 
 
  export default { 
    data(){
      return {
        loginx : "",
        passwordx : "",
        error: ""
      }
    },
    methods: {
      login: function () {
        let loginx = this.loginx 
        let passwordx = this.passwordx

        this.$store.dispatch('login', { loginx, passwordx })
       .then(() => this.$router.push('/'))
       .catch(err => {
         console.log(this.$store.getters.authStatus)
       })
      }
    }
  }
</script>



<style lang="scss" scoped>

.login-box { 
  width: 400px;
  margin: auto;
  margin-left: 50%; 
  margin-top: 0;
  transform: translatex(-50%);
  background: rgba(0, 0, 0, 0.01);
  box-sizing: border-box;
  box-shadow: 0 0px 23px -5px rgba(#303133, 0.6);
  border-radius: 10px;
}
.login-box-header {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #2ecc71;
  padding: 10px 0px;
}
.login-box-footer {
  text-align: center;
  border-top: 1px rgb(170, 170, 170) solid;
  padding: 15px 0;
  .link{
    font-style: italic;
  }
}
.login-box h2 { 
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 10px;
  font-size: 16px;
  color: #303133;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #303133;
  border-radius: 1px;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 10px;
  font-size: 16px;
  color: #303133;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #2ecc71;
  font-size: 12px;
}
.login-box form {
  padding: 40px 40px 20px 40px;
}
.login-box form a {
  position: relative;
  display: block;
  padding: 10px 20px;
  color: #2ecc71;
  font-size: 16px;
  text-decoration: none; 
  margin: auto;
  width: 110px;
  overflow: hidden;
  transition: .2s;
  margin-top: 5px;
  letter-spacing: 4px;
  box-shadow: 0 0 1px #bdc3c7,
              0 0 2px #bdc3c7,
              0 0 3px #bdc3c7,
              0 0 4px #bdc3c7;
}

.login-box a#form_btn:hover {
  background: #2ecc71;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #2ecc71,
              0 0 15px #2ecc71,
              0 0 25px #2ecc71,
              0 0 50px #2ecc71;
}

.login-box a#form_btn span {
  position: absolute;
  display: block;
}

.login-box a#form_btn span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #2ecc71);
  animation: btn-anim1 2s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box a#form_btn span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #2ecc71);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.login-box a#form_btn span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #2ecc71);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.login-box a#form_btn span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #2ecc71);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}

</style>