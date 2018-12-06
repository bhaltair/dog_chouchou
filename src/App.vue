<template>
  <div id="app">
    <h2>丑丑生日 {{ birthday }}</h2>
    <img
      src="https://static.lovefrontend.com/IMG_2199.jpg"
      alt="丑丑"
      width="200"
      srcset=""
    />
    <h3>到今天</h3>
    <p>
      已经 <b class="fz20">{{ age }} </b> 天了！
    </p>
    <p>
      第 <b class="fz20">{{ week }} </b> 周了！
    </p>
  </div>
</template>

<script>
import { SpringSpinner } from 'epic-spinners';
import dayjs from 'dayjs';
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  data() {
    return {
      birthday: dayjs('2018-09-25').format('YYYY-MM-DD'),
      age: Math.floor(
        (Date.now() - new Date('2018-09-25').valueOf()) / 86400000,
      ),
    };
  },
  computed: {
    week() {
      return Math.floor(this.age / 7);
    },
  },
  components: {
    HelloWorld,
    SpringSpinner,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fz20 {
  font-size: 30px;
  color: green;
}
</style>
