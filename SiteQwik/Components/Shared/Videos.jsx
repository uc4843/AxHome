import { Video } from "Base"

const Videos = ({ entity }) => {

    const {
        hasVideos,
        videos,
    } = entity.relatedItems

    return <>
        {
            hasVideos &&
            <div class="w-full">
                {
                    videos.map(video => <div
                        class="w-full my-8"
                        key={video.id}
                    >
                        {
                            video.title &&
                            <p class="py-4">
                                {video.title}
                            </p>
                        }
                        {
                            video.embedCode &&
                            <>
                                <div dangerouslySetInnerHTML={video.embedCode} />
                            </>
                        }
                        {
                            video.url &&
                            <Video
                                controls
                                link={video.url}
                            />
                        }
                    </div>)
                }
            </div>
        }
    </>
}

export default Videos
