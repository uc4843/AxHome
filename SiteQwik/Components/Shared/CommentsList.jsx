import { LocalizedDate } from "Base"
import { Person } from "Svg"

const CommentsList = ({
    data,
    description,
    metadata,
}) => {

    return <>
        <div class='flex flex-col gap-4 mt-10 md:mt-12'>
            <div class="text-custom-color2 flex flex-wrap gap-2">
                <p>{metadata?.totalCount}</p>
                <p>{description}</p>
            </div>
            {
                data?.map(item => <>
                    <div class="bg-custom-color2 text-slate-50 p-5">
                        <div class="flex items-center gap-3 md:gap-6 mb-2">
                            <Person class="w-10 md:w-16 p-2 aspect-square bg-custom-color25 fill-custom-color2 rounded-full" />
                            <div class="flex flex-col gap-2">
                                <p class="font-bold">{item?.name}</p>
                                <div class="text-xs">
                                    <LocalizedDate
                                        utcDate={item?.utcDate}
                                        locale='fa'
                                    />
                                </div>
                            </div>
                        </div>

                        <p>
                            {item?.body}
                        </p>
                    </div>
                </>)
            }

        </div>
    </>
}

export default CommentsList
