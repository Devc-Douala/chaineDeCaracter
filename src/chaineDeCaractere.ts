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

    
}