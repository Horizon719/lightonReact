
class Model{
    #allapot;
    #allapotLista = [];
    #meret;
    constructor(meret){
        this.#meret = meret;
        this.#allapot = false;
        for (let i = 0; i < this.#meret * this.#meret; i++) {
            this.#allapotLista[i] = "";
        }
        this.rndAllapotlista();
    }

    setAllapot(index){
        const row = Math.floor(index / this.#meret);
        const col = index % this.#meret;
    
        if (col - 1 >= 0) {
            this.#allapotLista[index - 1] = !this.#allapotLista[index - 1];
        }
        if (col + 1 < this.#meret) {
            this.#allapotLista[index + 1] = !this.#allapotLista[index + 1];
        }
        if (row - 1 >= 0) {
            this.#allapotLista[index - this.#meret] = !this.#allapotLista[index - this.#meret];
        }
        if (row + 1 < this.#meret) {
            this.#allapotLista[index + this.#meret] = !this.#allapotLista[index + this.#meret];
        }
    
        this.#allapotLista[index] = !this.#allapotLista[index];
    }
    

    getAllapot(){
        return this.#allapot;
    }

    getAllapotLista(){
        return [...this.#allapotLista];
    }

    rndAllapotlista(){
        for (let i = 0; i < this.#allapotLista.length; i++) {
            if (Math.floor(Math.random() * 11) > 2) {
                this.#allapotLista[i] = false;
            } else {
                this.#allapotLista[i] = true;
            }
        }
    }

} export default Model