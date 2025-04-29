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
                        class="w-full my-10"
                        key={video.id}
                    >
                        {
                            video.embedCode &&
                            <div dangerouslySetInnerHTML={video.embedCode} />
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
