import IconPaletteFill0Wght100Grad0Opsz48 from '../components/PaletteFill0Wght100Grad0Opsz48'
import IconPaletteFill0Wght200Grad0Opsz48 from '../components/PaletteFill0Wght200Grad0Opsz48'
import IconPaletteFill0Wght300Grad0Opsz48 from '../components/PaletteFill0Wght300Grad0Opsz48'
import IconPaletteFill0Wght400Grad0Opsz48 from '../components/PaletteFill0Wght400Grad0Opsz48'
import IconPaletteFill0Wght500Grad0Opsz48 from '../components/PaletteFill0Wght500Grad0Opsz48'
import IconPaletteFill0Wght600Grad0Opsz48 from '../components/PaletteFill0Wght600Grad0Opsz48'
import IconPaletteFill0Wght700Grad0Opsz48 from '../components/PaletteFill0Wght700Grad0Opsz48'
import IconPaletteFill1Wght100Grad0Opsz48 from '../components/PaletteFill1Wght100Grad0Opsz48'
import IconPaletteFill1Wght200Grad0Opsz48 from '../components/PaletteFill1Wght200Grad0Opsz48'
import IconPaletteFill1Wght300Grad0Opsz48 from '../components/PaletteFill1Wght300Grad0Opsz48'
import IconPaletteFill1Wght400Grad0Opsz48 from '../components/PaletteFill1Wght400Grad0Opsz48'
import IconPaletteFill1Wght500Grad0Opsz48 from '../components/PaletteFill1Wght500Grad0Opsz48'
import IconPaletteFill1Wght600Grad0Opsz48 from '../components/PaletteFill1Wght600Grad0Opsz48'
import IconPaletteFill1Wght700Grad0Opsz48 from '../components/PaletteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPalette = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPaletteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPaletteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPaletteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPaletteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPaletteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPaletteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPaletteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPaletteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPaletteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPaletteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPaletteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPaletteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPaletteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPaletteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
