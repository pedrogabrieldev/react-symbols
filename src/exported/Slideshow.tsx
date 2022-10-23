import IconSlideshowFill0Wght100Grad0Opsz48 from '../components/SlideshowFill0Wght100Grad0Opsz48'
import IconSlideshowFill0Wght200Grad0Opsz48 from '../components/SlideshowFill0Wght200Grad0Opsz48'
import IconSlideshowFill0Wght300Grad0Opsz48 from '../components/SlideshowFill0Wght300Grad0Opsz48'
import IconSlideshowFill0Wght400Grad0Opsz48 from '../components/SlideshowFill0Wght400Grad0Opsz48'
import IconSlideshowFill0Wght500Grad0Opsz48 from '../components/SlideshowFill0Wght500Grad0Opsz48'
import IconSlideshowFill0Wght600Grad0Opsz48 from '../components/SlideshowFill0Wght600Grad0Opsz48'
import IconSlideshowFill0Wght700Grad0Opsz48 from '../components/SlideshowFill0Wght700Grad0Opsz48'
import IconSlideshowFill1Wght100Grad0Opsz48 from '../components/SlideshowFill1Wght100Grad0Opsz48'
import IconSlideshowFill1Wght200Grad0Opsz48 from '../components/SlideshowFill1Wght200Grad0Opsz48'
import IconSlideshowFill1Wght300Grad0Opsz48 from '../components/SlideshowFill1Wght300Grad0Opsz48'
import IconSlideshowFill1Wght400Grad0Opsz48 from '../components/SlideshowFill1Wght400Grad0Opsz48'
import IconSlideshowFill1Wght500Grad0Opsz48 from '../components/SlideshowFill1Wght500Grad0Opsz48'
import IconSlideshowFill1Wght600Grad0Opsz48 from '../components/SlideshowFill1Wght600Grad0Opsz48'
import IconSlideshowFill1Wght700Grad0Opsz48 from '../components/SlideshowFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSlideshow = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSlideshowFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSlideshowFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSlideshowFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSlideshowFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSlideshowFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSlideshowFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSlideshowFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSlideshowFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSlideshowFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSlideshowFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSlideshowFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSlideshowFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSlideshowFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSlideshowFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
