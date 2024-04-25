type statusPropsType = {
    status: "pending" | "success" | "error"
}

export const Status = (props: statusPropsType) => {
    let message
    if (props.status === "pending") {
        message = "API is pending"
    }
    else if (props.status === "success") {
        message = "API Fetch success"
    } else if (props.status === "error") {
        message = "Not Found"
    }

    return (
        <div>
            <h1>{message}</h1>
        </div>
    )

}