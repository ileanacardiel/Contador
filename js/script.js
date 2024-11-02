const app1 = {
    data(){
        return{
           colorFondo:'', 
           validacion: 'Nombre mayor a 4 letras',
           nombre:'',
           clase:0,
           tamanio:20,
           cantidad:0,
           numerito:'aqui va la suma',
           nuevaTarea: '',
           progress:0,
            tareas: [
                { texto: 'Tender la cama', completado: false },
                { texto: 'Cepillarse los dientes', completado: false },
                { texto: 'Ir a la escuela', completado: false },
                { texto: 'Ir a hacer las compras', completado: false },
                { texto: 'Bañarse', completado: false },
            ],
        }
    },
    methods:{
        validar:function(){
            if(this.nombre.length == 0){
                this.clase = 0;
            }
            else if(this.nombre.length >0 && this.nombre.length <4){
                this.validacion='Nombre inválido';
                this.clase = 2;
            }
            else{ 
                this.validacion='Nombre válidado';
                this.clase = 1;
            }
        },
        agregarTarea() {
            if (this.nuevaTarea.trim() !== '') {
              this.tareas.push({ texto: this.nuevaTarea, completado: false })
              this.nuevaTarea = ''
            }
          },
          marcarCompletada(index) {
            this.tareas[index].completado = !this.tareas[index].completado
        },
        increment() {
            if (this.progress < 100) {
              this.progress++;
            }
          },
          decrement() {
            if (this.progress > 0) {
              this.progress--;
            }
        }
    },
    computed:{
        colorValidacion(){
            return{
                colorNegro:this.clase == 0,
                colorVerde:this.clase == 1,
                colorRojo:this.clase == 2
            }
        },
        tamanioFuente(){
            return{
                fontSize:this.tamanio + 'px',
            }
        },
        tareasCompletadas() {
            return this.tareas.filter(tarea => tarea.completado).length
        }
    }
};
const apli2 = Vue.createApp(app1).mount('#seccion');