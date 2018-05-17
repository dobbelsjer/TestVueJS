<template>
  <div id="app">
    <form>
      <p><label for="tvid">Tv Id: </label><input class="champ" type="text" id="tvid" ref="tvid"/></p>
      <p><label for="tvname">Tv name: </label><input class="champ" type="text" id="tvname" ref="tvname"/></p>
      <p><label for="ip">Tv ip: </label><input class="champ" type="text" id="ip" ref="ip"/></p>
      <p><label for="compo">Tv composition: </label><input class="champ" type="text" id="compo" ref="compo"/></p>
      <p><button @click.prevent="addTv()">Ajouter</button></p>
    </form>
    <ul>
      <li v-for="tvline in this.Tvs">{{ tvline.name }} | {{ tvline.ip }} | {{ tvline.composition_id }} <button @click.prevent="delTv(tvline)">Supprimer</button></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
    data() {
      return {
          Tvs: [
              {id: '1', name: 'Tv1', ip: '192.168.1.25', composition_id: '1001'},
              {id: '2', name: 'Tv2', ip: '192.168.1.26', composition_id: '1015'},
              {id: '3', name: 'Tv3', ip: '192.168.1.27', composition_id: '1001'}
          ],
          tvline:{id:'', name:'', ip:'', composition_id:''}
      }
    },
    methods: {
        addTv() {
            if(this.$refs.tvid.value == ''){
                alert("Tv id can not be empty");
                return false;
            }else if (this.$refs.tvname.value == '' ){
                alert("Tv name can not be empty");
                return false;
            }else if (this.$refs.ip.value == '' ){
                alert("Tv ip can not be empty");
                return false;
            }else if ( this.$refs.compo.value == ''){
                alert("composition id can not be empty");
                return false;
            }
            this.Tvs.push({
                id: this.$refs.tvid.value,
                name: this.$refs.tvname.value,
                ip: this.$refs.ip.value,
                composition_id: this.$refs.compo.value
            })
            return true;
        },
        delTv: function(tvline){
            this.Tvs.splice(this.Tvs.indexOf(tvline), 1)
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
