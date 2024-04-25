
type buttonprops = {
    handleclick: (id?: number | null | undefined) => void
    btnLabel: string
    id?: number | null | undefined
}

export const Button = ({ handleclick, btnLabel, id }: buttonprops) => {
    return (
        <div>
            <button onClick={(e) => handleclick(id)} > {btnLabel}</button>
        </div>
    )
}
