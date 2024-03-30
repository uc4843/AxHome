import {
    $,
    component$,
} from "@builder.io/qwik"

const AdvancedInput = component$(({
    class: internalClass,
    placeholder,
    value,
    name,
    onChange,
}) => {

    const inputChangeHandler = $((e) => {
        onChange(e.target.name, Number(e.target.value.replace(/\D/g, "")))
    })

    const newValue = value > 0 ? value : null

    return <input
        class={internalClass}
        name={name}
        onInput$={inputChangeHandler}
        placeholder={placeholder}
        type="text"
        value={newValue?.toLocaleString()}
    />

})

export default AdvancedInput
