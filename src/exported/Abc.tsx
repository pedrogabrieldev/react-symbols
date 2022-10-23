import IconAbcFill0Wght100Grad0Opsz48 from '../components/AbcFill0Wght100Grad0Opsz48'
import IconAbcFill0Wght200Grad0Opsz48 from '../components/AbcFill0Wght200Grad0Opsz48'
import IconAbcFill0Wght300Grad0Opsz48 from '../components/AbcFill0Wght300Grad0Opsz48'
import IconAbcFill0Wght400Grad0Opsz48 from '../components/AbcFill0Wght400Grad0Opsz48'
import IconAbcFill0Wght500Grad0Opsz48 from '../components/AbcFill0Wght500Grad0Opsz48'
import IconAbcFill0Wght600Grad0Opsz48 from '../components/AbcFill0Wght600Grad0Opsz48'
import IconAbcFill0Wght700Grad0Opsz48 from '../components/AbcFill0Wght700Grad0Opsz48'
import IconAbcFill1Wght100Grad0Opsz48 from '../components/AbcFill1Wght100Grad0Opsz48'
import IconAbcFill1Wght200Grad0Opsz48 from '../components/AbcFill1Wght200Grad0Opsz48'
import IconAbcFill1Wght300Grad0Opsz48 from '../components/AbcFill1Wght300Grad0Opsz48'
import IconAbcFill1Wght400Grad0Opsz48 from '../components/AbcFill1Wght400Grad0Opsz48'
import IconAbcFill1Wght500Grad0Opsz48 from '../components/AbcFill1Wght500Grad0Opsz48'
import IconAbcFill1Wght600Grad0Opsz48 from '../components/AbcFill1Wght600Grad0Opsz48'
import IconAbcFill1Wght700Grad0Opsz48 from '../components/AbcFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAbc = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAbcFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAbcFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAbcFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAbcFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAbcFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAbcFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAbcFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAbcFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAbcFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAbcFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAbcFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAbcFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAbcFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAbcFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
