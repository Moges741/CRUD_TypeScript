let employe: {
    readonly id: number,
    name: string,
    display: (info: string) => void
} = {
    id : 33,
    name : "Moges",
    display : (info: string) => {
        console.log(info)
    }
}
