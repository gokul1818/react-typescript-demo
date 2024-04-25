type childProps = {
    children: React.ReactNode
}

export const Heading = (props: childProps) => {
    return (
        <div>
            <h2>
                <span style={{ color: "green" }}>
                    {props.children}
                </span>
            </h2>
        </div>
    )
}