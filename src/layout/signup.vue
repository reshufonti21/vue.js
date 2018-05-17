<template>
  <div class="container">
    <div class="container">
       <div class=col-12>
       <div class=col-4>
        <div class=row-2>
          <p style=" text-align: center;color: #595959;font-size:25px;" >Marketing</p>
          <p>We've created the marketing campaign of the website. It was a very interesting collaboration.</p>
        </div>
        <div class=row-2>
          <p style=" text-align: center;color: #595959;font-size:25px;">Fully Coded in HTML5</p>
          <p>We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.</p>
        </div>
        <div class=row-2>
          <p  style=" text-align: center;color: #595959;font-size:25px;">Built Audience</p>
          <p>There is also a Fully Customizable CMS Admin Dashboard for this product.</p>
        </div>
       </div>
       <div class=col-8>
         <h1>Register</h1>
      <p>or Be Classic</p>
      <br><br>
      FirstName:<input style="" type="text" placeholder="firstname..">
      <br><br>
      Email:<input style="margin-left:29px;" type="text" placeholder="email..">
      <br><br>
       Password:<input  style="margin-left:5px" type="password" placeholder="password..">
      <br><br>
      Retype-pw:<input style="margin-left:0px" type="password" placeholder="password..">
      <br><br>
      <router-link to="/">Get Started</router-link>
      <router-view></router-view>
      </div>
     </div>
    </div>
  </div>
</template>
<script>
import router from '../router'
export default {
  name: 'signup',
  methods: {
    navigate () {
      router.go({name: 'login'})
    }
  }
}
</script>
<style>
.col-12{
  display:-webkit-inline-flex;
  /* background-image: url("../assets/img/sinn.jpg"); */
  height: 500px;
  width: 1000px;
  margin-top: 130px;
  margin-left: 300px;
  box-shadow: 2px 2px 2px 2px #888888;
}
.col-4{
  width: 410px;
  margin-left: 60px;
}
 .col-8{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
    padding-top: 50px;
    text-align: center;
    margin-left: 0px;
    width: 800px;
    height: 447px;
  }
  .row-2{
    margin-left: 20px;
    margin-top: 50px;
    color: #595959;
  }
</style>
