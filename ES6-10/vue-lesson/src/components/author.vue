<template lang="html">
  <div class="list">
    <h1>Authors</h1>
    <ul>
      <li v-for="item in authors" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data () {
    return {
      authors: {}
    };
  },
  async mounted () {
    const {
      data: { allAuthors }
    } = await axios.get("/author");
    const author = new Proxy(allAuthors, {
      has (target, key) {
        const keys = Reflect.ownKeys(target).slice(0, -1);
        for (const item of keys) {
          console.log(target, item);
          if (target[item].includes(key)) {
            return true;
          }
        }
        return false;
      }
    });
    author[Symbol.iterator] = function* () {
      const all = this;
      const keys = Reflect.ownKeys(this).slice(0, -2);
      let values = [];
      while (true) {
        if (!values.length) {
          if (keys.length) {
            values = [].concat(all[keys[0]]);
            keys.shift();
            yield values.shift();
          } else {
            return false;
          }
        } else {
          yield values.shift();
        }
      }
    };
    console.log("oiuqr" in author);
    this.authors = author;
  }
};
</script>

<style>
ul,
li {
  list-style-type: none;
}
</style>
