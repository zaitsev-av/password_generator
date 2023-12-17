import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M1 12s4.2-6 11-6c1 0 1.8.1 2.7.3l-6.3 6.3A4 4 0 0 1 8 11c0-1 .3-1.8.9-2.5-2.4.8-4.2 2.4-5.3 3.5a14.9 14.9 0 0 0 3 2.4l-1.5 1.5C2.5 14 1 12 1 12m22 0s-4.2 6-11 6c-1 0-1.8-.1-2.7-.3L5 22l-1.5-1.5 17-17L22 5l-3.1 3.1C21.5 10 23 12 23 12m-2.6 0a14.8 14.8 0 0 0-3-2.4L16 11a4 4 0 0 1-4 4l-1 1h1c4 0 7-2.5 8.4-4"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
export default memo(ForwardRef)

