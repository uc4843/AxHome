import {
    $,
    component$,
    useSignal,
    useTask$,
    useVisibleTask$,
} from "@builder.io/qwik"
import { merge } from "Base"
import { ChevronDown } from "Svg"

const Select = component$(({
    all,
    boxClass,
    childClass,
    class: internalClass,
    filter,
    filterText,
    isDark,
    items,
    label,
    name,
    onChange,
    selected,
}) => {

    const boxRef = useSignal()
    const selectRef = useSignal()
    const isOpen = useSignal(false)
    const selectedItem = useSignal(label)
    const filteredItems = useSignal(items)

    const clickSelectHandler = $((e) => {
        e.stopPropagation()
        isOpen.value = !isOpen.value
    })

    const selectItemHandler = $((e, el) => {
        selectedItem.value = el.name
        onChange(e, el.slug)
        isOpen.value = false

    })

    const filterChangeHandler = $(e => {
        if (!e.target.value) {
            filteredItems.value = items
        } else {
            const name = e.target.value
            filteredItems.value = items?.filter(el => el.name.includes(name))
        }

    })

    const handleClickOutside = $(event => {
        if (
            boxRef.value &&
            !boxRef.value.contains(event.target) &&
            !selectRef.value.contains(event.target)
        ) {
            isOpen.value = false
        }
    })

    useVisibleTask$(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }
    )

    useTask$(({ track }) => {
        track(() => selected)
        const changedSelect = items?.find(el => el.slug == selected)
        selectedItem.value = changedSelect?.name || label
    })

    return <div class={merge("relative selection:text-inherit selection:bg-inherit w-full md:w-[150px] lg:w-[170px] px-1 py-0.5 rounded-md", internalClass)}>
        <div
            class="flex items-center justify-between cursor-pointer px-2 py-1"
            onClick$={clickSelectHandler}
            ref={selectRef}
        >
            <p>
                {selectedItem.value}
            </p>
            <div class="pointer-events-none inset-y-0 end-0 flex items-center text-gray-700">
                <ChevronDown class={merge("w-5 aspect-square", isDark ? "fill-black" : "fill-custom-color31")} />
            </div>
        </div>
        <div
            class={merge("absolute z-10 min-w-full lg:w-auto top-[45px] end-1/2 translate-x-[-50%] bg-white my-1 rounded-lg shadow-xl", boxClass, isOpen.value ? "block" : "hidden")}
            ref={boxRef}
        >
            <div class={merge("max-h-[200px] overflow-y-auto", isDark ?? "bg-custom-color4")}>
                {
                    items && items?.length > 0
                        ?
                        <>
                            {
                                filter && <div class="max-h-[200px] overflow-y-auto">
                                    <input
                                        class="w-full cursor-pointer selection:text-inherit selection:bg-inherit p-2 text-gray-600 rounded-md"
                                        onInput$={filterChangeHandler}
                                        placeholder={filterText}
                                    />
                                </div>
                            }
                            {
                                all && <p
                                    class={merge("w-full py-2 cursor-pointer px-2", childClass)}
                                    onClick$={(e) => selectItemHandler({ ...e, name: name }, { slug: null })}
                                >
                                    {all}
                                </p>
                            }
                            {
                                filteredItems.value?.map(el => <p
                                    class={merge("w-full py-2 cursor-pointer px-2", childClass)}
                                    key={el.id}
                                    onClick$={(e) => selectItemHandler({ ...e, name: name }, el)}
                                >
                                    {el?.name}
                                </p>)
                            }
                        </>
                        :
                        <p class="text-slate-300 h-12 flex items-center justify-center px-2">
                            no data !!
                        </p>
                }
            </div>
        </div>
    </div>
})

export default Select
