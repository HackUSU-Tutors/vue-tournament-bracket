<template>
	<div>
        <p> {{greeting}} </p>
        
    </div>
</template>

<script>

	export default {
			name: 'login',
			components: {

		},  
		data: function () {
			return {
			greeting: 'LOGIN OR GET OUT'
			}
		}
	}
</script>

<style scoped>
	p {
		font-size: 2em;
		text-align: center;
	} 
	
</style>