<template lang="html">
  <div class="price">
    <ul>
      <li v-for="item in price" :key="item">{{item}}</li>
    </ul>
    <button type="button" name="button" @click="up">升序</button>
    <button type="button" name="button" @click="down">降序</button>
    <button type="button" name="button" @click="reset">重置</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      price: [],
      proxy: ''
    }
  },
  methods: {
    up () { this.price = this.proxy.up },
    down () { this.price = this.proxy.down },
    reset () { this.price = this.proxy.defalut }
  },
  async mounted () {
    const { data: { price } } = await axios.get('/proxy')
    Object.freeze(price)
    this.proxy = new Proxy({}, {
      get (target, key) {
        if (key === 'up') {
          return [].concat(price).sort((a, b) => a - b)
        } else if (key === 'down') {
          return [].concat(price).sort((a, b) => b - a)
        } else {
          return price
        }
      },
      set () {
        return false
      }
    })
    // this.$data.price 等同于 this.price 等同于 this.$data.proxy
    // 预置数据显示
    this.$data.price = this.proxy.defalut
  }
}
</script>

<style lang="css" scoped>
ul,
li {
  list-style-type: none;
}
</style>
