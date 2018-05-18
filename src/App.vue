<template>
  <div id="app">
    <p><button @click.prevent="getTv()">Actualiser</button></p>
    <form>
      <p><label for="tvname">Tv name: </label><input class="champ" type="text" id="tvname" ref="tvname"/></p>
      <p><label for="ipAdress">Tv Ip: </label><input class="champ" type="text" id="ipAdress" ref="ipAdress"/></p>
      <p><label for="compo">Tv composition: </label><input class="champ" type="text" id="compo" ref="compo"/></p>
      <p><button @click.prevent="postTv()">Ajouter</button></p>
    </form>
    <ul>
      <li v-for="tv in this.Tvs">{{ tv.name }} | {{ tv.ipAdress }} | {{ tv.compositionId }} <button @click.prevent="delTv(tv)">Supprimer</button></li>
    </ul>
  </div>
</template>

<script>
    var axios = require('axios');
export default {
  name: 'App',
    data() {
      return {
          Tvs: this.getTv(),
          tv:{id:'', name:'', ipAdress:'', compositionId:''}
      }
    },
    methods: {
      addTv(){
            if (this.$refs.tvname.value == '' ){
                alert("Tv name can not be empty");
                return false;
            }else if (this.$refs.ipAdress.value == '' ){
                alert("Tv Ip can not be empty");
                return false;
            }else if ( this.$refs.compo.value == ''){
                alert("composition id can not be empty");
                return false;
            }
            this.Tvs.push({
                id: this.$refs.tvid.value,
                name: this.$refs.tvname.value,
                ipAdress: this.$refs.ipAdress.value,
                compositionId: this.$refs.compo.value
            })
            return true;
        },
        delTv: function(tv){
          axios.delete('http://localhost:8089/tv/' + tv.id)
          this.Tvs.splice(this.Tvs.indexOf(tv), 1);
        },
        getTv(){
          axios.get('http://localhost:8089/tv')
              .then(response=>{
                  console.log(response.data);
                  this.Tvs = response.data;
            });
        },
        postTv(){
            if (this.$refs.tvname.value == '' ){
                alert("Tv name can not be empty");
                return false;
            }else if (this.$refs.ipAdress.value == '' ){
                alert("Tv Ip can not be empty");
                return false;
            }

            this.tv.ipAdress = this.$refs.ipAdress.value;
            this.tv.name = this.$refs.tvname.value;
            this.tv.compositionId = this.$refs.compo.value;

            axios.post('http://localhost:8089/tv', this.tv)
                .then(response =>{
                    console.log(response.data);
                    console.log(response.data.name);
                    console.log(response.data.compositionId);
                    this.Tvs.push(response.data);
                });
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
