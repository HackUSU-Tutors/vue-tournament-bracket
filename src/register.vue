
<template>
	<div class = "login_div">
        <p> {{greeting}} </p>
        <form>
            <label for = "nameText" > Name: </label>
            <input id = "nameText"  type = "text"  > </input>
            <br>
            <label for = "emailText" > Email address: </label>
            <input id = "emailText"  type = "email"  > </input>
            <br>
            <label for = "passwordText" > Password: </label>
            <input id = "passwordText"  type = "password"> </input>
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
			greeting: 'Sign Up'
			}
		},
        methods: {
            submit: () => {
                console.log("DID I Sign up ... NO?")
                axios.post('')
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