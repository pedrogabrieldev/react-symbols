import IconCottageFill0Wght100Grad0Opsz48 from '../components/CottageFill0Wght100Grad0Opsz48'
import IconCottageFill0Wght200Grad0Opsz48 from '../components/CottageFill0Wght200Grad0Opsz48'
import IconCottageFill0Wght300Grad0Opsz48 from '../components/CottageFill0Wght300Grad0Opsz48'
import IconCottageFill0Wght400Grad0Opsz48 from '../components/CottageFill0Wght400Grad0Opsz48'
import IconCottageFill0Wght500Grad0Opsz48 from '../components/CottageFill0Wght500Grad0Opsz48'
import IconCottageFill0Wght600Grad0Opsz48 from '../components/CottageFill0Wght600Grad0Opsz48'
import IconCottageFill0Wght700Grad0Opsz48 from '../components/CottageFill0Wght700Grad0Opsz48'
import IconCottageFill1Wght100Grad0Opsz48 from '../components/CottageFill1Wght100Grad0Opsz48'
import IconCottageFill1Wght200Grad0Opsz48 from '../components/CottageFill1Wght200Grad0Opsz48'
import IconCottageFill1Wght300Grad0Opsz48 from '../components/CottageFill1Wght300Grad0Opsz48'
import IconCottageFill1Wght400Grad0Opsz48 from '../components/CottageFill1Wght400Grad0Opsz48'
import IconCottageFill1Wght500Grad0Opsz48 from '../components/CottageFill1Wght500Grad0Opsz48'
import IconCottageFill1Wght600Grad0Opsz48 from '../components/CottageFill1Wght600Grad0Opsz48'
import IconCottageFill1Wght700Grad0Opsz48 from '../components/CottageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCottage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCottageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCottageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCottageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCottageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCottageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCottageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCottageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCottageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCottageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCottageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCottageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCottageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCottageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCottageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
