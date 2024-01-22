import { component$ } from '@builder.io/qwik'
import { useComment } from 'Social'
import {
    LongText,
    Text,
} from 'Forms'
import { Message } from 'Shared'

const AddComment = component$(({
    body,
    ctaText,
    email,
    entityGuid,
    entityType,
    errorMessage,
    name,
    submit: textButton,
    successMessage,
    title,
}) => {

    const {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
    } = useComment(entityType, entityGuid)

    return <>
        <div class="w-full max-w-[500px] lg:w-full mx-auto my-10 md:mb-20">

            <p class="font-bold mb-4 text-lg md:text-xl">
                {title}
            </p>

            <div class="flex flex-col sm:flex-row sm:gap-8">
                <div class="w-full">
                    <Text
                        class="w-full bg-custom-color2 px-5 text-white py-4 mt-4 focus:outline-none placeholder-gray-500 text-slate-50 rounded"
                        modelBind={model}
                        property="Name"
                        placeholder={name?.placeholder}
                    />
                </div>
                <div class="w-full">
                    <Text
                        type="mail"
                        class="w-full bg-custom-color2 px-5 text-white py-4 mt-4 focus:outline-none placeholder-gray-500 text-slate-50 rounded"
                        modelBind={model}
                        property={email?.key}
                        placeholder={email?.placeholder}
                    />
                </div>
            </div>
            <div class="w-full">
                <LongText
                    class="w-full mt-4 bg-custom-color2 text-white px-5 py-4 focus:outline-none placeholder-gray-500 text-slate-50 rounded"
                    modelBind={model}
                    property="Body"
                    placeholder={body?.placeholder}
                />
            </div>
            <div class="flex justify-end mt-1">
                <div
                    class="relative z-0 w-40 py-3 inline-block mx-auto text-center text-lg text-slate-50 rounded hover:text-slate-50 bg-custom-color1 after:absolute after:z-10 after:start-0 after:end-0 after:mx-auto after:top-1/2 after:w-0 after:h-0 hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:rotate-180 transition-all hover:after:bg-custom-color11 after:duration-500 overflow-hidden transition-all"
                    onClick$={handleSubmit}
                >
                    <p class="relative z-20">
                        {ctaText || textButton}
                    </p>
                </div>
            </div>

            {
                isMessageShown.value &&
                <Message
                    isSuccess={isSuccess.value}
                    message={isSuccess.value ? successMessage : errorMessage}
                />
            }

        </div>
    </>
})

export default AddComment
