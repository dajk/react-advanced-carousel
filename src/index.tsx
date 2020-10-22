import React from 'react'
import styles from './index.css'

interface ICarousel {
  children: React.ReactNode[]
  initialSlideIndex?: number
  onSlideChange?(index: number): void
}

const Carousel: React.FC<ICarousel> = ({
  children,
  initialSlideIndex = 0,
  onSlideChange,
}) => {
  const sliderRef = React.useRef<HTMLDivElement>(null)
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(
    initialSlideIndex
  )
  const [slideAnimation, setSlideAnimation] = React.useState(false)

  const showLeftArrow = currentSlideIndex !== 0
  const showRightArrow = currentSlideIndex !== children.length - 1

  React.useEffect(() => {
    sliderRef.current?.scrollTo({
      left: currentSlideIndex * sliderRef.current?.clientWidth,
    })
  }, [])

  React.useEffect(() => {
    if (slideAnimation) {
      sliderRef.current?.scrollTo({
        left: currentSlideIndex * sliderRef.current?.clientWidth,
        behavior: 'smooth',
      })
      setSlideAnimation(false)
    }
    onSlideChange?.(currentSlideIndex)
  }, [currentSlideIndex])

  React.useEffect(() => {
    const items = sliderRef.current?.getElementsByClassName(
      'react-carousel-library__item'
    )
    if (!items?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(items).indexOf(entry.target)
            setCurrentSlideIndex(index)
          }
        })
      },
      {
        threshold: 0.5,
      }
    )
    if (items?.length > 0) {
      Array.from(items).forEach((item) => {
        observer.observe(item)
      })
    }

    return () =>
      Array.from(items).forEach((item) => {
        observer.unobserve(item)
      })
  }, [sliderRef])

  return (
    <div className={styles.wrapper}>
      {showLeftArrow && (
        <div
          className={styles['arrow-wrapper']}
          style={{ left: 10 }}
          onClick={() => {
            if (currentSlideIndex !== 0) {
              setSlideAnimation(true)
              setCurrentSlideIndex(currentSlideIndex - 1)
            }
          }}
        >
          <span className={styles.arrow}>‹</span>
        </div>
      )}
      <div
        className={`${styles['react-carousel-library__slider']} ${styles.container}`}
        ref={sliderRef}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={`${styles.slider} react-carousel-library__item`}
          >
            {child}
          </div>
        ))}
      </div>

      {showRightArrow && (
        <div
          className={styles['arrow-wrapper']}
          style={{ right: 10 }}
          onClick={() => {
            if (currentSlideIndex !== children.length - 1) {
              setSlideAnimation(true)
              setCurrentSlideIndex(currentSlideIndex + 1)
            }
          }}
        >
          <span className={styles.arrow}>›</span>
        </div>
      )}
    </div>
  )
}

export default Carousel
