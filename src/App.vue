<template>
  <div id="app">
    <h2>丑丑</h2>
    <img
      src="https://s1.ax1x.com/2020/05/06/YEKC6g.jpg"
      alt="丑丑"
      width="200"
      srcset=""
    />
    <p>
      生日 {{ birthday }}
    </p>
    <p>
      到今天已经 <b class="fz20">{{ day }} </b> 天了！
    </p>
    <p>
      {{ year }}岁 {{ month }} 个月
    </p>
  </div>
</template>

<script>
const BIRTHDAY = '2018-09-25';
export default {
  name: 'App',
  data() {
    return {
      birthday: BIRTHDAY,
      day: Math.floor(
        (Date.now() - new Date(BIRTHDAY).valueOf()) / 86400000,
      ),
    };
  },
  computed: {
    year() {
      return Math.floor(this.day / 365);
    },
    month() {
      return Math.floor((this.day - (this.year * 365)) / 30);
    },
    week() {
      return Math.floor(this.day / 7);
    },
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
