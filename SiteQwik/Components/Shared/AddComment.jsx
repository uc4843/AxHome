import { component$ } from "@builder.io/qwik"
import { useComment } from "Social"
import {
    LongText,
    Text,
} from "Forms"
import { Message } from "Shared"

const AddComment = component$(({
    body,
    ctaText,
    entity,
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
        progress,
    } = useComment(entity)

    const submitText = ctaText || textButton

    return <>
        <div class="w-full mx-auto mt-10 mb-6">

            <p class="font-bold mb-4 text-xl">
                {title}
            </p>

            <div class="w-full">
                <Text
                    class="w-full bg-custom-color3 px-5 py-4 mt-4 rounded-md focus:outline-hidden placeholder-gray-500"
                    type="text"
                    modelBind={model}
                    property="Name"
                    placeholder={name?.placeholder}
                />
            </div>
            <div class="w-full">
                <LongText
                    class="w-full mt-4 bg-custom-color3 px-5 py-4 rounded-md focus:outline-hidden placeholder-gray-500 resize-none"
                    modelBind={model}
                    property="Body"
                    placeholder={body?.placeholder}
                />
            </div>
            <div class="flex justify-end mt-4">
                <span
                    class="px-10 py-3 inline-block ms-auto text-center text-lg rounded-md text-slate-50 hover:text-slate-50 bg-custom-color1 hover:bg-custom-color2 transition-all cursor-pointer"
                    onClick$={handleSubmit}
                >
                    {progress.value ? "...." : submitText}
                </span>
            </div>

            {
                isMessageShown.value && isSuccess.value &&
                <Message
                    isSuccess={isSuccess.value}
                    message={isSuccess.value ? successMessage : errorMessage}
                />

            }

        </div>
    </>
})

export default AddComment
