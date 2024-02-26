import { component$ } from "@builder.io/qwik"
import { Message } from "Base"
import {
    LongText,
    Text,
    useForm,
} from "Forms"
import { Loading } from "Svg"

const Form = component$(({
    fields,
    form,
}) => {
    const {
        email,
        message,
        fullName,
    } = fields

    const {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
        progress,
    } = useForm({
        fields: form?.relatedItems?.fields,
        form,
    })

    return <>
        <div class="w-full mx-auto">

            <h2 class="text-lg font-bold hidden md:block">
                {form?.title}
            </h2>

            <div>
                <Text
                    type="text"
                    class="block w-full border border-gray-300 bg-gray-50 px-4 py-3 mt-4 text-sm focus:outline-blue-700 placeholder-gray-500 text-gray-900 rounded-xl"
                    modelBind={model}
                    placeholder={fullName?.placeholder}
                    property={fullName?.key}
                />
            </div>
            <div>
                <Text
                    type="mail"
                    class="block w-full border border-gray-300 bg-gray-50 px-4 py-3 mt-4 text-sm focus:outline-blue-700 placeholder-gray-500 text-gray-900 rounded-xl"
                    modelBind={model}
                    placeholder={email?.placeholder}
                    property={email?.key}
                />
            </div>

            <div>
                <LongText
                    class="block w-full mt-4 border border-gray-300 bg-gray-50 px-4 py-3 text-sm focus:outline-blue-700 placeholder-gray-500 text-gray-900 rounded-xl resize-none"
                    modelBind={model}
                    placeholder={message?.placeholder}
                    property={message?.key}
                >
                </LongText>
            </div>
            <div class="text-end mt-4">

                <button
                    id="buttonSubmit"
                    aria-label={form.ctaText}
                    class={`${progress.value ? "bg-gray-300" : ""} relative z-0 w-36 py-2 inline-block mx-auto text-center text-lg text-slate-900 border border-gray-300 rounded-xl hover: transition-all`}
                    onClick$={handleSubmit}
                >
                    <span class="relative z-20">
                        {
                            progress.value
                                ? <Loading class="animate-spin w-7 aspect-square mx-auto" /> :
                                form.ctaText
                        }
                    </span>
                </button>

            </div>
            {
                isMessageShown.value &&
                <Message
                    isSuccess={isSuccess.value}
                    message={isSuccess.value ? form.successMessage : form.errorMessage}
                />
            }
        </div>
    </>
})

export default Form
