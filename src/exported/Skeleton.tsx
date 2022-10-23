import IconSkeletonFill0Wght100Grad0Opsz48 from '../components/SkeletonFill0Wght100Grad0Opsz48'
import IconSkeletonFill0Wght200Grad0Opsz48 from '../components/SkeletonFill0Wght200Grad0Opsz48'
import IconSkeletonFill0Wght300Grad0Opsz48 from '../components/SkeletonFill0Wght300Grad0Opsz48'
import IconSkeletonFill0Wght400Grad0Opsz48 from '../components/SkeletonFill0Wght400Grad0Opsz48'
import IconSkeletonFill0Wght500Grad0Opsz48 from '../components/SkeletonFill0Wght500Grad0Opsz48'
import IconSkeletonFill0Wght600Grad0Opsz48 from '../components/SkeletonFill0Wght600Grad0Opsz48'
import IconSkeletonFill0Wght700Grad0Opsz48 from '../components/SkeletonFill0Wght700Grad0Opsz48'
import IconSkeletonFill1Wght100Grad0Opsz48 from '../components/SkeletonFill1Wght100Grad0Opsz48'
import IconSkeletonFill1Wght200Grad0Opsz48 from '../components/SkeletonFill1Wght200Grad0Opsz48'
import IconSkeletonFill1Wght300Grad0Opsz48 from '../components/SkeletonFill1Wght300Grad0Opsz48'
import IconSkeletonFill1Wght400Grad0Opsz48 from '../components/SkeletonFill1Wght400Grad0Opsz48'
import IconSkeletonFill1Wght500Grad0Opsz48 from '../components/SkeletonFill1Wght500Grad0Opsz48'
import IconSkeletonFill1Wght600Grad0Opsz48 from '../components/SkeletonFill1Wght600Grad0Opsz48'
import IconSkeletonFill1Wght700Grad0Opsz48 from '../components/SkeletonFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSkeleton = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSkeletonFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSkeletonFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSkeletonFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSkeletonFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSkeletonFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSkeletonFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSkeletonFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSkeletonFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSkeletonFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSkeletonFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSkeletonFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSkeletonFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSkeletonFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSkeletonFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
