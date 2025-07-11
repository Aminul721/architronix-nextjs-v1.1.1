"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules"
import 'swiper/css';

import project_img_3 from "@/assets/images/project-image-3.jpg"
import project_img_4 from "@/assets/images/project-image-4.jpg"
import project_img_5 from "@/assets/images/project-image-5.jpg"

import ProgressAndNatigation from '../../ui/progressAndNatigation'
import Image from 'next/image';
import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl';

const projectImgList = [
    {
        id: 1,
        img: project_img_3
    },
    {
        id: 2,
        img: project_img_4
    },
    {
        id: 3,
        img: project_img_5
    },
    {
        id: 4,
        img: project_img_3
    },
    {
        id: 5,
        img: project_img_4
    },
    {
        id: 6,
        img: project_img_5
    },

]
const ProjectSingleS = () => {
    const pagination = {
        clickable: true,
        el: ".progressbar-pagination",
        type: 'progressbar'
    };
    return (
        <div className=' project-slider-one'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    750: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1320: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                }}
                pagination={pagination}
                loop={true}
                modules={[Pagination, Navigation]}
                
            >

                {
                    projectImgList.map(({ id, img }) => {
                        return (
                            <SwiperSlide key={id} >
                                <Image src={img} loading='lazy'  placeholder='blur' blurDataURL={staticBluarDataUrl} alt='img' className='w-full h-full min-h-[250px] max-h-[250px]  md:min-h-16 md:max-h-full' />
                            </SwiperSlide>
                        )
                    })
                }

                <div className='container'>

                    <ProgressAndNatigation />

                </div>
            </Swiper>
        </div>
    )
}

export default ProjectSingleS