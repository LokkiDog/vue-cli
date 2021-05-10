<template>
  <div class="wrapper">

    <!-- header -->

    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content navbar-content--login" v-if="isLoggedIn">
            <div class="logo">С.М.А.Н.И.</div>
            <ul class="navbar-list" >
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <router-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</router-link>
              </li>

            </ul>
            <span class="navbar-link"><a @click="logout">Выйти</a></span>
          </div>
          <!-- navbar-content--login -->
          <div class="navbar-content navbar-content--logout" v-if="!isLoggedIn">
            <div class="logo">С.М.А.Н.И.</div>
            <ul class="navbar-list" >
              <li class="navbar-item">
                <router-link class="navbar-link" to="/login">Вход</router-link>
              </li>
              
              <li class="navbar-item">
                <router-link class="navbar-link" to="/registration">Регистрация</router-link>
              </li> 
            </ul> 
          </div>
          <!-- navbar-content--logout -->
        </div>
      </div>
    </header>

    <router-view></router-view>
     <!-- footer -->
     
  </div>
</template>

 

<script> 
export default {
  data() {
    return {
      links: [
        {title: 'Главная', url: '/'},
        {title: 'Статистика', url: '/statistics'},
      ]
    }
  },
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/login')
      })
    }
  },
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout")
        }
        throw err;
      });
    });
  }
} 
</script> 

<style lang="scss">
span.navbar-link{
  cursor: pointer;
}
span.navbar-link:hover{
  color: #5247e7;
}
.navbar-link {
  &.router-link-exact-active {
    color: #5247e7;
  }
}
a.link {
  color: #2ecc71;
  text-decoration: none;
  border: none;
  font-size: 16px;
}
a.link:hover {
  box-shadow: none;
  color: #5247e7;
  text-decoration: none;
  background: initial;
}

.errorText {
  color: rgb(214, 35, 35);
  font-size: 12px;
  margin: 0; 
}
.errorText:first-child{ 
 margin-top: -20px;
}
.errorText:last-child{
 margin-bottom: 10px; 
}

</style>