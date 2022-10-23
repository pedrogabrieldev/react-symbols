import IconOutputFill0Wght100Grad0Opsz48 from '../components/OutputFill0Wght100Grad0Opsz48'
import IconOutputFill0Wght200Grad0Opsz48 from '../components/OutputFill0Wght200Grad0Opsz48'
import IconOutputFill0Wght300Grad0Opsz48 from '../components/OutputFill0Wght300Grad0Opsz48'
import IconOutputFill0Wght400Grad0Opsz48 from '../components/OutputFill0Wght400Grad0Opsz48'
import IconOutputFill0Wght500Grad0Opsz48 from '../components/OutputFill0Wght500Grad0Opsz48'
import IconOutputFill0Wght600Grad0Opsz48 from '../components/OutputFill0Wght600Grad0Opsz48'
import IconOutputFill0Wght700Grad0Opsz48 from '../components/OutputFill0Wght700Grad0Opsz48'
import IconOutputFill1Wght100Grad0Opsz48 from '../components/OutputFill1Wght100Grad0Opsz48'
import IconOutputFill1Wght200Grad0Opsz48 from '../components/OutputFill1Wght200Grad0Opsz48'
import IconOutputFill1Wght300Grad0Opsz48 from '../components/OutputFill1Wght300Grad0Opsz48'
import IconOutputFill1Wght400Grad0Opsz48 from '../components/OutputFill1Wght400Grad0Opsz48'
import IconOutputFill1Wght500Grad0Opsz48 from '../components/OutputFill1Wght500Grad0Opsz48'
import IconOutputFill1Wght600Grad0Opsz48 from '../components/OutputFill1Wght600Grad0Opsz48'
import IconOutputFill1Wght700Grad0Opsz48 from '../components/OutputFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOutput = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOutputFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOutputFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOutputFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOutputFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOutputFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOutputFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOutputFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOutputFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOutputFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOutputFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOutputFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOutputFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOutputFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOutputFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
