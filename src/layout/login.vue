<template>
<div class="container">
<div class="img">
  <!--<img src = "../assets/img/cloud.jpg"  /> -->
 <div class="login">
   <div class=log>
      <h1>Log in</h1>
   </div>
      <br><br>
      FirstName:<input  style="margin-left:25px" type="text" v-model="firstname" placeholder="firstname">
      <br><br>
      Email:<input  style="margin-left:50px" type="text" v-model="email" placeholder="email">
      <br><br>
      password:<input  style="margin-left:29px" type="password" v-model="password" placeholder="password">
        <br><br>
        <router-link to="/dashboard">Submit</router-link>
        <button v-on:click.prevent="post">Add blog</button>
        <p>don't have an account?<router-link to="/signup">Create one</router-link></p>
        firstname:{{firstname}}<br>
        Email:{{email}}<br>
        password:{{password}}
      <router-view></router-view>
  </div>
  </div>
</div>
</template>
<script>

export default {
  name: 'login',
  data: () => {
    return {
      firstname: '',
      email: '',
      password: ''
    }
  },
  methods: {
    post: function () {
      this.$http.post('https://jsonplaceholder.typicode.com/posts/1', {
        title: this.blog.firstname,
        body: this.blog.email,
        id: this.blog.password
      }).then(function (blog) {
        console.log(blog)
      })
    }
  }
}
</script>
<style>
.container{
   padding-top: 0px;
}
 .login{
  padding-top: 50px;
 text-align: center;
  color: black;
  border: 1px solid white;
  margin-top: 160px;
  margin-left: 590px;
  height: 350px;
  width: 350px;
  box-shadow: 5px 5px 5px 5px #888888;
}
.log{
  background-color:#b30059 ;
  color: white;
  width:300px;
  height:100px;
  text-align: center;
  margin-top: -90px;
  padding-top: 20px;
  shape-margin: 40px;
  margin-left: 25px;
}
</style>
