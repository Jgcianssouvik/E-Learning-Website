import React from 'react'

function DemoVideos() {
    return (
        <div className="flex flex-col justify-center items-center text-white text-3xl h-screen ">
            <div className='capitalize mb-7 text-blue-400 hover:text-yellow-500 '>You can see Demo course videos here : </div>
            <div class="aspect-w-25 aspect-h-16 border border-white ">
                <iframe src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0" width="640" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>



        </div>
    )
}

export default DemoVideos