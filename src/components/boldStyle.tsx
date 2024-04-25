type styleProps = {
    children: React.ReactNode
}
export const BoldStyle = (props: styleProps) => {
    return (
        <div style={{ fontFamily: "monospace", fontWeight: 900, textTransform: "uppercase" }}>
            {props.children}
        </div>
    )
}