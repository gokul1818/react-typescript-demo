
import { personObj } from "./commonType"

type propsType = {
    name: string,
    id?: number,
    active: boolean,
    personObj: personObj
    arrayOfObject?: personObj[]

}

export const Greet = (props: propsType) => {
    const { id = 0, arrayOfObject = [{ firstName: "ytdg", lastName: "sdfggsdjf" }] } = props
    return (
        <div>
            <p>
                {`${id}- ${props.name} - user is ${props.active ? "active " : "inactive"} `}
            </p>
            <br />
            <p>
                {props.personObj.firstName} {props.personObj.lastName}
            </p>
            <br />
            <p>
                {arrayOfObject.map(name => {
                    return (
                        <div key={name.lastName}>
                            <p>
                                {name.firstName}{name.lastName}
                            </p>
                        </div>
                    )
                })}
            </p>

        </div>
    )
}