const Lista = (
    function(){
    this.inicio = null
        function agregar(proceso){
            if (this.inicio == null){
                this.inicio = proceso
                proceso.siguiente = this.inicio
                proceso.anterior = this.inicio
            } else {
                let t = this.inicio
            while(t.siguiente != this.inicio){
                t = t.siguiente
            }
            t.siguiente = proceso
            t.siguiente.anterior = t
            t.siguiente.siguiente = this.inicio
            this.inicio.anterior = proceso
            }
        }

        function eliminar(proceso){
            let t = this.inicio

            if(this.inicio === proceso  && this.inicio.siguiente === this.inicio){
                this.inicio = null
            } else if (this.inicio === proceso){
                this.inicio.siguiente.anterior = this.inicio.anterior
                this.inicio.anterior.siguiente = this.inicio.siguiente
                this.inicio = this.inicio.siguiente
            } else {
                while (t.siguiente != proceso && t.siguiente != this.inicio){
                    t = t.siguiente
                }
    
                if (t.siguiente === proceso){
                    t.siguiente = t.siguiente.siguiente
                    t.siguiente.anterior = t
                }
            }
        }

        return{
            agregar: agregar,
            eliminar: eliminar
        }
    }
)

module.exports = Lista