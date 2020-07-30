class chaine
{
    chaine:string;

    constructor(str:string)
    {
        this.chaine = str;
    }

    /** Fonction qui recupere la longueur
        de la chaine de caractère 
        =================================
        @str : string
        retourne un int 
        =================================
    */
    recupereLongueur(str:string){
        return str.length;
    }

    /** Fonction qui recupere la longueur
        de la chaine de caractère 
        =================================
        @str : string
        @id :number
        retourne un int 
        =================================
    */
    recupereCaractereA(id:number, str:string){
        return str.charAt(id);
    }
    /**Fonction qui change un caractere dans une chaine de caractere
        =================================
        @str : string
        @carac : string
        @id : numder
        retourne un string
        ================================
     */
    changeCaractere(str:string ,id:number,carac:string){
        let position = str.charAt(id);
        return str.replace (position,carac);
    }
    
}