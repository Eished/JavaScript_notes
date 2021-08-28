<template lang="html">
  <div class="list">
    <ul>
      <li v-for="item in list" :key="item.name">
        {{item.name}}-{{item.addr}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'list',
  data () {
    return {
      list: []
    }
  },
  async mounted () {
    const { data: { list } } = await axios.get('/list')
    this.$data.list = list
  }
}
</script>

<style lang="css" scoped>
</style>
