
<template>
	<div class = "login_div">
        <p> {{greeting}} </p>
        <form>
            <label for = "nameText" >Name:</label>
            <input v-model="userName" id = "nameText"  type = "text"  > </input>
            <br>
            <label for = "emailText" > Email address: </label>
            <input v-model="email" id = "emailText"  type = "email"  > </input>
            <br>
            <label for = "passwordText" > Password: </label>
            <input  v-model="password" id = "passwordText"  type = "password"> </input>
            <br>
            <input @click="submit" type = "submit" value = "Sign Up"> </input>
        </form>

        
    </div>
</template>

<script>
    import axios from 'axios';

	export default {
			name: 'register',
			components: {

		},  
		data: function () {
			return {
			greeting: 'Sign Up',
            userName: "",
            email: "",
            password: ""
			}
		},
        methods: {
            submit: function () {
              
                console.log(this.userName)
                console.log(this.email)
             
   
            }
        }
    
	}
</script>

<style scoped>
	p {
		font-size: 2em;
		text-align: center;
	} 

    .login_div{
        text-align: center;
        
    }
	
</style>