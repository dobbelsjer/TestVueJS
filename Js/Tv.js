Vue.component('read-tv', {
    props: ['tvline'],
    template: '<li>{{ tvline.name }} | {{ tvline.ip }} | {{ tvline.composition_id }}</li>'
})

const app3 = new Vue({
    el:'#app3',
    data: {
        Tvs: [
            {id: '1', name: 'Tv1', ip: '192.168.1.25', composition_id: '1001'},
            {id: '2', name: 'Tv2', ip: '192.168.1.26', composition_id: '1015'},
            {id: '3', name: 'Tv3', ip: '192.168.1.27', composition_id: '1001'}
        ]
    },
    methods:{
        addTv(){
            this.Tvs.push({id: this.$refs.tvid.value, name: this.$refs.tvname.value, ip: this.$refs.ip.value, composition_id: this.$refs.compo.value})
        }
    }
})