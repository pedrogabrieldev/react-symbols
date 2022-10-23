import IconGTranslateFill0Wght100Grad0Opsz48 from '../components/GTranslateFill0Wght100Grad0Opsz48'
import IconGTranslateFill0Wght200Grad0Opsz48 from '../components/GTranslateFill0Wght200Grad0Opsz48'
import IconGTranslateFill0Wght300Grad0Opsz48 from '../components/GTranslateFill0Wght300Grad0Opsz48'
import IconGTranslateFill0Wght400Grad0Opsz48 from '../components/GTranslateFill0Wght400Grad0Opsz48'
import IconGTranslateFill0Wght500Grad0Opsz48 from '../components/GTranslateFill0Wght500Grad0Opsz48'
import IconGTranslateFill0Wght600Grad0Opsz48 from '../components/GTranslateFill0Wght600Grad0Opsz48'
import IconGTranslateFill0Wght700Grad0Opsz48 from '../components/GTranslateFill0Wght700Grad0Opsz48'
import IconGTranslateFill1Wght100Grad0Opsz48 from '../components/GTranslateFill1Wght100Grad0Opsz48'
import IconGTranslateFill1Wght200Grad0Opsz48 from '../components/GTranslateFill1Wght200Grad0Opsz48'
import IconGTranslateFill1Wght300Grad0Opsz48 from '../components/GTranslateFill1Wght300Grad0Opsz48'
import IconGTranslateFill1Wght400Grad0Opsz48 from '../components/GTranslateFill1Wght400Grad0Opsz48'
import IconGTranslateFill1Wght500Grad0Opsz48 from '../components/GTranslateFill1Wght500Grad0Opsz48'
import IconGTranslateFill1Wght600Grad0Opsz48 from '../components/GTranslateFill1Wght600Grad0Opsz48'
import IconGTranslateFill1Wght700Grad0Opsz48 from '../components/GTranslateFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGTranslate = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGTranslateFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGTranslateFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGTranslateFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGTranslateFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGTranslateFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGTranslateFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGTranslateFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGTranslateFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGTranslateFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGTranslateFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGTranslateFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGTranslateFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGTranslateFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGTranslateFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
