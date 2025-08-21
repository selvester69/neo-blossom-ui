import * as React from 'react'
import useEmblaCarousel, { type EmblaCarouselType, type EmblaOptionsType } from 'embla-carousel-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { cn } from '@/lib/utils'

const TWEEN_FACTOR = 1.2

export const ParallaxSlider = ({ slides, options, className }: { slides: React.ReactNode[], options?: EmblaOptionsType, className?: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [tweenValues, setTweenValues] = React.useState<number[]>([])

  const onScroll = React.useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      return diffToTarget * (-1 * TWEEN_FACTOR) * 100
    })
    setTweenValues(styles)
  }, [emblaApi, setTweenValues])


  React.useEffect(() => {
    if (!emblaApi) return
    onScroll()
    emblaApi.on('scroll', onScroll).on('reInit', onScroll)
  }, [emblaApi, onScroll])

  return (
    <Carousel ref={emblaRef} className={cn("w-full", className)}>
        <CarouselContent>
            {slides.map((slide, index) => (
                <CarouselItem key={index}>
                    <div className="overflow-hidden">
                        <div
                            style={{
                                transform: `translateX(${tweenValues[index]}%)`,
                                transition: 'transform 0.1s'
                            }}
                        >
                            {slide}
                        </div>
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
    </Carousel>
  )
}
