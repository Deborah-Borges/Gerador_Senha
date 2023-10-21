
export default function Input(props) {

    return (
        <div>
            <input
                type="number"
                id="passwordSize"
                min={1}
                value={props.passwordSize}
                onChange={(ev) => props.setPasswordSize(ev.target.value)}
            />
        </div>

    )
}