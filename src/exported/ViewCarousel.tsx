import IconViewCarouselFill0Wght100Grad0Opsz48 from '../components/ViewCarouselFill0Wght100Grad0Opsz48'
import IconViewCarouselFill0Wght200Grad0Opsz48 from '../components/ViewCarouselFill0Wght200Grad0Opsz48'
import IconViewCarouselFill0Wght300Grad0Opsz48 from '../components/ViewCarouselFill0Wght300Grad0Opsz48'
import IconViewCarouselFill0Wght400Grad0Opsz48 from '../components/ViewCarouselFill0Wght400Grad0Opsz48'
import IconViewCarouselFill0Wght500Grad0Opsz48 from '../components/ViewCarouselFill0Wght500Grad0Opsz48'
import IconViewCarouselFill0Wght600Grad0Opsz48 from '../components/ViewCarouselFill0Wght600Grad0Opsz48'
import IconViewCarouselFill0Wght700Grad0Opsz48 from '../components/ViewCarouselFill0Wght700Grad0Opsz48'
import IconViewCarouselFill1Wght100Grad0Opsz48 from '../components/ViewCarouselFill1Wght100Grad0Opsz48'
import IconViewCarouselFill1Wght200Grad0Opsz48 from '../components/ViewCarouselFill1Wght200Grad0Opsz48'
import IconViewCarouselFill1Wght300Grad0Opsz48 from '../components/ViewCarouselFill1Wght300Grad0Opsz48'
import IconViewCarouselFill1Wght400Grad0Opsz48 from '../components/ViewCarouselFill1Wght400Grad0Opsz48'
import IconViewCarouselFill1Wght500Grad0Opsz48 from '../components/ViewCarouselFill1Wght500Grad0Opsz48'
import IconViewCarouselFill1Wght600Grad0Opsz48 from '../components/ViewCarouselFill1Wght600Grad0Opsz48'
import IconViewCarouselFill1Wght700Grad0Opsz48 from '../components/ViewCarouselFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewCarousel = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewCarouselFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewCarouselFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewCarouselFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewCarouselFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewCarouselFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewCarouselFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewCarouselFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewCarouselFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewCarouselFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewCarouselFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewCarouselFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewCarouselFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewCarouselFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewCarouselFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
