import * as React from 'react'
import useEmblaCarousel, { type EmblaCarouselType, type EmblaOptionsType, type EmblaEventType } from 'embla-carousel-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { cn } from '@/lib/utils'

const TWEEN_FACTOR_BASE = 0.2

export const ZoomSlider = ({ slides, options, className }: { slides: React.ReactNode[], options?: EmblaOptionsType, className?: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = React.useRef(0)
  const tweenNodes = React.useRef<HTMLElement[]>([])

  const setTweenNodes = React.useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.zoom-slider__slide') as HTMLElement
    })
  }, [])

  const setTweenFactor = React.useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = React.useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        const diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          const scale = Math.max(0.7, 1 - Math.abs(diffToTarget * tweenFactor.current))

          const tweenNode = tweenNodes.current[slideIndex]
          if (tweenNode) {
            tweenNode.style.transform = `scale(${scale})`
          }
        })
      })
    },
    []
  )

  React.useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenScale])

  return (
    <Carousel ref={emblaRef} className={cn("w-full", className)}>
        <CarouselContent>
            {slides.map((slide, index) => (
                <CarouselItem key={index} className="basis-1/3">
                    <div className="p-1 zoom-slider__slide">
                       {slide}
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  )
}
