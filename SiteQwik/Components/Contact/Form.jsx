import { component$ } from '@builder.io/qwik'
import { Message } from 'Base'
import {
    LongText,
    Text,
    useForm,
} from 'Forms'
import { Loading } from 'Svg'

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
                    class="w-full border bg-custom-color3/30 px-4 py-3 mt-4 text-sm focus:outline-none placeholder-gray-500 text-slate-50 rounded-xl"
                    modelBind={model}
                    placeholder={fullName?.placeholder}
                    property={fullName?.key}
                />
            </div>
            <div>
                <Text
                    type="mail"
                    class="w-full border bg-custom-color3/30 px-4 py-3 mt-4 text-sm focus:outline-none placeholder-gray-500 text-slate-50 rounded-xl"
                    modelBind={model}
                    placeholder={email?.placeholder}
                    property={email?.key}
                />
            </div>

            <div>
                <LongText
                    class="w-full mt-4 border bg-custom-color3/30 px-4 py-3 text-sm focus:outline-none placeholder-gray-500 text-slate-50 rounded-xl"
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
                    class={`${progress.value ? "bg-gray-300" : ""} relative z-0 w-36 py-2 inline-block mx-auto text-center text-lg text-slate-50 rounded-xl hover: transition-all`}
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
