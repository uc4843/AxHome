import { component$ } from '@builder.io/qwik'
import { Pagination as DefaultPagination } from 'Base'
import { useLocation } from '@builder.io/qwik-city'

const Pagination = component$(({ metadata }) => {

    const { url } = useLocation()

    return <div class='h-10'>
        123
    </div>
})

export default Pagination
