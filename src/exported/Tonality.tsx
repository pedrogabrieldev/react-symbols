import IconTonalityFill0Wght100Grad0Opsz48 from '../components/TonalityFill0Wght100Grad0Opsz48'
import IconTonalityFill0Wght200Grad0Opsz48 from '../components/TonalityFill0Wght200Grad0Opsz48'
import IconTonalityFill0Wght300Grad0Opsz48 from '../components/TonalityFill0Wght300Grad0Opsz48'
import IconTonalityFill0Wght400Grad0Opsz48 from '../components/TonalityFill0Wght400Grad0Opsz48'
import IconTonalityFill0Wght500Grad0Opsz48 from '../components/TonalityFill0Wght500Grad0Opsz48'
import IconTonalityFill0Wght600Grad0Opsz48 from '../components/TonalityFill0Wght600Grad0Opsz48'
import IconTonalityFill0Wght700Grad0Opsz48 from '../components/TonalityFill0Wght700Grad0Opsz48'
import IconTonalityFill1Wght100Grad0Opsz48 from '../components/TonalityFill1Wght100Grad0Opsz48'
import IconTonalityFill1Wght200Grad0Opsz48 from '../components/TonalityFill1Wght200Grad0Opsz48'
import IconTonalityFill1Wght300Grad0Opsz48 from '../components/TonalityFill1Wght300Grad0Opsz48'
import IconTonalityFill1Wght400Grad0Opsz48 from '../components/TonalityFill1Wght400Grad0Opsz48'
import IconTonalityFill1Wght500Grad0Opsz48 from '../components/TonalityFill1Wght500Grad0Opsz48'
import IconTonalityFill1Wght600Grad0Opsz48 from '../components/TonalityFill1Wght600Grad0Opsz48'
import IconTonalityFill1Wght700Grad0Opsz48 from '../components/TonalityFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTonality = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTonalityFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTonalityFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTonalityFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTonalityFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTonalityFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTonalityFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTonalityFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTonalityFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTonalityFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTonalityFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTonalityFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTonalityFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTonalityFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTonalityFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
