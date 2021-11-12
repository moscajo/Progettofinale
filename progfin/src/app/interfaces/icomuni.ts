export interface Icomuni {
    content: Icomuni[];
    
    
    id?: number,
    nome: string,
    provincia: {
        id?: number,
        nome: string,
        sigla: string
    }

}
