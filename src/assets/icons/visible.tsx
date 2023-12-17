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
      d="M12 6C5.2 6 1 12 1 12s4.2 6 11 6 11-6 11-6-4.2-6-11-6m0 10c-4 0-7-2.5-8.4-4 1-1 2.9-2.7 5.3-3.5A4 4 0 0 0 8 11a4 4 0 0 0 8 0 4 4 0 0 0-.9-2.5c2.4.8 4.2 2.4 5.3 3.5a12 12 0 0 1-8.4 4"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
