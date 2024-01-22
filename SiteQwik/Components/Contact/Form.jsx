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

            <h2 class="font-bold text-2xl lg:text-4xl text-center mb-4">
                {form?.title}
            </h2>
            <p class="text-lg text-center">
                {form?.description}
            </p>

            <div>
                <Text
                    type="text"
                    class="w-full border bg-custom-color3/30 px-5 py-4 mt-4 focus:outline-none placeholder-gray-500 text-slate-50 rounded-xl"
                    modelBind={model}
                    placeholder={fullName?.placeholder}
                    property={fullName?.key}
                />
            </div>
            <div>
                <Text
                    type="mail"
                    class="w-full border bg-custom-color3/30 px-5 py-4 mt-4 focus:outline-none placeholder-gray-500 text-slate-50 rounded-xl"
                    modelBind={model}
                    placeholder={email?.placeholder}
                    property={email?.key}
                />
            </div>

            <div>
                <LongText
                    class="w-full mt-4 border bg-custom-color3/30 px-5 py-4 focus:outline-none placeholder-gray-500 text-slate-50 rounded-xl"
                    modelBind={model}
                    placeholder={message?.placeholder}
                    property={message?.key}
                >
                </LongText>
            </div>
            <div class="text-center mt-4">

                <button
                    id="buttonSubmit"
                    aria-label={form.ctaText}
                    class={`${progress.value ? "bg-gray-300" : ""} relative z-0 w-40 py-3 inline-block mx-auto text-center text-lg text-slate-50 rounded-xl hover:text-slate-50 bg-custom-color1 after:absolute after:z-10 after:start-0 after:end-0 after:mx-auto after:top-1/2 after:w-0 after:h-0 hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:rotate-180 transition-all hover:after:bg-custom-color3 after:duration-500 overflow-hidden transition-all`}
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
