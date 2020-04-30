<template>

  <div>
  <Headersection/>
  <Navbarsection/>
    <nuxt />
    <Footersection/>
  </div>

</template>

<script>
	import Headersection from '@/components/Headersection'
	import Navbarsection from '@/components/Navbarsection'
	import Footersection from '@/components/Footersection'
	export default {
		components: {
			Headersection,
			Navbarsection,
			Footersection,
		}
	}
</script>
