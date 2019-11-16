
<template>
	<div class = "login_div">
        <p> {{greeting}} </p>
        <form>
            <label for = "emailText" > Email address: </label>
            <input id = "emailText"  type = "email"  > </input>
            <br>
            <label for = "passwordText" > Password: </label>
            <input id = "passwordText"  type = "password"> </input>
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
			greeting: 'LOGIN OR GET OUT'
			}
		},
        methods: {
            submit: () => {
                console.log("DID I DO IT?")
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