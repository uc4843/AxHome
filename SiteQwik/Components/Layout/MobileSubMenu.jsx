const MobileSubMenu = ({
    isOpenSubMenu,
    items,
}) => {

    return <>
        <ul class={`${isOpenSubMenu.value ? 'block ' : 'hidden '} p-0 bg-gray-200 w-full`}>
            {
                items?.map(item =>
                    <li
                        class='py-2 px-4 border-dashed border-b border-custom-color2 last:border-0'
                        key={item.id}
                    >
                        <a href={item?.url ?? '#'}>
                            {item?.title}
                        </a>
                    </li>
                )
            }
        </ul>
    </>

}

export default MobileSubMenu
