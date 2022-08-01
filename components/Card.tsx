import { useState } from "react"

interface IVideo {
    playlist: []
    description: string
    public: boolean
    publishDate: string
    title: string
    topics: []
    urlTitle: string
    __v: number
    _id: string
}

interface Props {
    video: IVideo
}

export default function Card({ video }: Props) {
    const [readMore, setReadMore] = useState(false)


    return (
        <div key={video._id} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md m-1">
            <a href={`https://www.youtube.com/watch?v=${video._id}`}>
                <img className="rounded-t-lg" src={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{new Date(video.publishDate).toDateString()}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">{video.title}</p>
                {readMore && <span className='mb-3 font-normal text-gray-400'>{video.description}</span>}
                <button onClick={() => setReadMore(readMore ? false : true)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 ">
                    {readMore ? 'Read Less' : 'Read More'}
                    {readMore ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path></svg>
                        : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path></svg>}
                </button>
            </div>
        </div>

    )
}