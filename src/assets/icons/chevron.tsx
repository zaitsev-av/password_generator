import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg height={24} ref={ref} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'M18.8 15.8a.7.7 0 0 1-1 0L12 10l-5.7 5.7a.7.7 0 1 1-1-1l6.2-6.3a.7.7 0 0 1 1 0l6.3 6.2a.7.7 0 0 1 0 1Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
