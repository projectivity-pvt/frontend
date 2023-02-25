import React from 'react'
import Image from 'next/image'
// import ReactPlayer from 'react-player';



export const HomeBanner = () => {
    return (
        <>
            <div className='hero_banner mt-12'>
                <video src="/images/DataManagement.mp4" autoPlay loop muted style={{ height: "80vh", width: "100%", objectFit: "cover" }} />
                <div className='hero_banner_effect'>
                    <div className='text-white flex flex-col justify-center items-center h-full p-2'>
                        <h1 className='lg:text-4xl text-md p-2 '>Projectivity Content Automation</h1>
                        <p className='lg:text-lg text-sm text-center'>using the world's most intuitive AI-powered Multimodal Equipment Platform</p>
                        <button className='mt-5 text-sm border border-white rounded px-8 py-2 hover:bg-indigo-700 hover:border-indigo-800'>Contact Us</button>
                    </div>
                </div>
            </div>

            <div className='flex justify-around bg-indigo-900 p-2'>

                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/en/0/02/Dharma_Production_logo.png" width="150" height="40" />
                </div>

                <div className='flex items-center gap-2'>
                    <img src="https://www.pngfind.com/pngs/m/467-4670210_every-most-subscribed-youtube-channel-t-series-hd.png" style={{ borderRadius: "50%", width: "45px", height: "45px" }} />
                    <h4 className='text-md text-gray-300'>T-Series</h4>
                </div>

                <div className='flex items-center gap-2'>
                    <img src="https://licenceindia.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/news27novstep10licenseindia106415dde823c0005c.jpg?itok=PP8QU8ra" style={{ borderRadius: "50%", width: "45px", height: "45px" }} />
                    <h4 className='text-md text-gray-300'>Yash-Raj Films</h4>
                </div>

                <div className='flex items-center gap-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAnQbyvGENwRoyIDaOb8EIzTWjy_ZZoxzueQTDAgaYLAXMcfeV42-ojkyPhQu1A9zpzE&usqp=CAU" width="50" height="20" style={{ borderRadius: "50%" }} />
                    <h4 className='text-md text-gray-300'>Hyjack Productuions</h4>
                </div>
            </div>


        </>
    )
}
