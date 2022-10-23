import IconEqualizerFill0Wght100Grad0Opsz48 from '../components/EqualizerFill0Wght100Grad0Opsz48'
import IconEqualizerFill0Wght200Grad0Opsz48 from '../components/EqualizerFill0Wght200Grad0Opsz48'
import IconEqualizerFill0Wght300Grad0Opsz48 from '../components/EqualizerFill0Wght300Grad0Opsz48'
import IconEqualizerFill0Wght400Grad0Opsz48 from '../components/EqualizerFill0Wght400Grad0Opsz48'
import IconEqualizerFill0Wght500Grad0Opsz48 from '../components/EqualizerFill0Wght500Grad0Opsz48'
import IconEqualizerFill0Wght600Grad0Opsz48 from '../components/EqualizerFill0Wght600Grad0Opsz48'
import IconEqualizerFill0Wght700Grad0Opsz48 from '../components/EqualizerFill0Wght700Grad0Opsz48'
import IconEqualizerFill1Wght100Grad0Opsz48 from '../components/EqualizerFill1Wght100Grad0Opsz48'
import IconEqualizerFill1Wght200Grad0Opsz48 from '../components/EqualizerFill1Wght200Grad0Opsz48'
import IconEqualizerFill1Wght300Grad0Opsz48 from '../components/EqualizerFill1Wght300Grad0Opsz48'
import IconEqualizerFill1Wght400Grad0Opsz48 from '../components/EqualizerFill1Wght400Grad0Opsz48'
import IconEqualizerFill1Wght500Grad0Opsz48 from '../components/EqualizerFill1Wght500Grad0Opsz48'
import IconEqualizerFill1Wght600Grad0Opsz48 from '../components/EqualizerFill1Wght600Grad0Opsz48'
import IconEqualizerFill1Wght700Grad0Opsz48 from '../components/EqualizerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEqualizer = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEqualizerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEqualizerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEqualizerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEqualizerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEqualizerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEqualizerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEqualizerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEqualizerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEqualizerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEqualizerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEqualizerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEqualizerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEqualizerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEqualizerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
