<template>
  <section class="viewArea">
    <h1>회원가입</h1>
    <form class="box">
      <div class="id">
        <div class="tag">email 입력 :</div>
        <input type="text" placeholder="email" v-model="username">
      </div>
      <div class="pw">
        <div class="tag">password 입력 :</div>
        <input type="password" placeholder="password" v-model="password">
      </div>
      <div class="btn-group">
        <router-link to="/" class="btn">홈으로</router-link>
        <input type="submit" value="회원가입" class="btn"> 
      </div>
      
    </form>
  </section>
</template>

<script>
export default {
  name: 'local-signup',
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods: {
    submitForm: function(){
      console.log(this.username, this.password);
      var url = 'http://127.0.0.1:8000/login/';
      var data = {
        "userId": this.username,
        "password": this.password
      }
      axios.post(url,data)
        .then(function(response){
          console.log("success")
          console.log(response)
        })
        .catch(function(error){
          console.log("error")
          console.log(error)
        })
    }
  }
}
</script>

<style>
  .viewArea {
    margin-top: 150px;
  }
  .viewArea h1 {
    font-size: 25px;
    font-weight: 700;
    color: #3f2b96;
    text-align: center;
  }
  .viewArea .box {
    width: 500px;
    margin: 10px auto 0;
    padding-top: 10px;
    border-radius: 10px;
    background-color: #f0f5ff;
  }
  .viewArea .box .id,
  .viewArea .box .pw {
    width: 400px;
    height: 40px;
    display: flex;
    margin: 5px auto;
  }
  .viewArea .box .id .tag,
  .viewArea .box .pw .tag {
    width: 150px;
    height: 100%;
    font-size: 20px;
    color: #3f2b96;
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 10px;
  }
  .viewArea .box .id input,
  .viewArea .box .pw input {
    width: 250px;
    height: 40px;
    padding: 0;
  }
  .viewArea .box .btn-group {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
  .viewArea .box .btn-group .btn {
    width: 200px;
    height: 40px;
    display: block;
    text-align: center;
    line-height: 40px;
    color: #3f2b96;
    text-decoration: none;
    font-size: 20px;
    box-sizing: border-box;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #a8c0ff;
    margin: 0 5px;
  }
</style>