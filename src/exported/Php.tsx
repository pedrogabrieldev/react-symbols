import IconPhpFill0Wght100Grad0Opsz48 from '../components/PhpFill0Wght100Grad0Opsz48'
import IconPhpFill0Wght200Grad0Opsz48 from '../components/PhpFill0Wght200Grad0Opsz48'
import IconPhpFill0Wght300Grad0Opsz48 from '../components/PhpFill0Wght300Grad0Opsz48'
import IconPhpFill0Wght400Grad0Opsz48 from '../components/PhpFill0Wght400Grad0Opsz48'
import IconPhpFill0Wght500Grad0Opsz48 from '../components/PhpFill0Wght500Grad0Opsz48'
import IconPhpFill0Wght600Grad0Opsz48 from '../components/PhpFill0Wght600Grad0Opsz48'
import IconPhpFill0Wght700Grad0Opsz48 from '../components/PhpFill0Wght700Grad0Opsz48'
import IconPhpFill1Wght100Grad0Opsz48 from '../components/PhpFill1Wght100Grad0Opsz48'
import IconPhpFill1Wght200Grad0Opsz48 from '../components/PhpFill1Wght200Grad0Opsz48'
import IconPhpFill1Wght300Grad0Opsz48 from '../components/PhpFill1Wght300Grad0Opsz48'
import IconPhpFill1Wght400Grad0Opsz48 from '../components/PhpFill1Wght400Grad0Opsz48'
import IconPhpFill1Wght500Grad0Opsz48 from '../components/PhpFill1Wght500Grad0Opsz48'
import IconPhpFill1Wght600Grad0Opsz48 from '../components/PhpFill1Wght600Grad0Opsz48'
import IconPhpFill1Wght700Grad0Opsz48 from '../components/PhpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
