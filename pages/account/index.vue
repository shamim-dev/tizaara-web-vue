<template>
	<div class="container">
		<h2 style="margin:100px;">Account profile page, this is secured page for authenticate user</h2>
	</div>
</template>

<script>
	export default {
	  middleware: 'auth'
	}
</script>