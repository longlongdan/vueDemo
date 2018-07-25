<template>
	<div class="index">
		<index-header></index-header>
		<index-nav></index-nav>
		<index-banner></index-banner>
		<index-content></index-content>
		<index-table></index-table>
	</div>
</template>

<script>
import indexHeader from '@/pages/compontents/header.vue'
import indexNav from '@/pages/compontents/nav.vue'
import indexBanner from '@/pages/compontents/banner.vue'
import indexContent from '@/pages/compontents/content.vue'
import indexTable from '@/pages/compontents/table.vue'

export default {
  name: 'index',
  components: {indexHeader,indexNav,indexBanner,indexContent,indexTable}
}
</script>

<style scoped>
* {
    margin:0px;
    padding:0px;
}
	
</style>
