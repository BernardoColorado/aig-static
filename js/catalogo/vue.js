const store = new Vuex.Store({

  state:{
    marca:[],
    sector:[],
    medida:[]
  },
  mutations:{

    setMarca(state,marca){
      state.marca=marca;
    },
    setSector(state,sector){
      state.sector=sector;
    },
    setMedida(state,medida){
      state.medida=medida;
    }

  },
  actions:{
    marcaRequest({commit}){

      axios.get('http://67.205.155.166/api/marca')
      .then(response=>{
        commit('setMarca',response.data);
      });

    },
    sectorRequest({commit}){

      axios.get('http://67.205.155.166/api/sector')
      .then(response=>{
        commit('setSector',response.data);
      });

    },
    medidaRequest({commit}){

      axios.get('http://67.205.155.166/api/medida')
      .then(response=>{
        console.log(response.data);
        commit('setSector',response.data);
      });

    }

  }

});

const app = new Vue({
  el: '#app',
  data:{

  },
  computed:{
    ...Vuex.mapState(['marca','sector','medida'])
  },
  mounted:()=>{

  },
  methods:{
    ...Vuex.mapMutations(['setMarca','setSector','setMedida']),
    ...Vuex.mapActions(['marcaRequest','sectorRequest','medidaRequest'])
  }

})