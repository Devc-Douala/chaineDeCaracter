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

    /** Fonction qui permet de faire la répétition d'une
        chaine de caractère un certain nombre de fois.
        =================================
        @chaine : string
        @nb  : number
        Retourne une nouvelle chaîne avec le nombre 
        spécifié de copies de la chaîne existante.
        Ex:  const str = 'JavaScript'; console.log(str.repeat(2)); // 'JavaScriptJavaScript'
        =================================
    */
    RepetitionDeLaChaine(str:string, nb:number){
        let nouvelleChaine = str.repeat(nb);
        return nouvelleChaine;
    }

    
}