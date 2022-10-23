import IconHighQualityFill0Wght100Grad0Opsz48 from '../components/HighQualityFill0Wght100Grad0Opsz48'
import IconHighQualityFill0Wght200Grad0Opsz48 from '../components/HighQualityFill0Wght200Grad0Opsz48'
import IconHighQualityFill0Wght300Grad0Opsz48 from '../components/HighQualityFill0Wght300Grad0Opsz48'
import IconHighQualityFill0Wght400Grad0Opsz48 from '../components/HighQualityFill0Wght400Grad0Opsz48'
import IconHighQualityFill0Wght500Grad0Opsz48 from '../components/HighQualityFill0Wght500Grad0Opsz48'
import IconHighQualityFill0Wght600Grad0Opsz48 from '../components/HighQualityFill0Wght600Grad0Opsz48'
import IconHighQualityFill0Wght700Grad0Opsz48 from '../components/HighQualityFill0Wght700Grad0Opsz48'
import IconHighQualityFill1Wght100Grad0Opsz48 from '../components/HighQualityFill1Wght100Grad0Opsz48'
import IconHighQualityFill1Wght200Grad0Opsz48 from '../components/HighQualityFill1Wght200Grad0Opsz48'
import IconHighQualityFill1Wght300Grad0Opsz48 from '../components/HighQualityFill1Wght300Grad0Opsz48'
import IconHighQualityFill1Wght400Grad0Opsz48 from '../components/HighQualityFill1Wght400Grad0Opsz48'
import IconHighQualityFill1Wght500Grad0Opsz48 from '../components/HighQualityFill1Wght500Grad0Opsz48'
import IconHighQualityFill1Wght600Grad0Opsz48 from '../components/HighQualityFill1Wght600Grad0Opsz48'
import IconHighQualityFill1Wght700Grad0Opsz48 from '../components/HighQualityFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHighQuality = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHighQualityFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHighQualityFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHighQualityFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHighQualityFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHighQualityFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHighQualityFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHighQualityFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHighQualityFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHighQualityFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHighQualityFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHighQualityFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHighQualityFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHighQualityFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHighQualityFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
