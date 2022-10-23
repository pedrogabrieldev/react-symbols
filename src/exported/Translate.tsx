import IconTranslateFill0Wght100Grad0Opsz48 from '../components/TranslateFill0Wght100Grad0Opsz48'
import IconTranslateFill0Wght200Grad0Opsz48 from '../components/TranslateFill0Wght200Grad0Opsz48'
import IconTranslateFill0Wght300Grad0Opsz48 from '../components/TranslateFill0Wght300Grad0Opsz48'
import IconTranslateFill0Wght400Grad0Opsz48 from '../components/TranslateFill0Wght400Grad0Opsz48'
import IconTranslateFill0Wght500Grad0Opsz48 from '../components/TranslateFill0Wght500Grad0Opsz48'
import IconTranslateFill0Wght600Grad0Opsz48 from '../components/TranslateFill0Wght600Grad0Opsz48'
import IconTranslateFill0Wght700Grad0Opsz48 from '../components/TranslateFill0Wght700Grad0Opsz48'
import IconTranslateFill1Wght100Grad0Opsz48 from '../components/TranslateFill1Wght100Grad0Opsz48'
import IconTranslateFill1Wght200Grad0Opsz48 from '../components/TranslateFill1Wght200Grad0Opsz48'
import IconTranslateFill1Wght300Grad0Opsz48 from '../components/TranslateFill1Wght300Grad0Opsz48'
import IconTranslateFill1Wght400Grad0Opsz48 from '../components/TranslateFill1Wght400Grad0Opsz48'
import IconTranslateFill1Wght500Grad0Opsz48 from '../components/TranslateFill1Wght500Grad0Opsz48'
import IconTranslateFill1Wght600Grad0Opsz48 from '../components/TranslateFill1Wght600Grad0Opsz48'
import IconTranslateFill1Wght700Grad0Opsz48 from '../components/TranslateFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTranslate = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTranslateFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTranslateFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTranslateFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTranslateFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTranslateFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTranslateFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTranslateFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTranslateFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTranslateFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTranslateFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTranslateFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTranslateFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTranslateFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTranslateFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
