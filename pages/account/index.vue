<template>
	<div class="container">
		<h4 style="margin:50px 100px 20px 50px;"> <em>Hello, {{user.firstName}}</em></h4>
		<hr>
		<ul style=" list-style-type: none;">
			<li> <strong>Firs Name : </strong> {{user.firstName}} </li>
			<li> <strong>Last Name : </strong> {{user.lasName}} </li>
			<li> <strong>Email Name : </strong> {{user.email}} </li>
			<li> <strong>Phone Name : </strong> {{user.phone}} </li>
		</ul>
		<br><br>
	</div>
</template>

<script>
	export default {
	  middleware: 'auth'
	}
</script>