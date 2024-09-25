import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

type ImageScrollProps = {
  children: React.ReactNode
}

const ImageScroll = (props: ImageScrollProps) => {
  const { children } = props
  return (
    <Slide
      canSwipe={true}
      slidesToScroll={1}
      slidesToShow={1}
      indicators={false}
      autoplay={false}
      prevArrow={<></>}
      nextArrow={<></>}
      responsive={[
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]}
    >
      {children}
    </Slide>
  )
}

export default ImageScroll
