
<template>
	<div class = "login_div">
        <p> {{greeting}} </p>
        <form>
            <label for = "emailText" > Email address: </label>
            <input v-model="email" id = "emailText"  type = "email"  > </input>
            <br>
            <label for = "passwordText" > Password: </label>
            <input v-model = "password" id = "passwordText"  type = "password"> </input>
            <br>
            <input @click="submit" type = "submit" value = "Log in"> </input>
        </form>

        <router-link to="/register">Sign Up?</router-link>        
    </div>
</template>

<script>
    import axios from 'axios';

	export default {
			name: 'login',
			components: {

		},  
		data: function () {
			return {
			greeting: 'LOGIN OR GET OUT',
            email: "null",
            password: '',
			}
		},
        methods: {
            submit: function(){
                console.log(this.email)
                console.log(this.password)
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