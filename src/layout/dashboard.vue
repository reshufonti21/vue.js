<template>
<div class=container>
    <div  class="ccol-12">
          <div style="background color:black;width:170px;" class="ccol-5">
            <p style="color:red;">CT  <span>CREATIVE TIM</span></p>
            <hr>
            <br>
            <ul style="font-size: 20px;color:white;">
                <li>Dashboard</li>
                <br>
                <li >pages</li>
                <br>
                <li>components</li>
                <br>
                <li>forms</li>
                <br>
                <li>tables</li>
                <br>
                <li>maps</li>
                <br>
                <li>Widgets</li>
                <br>
                <li>charts</li>
                <br>
                <li>calender</li>
                <!-- <img style="height:200px;width:150px;" src = "../assets/img/cloud.jpg"  /> -->
            </ul>
          </div>
         <div class="ccol-7">
           <div class=dash>
            <h1 style="">Dashboard</h1>
             <router-link to="/">submit</router-link>
           </div>
           <div class=col>
              <div class=ccol-4>
                <p style="text-align:center;">Global Sales by Top Locations</p>
                <ul style="font-size: 18px;color:black;">
                  <li>USA</li>
                  <br>
                  <hr>
                  <li >GERMANY</li>
                  <br>
                  <hr>
                  <li>Australia</li>
                  <br>
                  <hr>
                  <li>United Kingdom</li>
                  <br>
                  <hr>
                  <li>Romania</li>
                  <br>
                  <hr>
                  <li>Brasil</li>
                  <!-- <img style="height:200px;width:150px;" src = "../assets/img/cloud.jpg"  /> -->
              </ul>
              </div>
              <div class=ccol-3>
              <header>MAP</header>
              <br>
              <br>
              </div>
              <router-view></router-view>
          </div>
         </div>
      </div>
    </div>
</template>
<script>
import router from '../router'
export default {
  name: 'dashboard',
  methods: {
    navigate () {
      router.go({name: 'login'})
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.ccol-12{
  display:-webkit-inline-flex;
  }
.ccol-5{
  background-color: black;
  background-image: url("../assets/img/cloud.jpg");
  height: 770px;
  box-shadow: 2px 2px 2px 2px #888888;
}
.ccol-7{
   display:-webkit-inline-flex;
}
.dash{
  margin-bottom: 50px;
  margin-left: 40px;
}
.col{
  margin-left: -180px;
  display: -webkit-inline-flex;
  padding-top: 80px;
}
.ccol-4{
  width: 660px;
  height: 400px;
  font-size: 20px;
  background-color:ghostwhite;
  box-shadow: 2px 2px 2px 2px #888888;
}
.ccol-3{
 background-image: url("../assets/img/mapp.jpg");
 height: 400px;
 width: 720px;
 box-shadow: 2px 2px 2px 2px #888888;
}
</style>
