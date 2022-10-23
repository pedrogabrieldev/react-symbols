import IconHomeMaxFill0Wght100Grad0Opsz48 from '../components/HomeMaxFill0Wght100Grad0Opsz48'
import IconHomeMaxFill0Wght200Grad0Opsz48 from '../components/HomeMaxFill0Wght200Grad0Opsz48'
import IconHomeMaxFill0Wght300Grad0Opsz48 from '../components/HomeMaxFill0Wght300Grad0Opsz48'
import IconHomeMaxFill0Wght400Grad0Opsz48 from '../components/HomeMaxFill0Wght400Grad0Opsz48'
import IconHomeMaxFill0Wght500Grad0Opsz48 from '../components/HomeMaxFill0Wght500Grad0Opsz48'
import IconHomeMaxFill0Wght600Grad0Opsz48 from '../components/HomeMaxFill0Wght600Grad0Opsz48'
import IconHomeMaxFill0Wght700Grad0Opsz48 from '../components/HomeMaxFill0Wght700Grad0Opsz48'
import IconHomeMaxFill1Wght100Grad0Opsz48 from '../components/HomeMaxFill1Wght100Grad0Opsz48'
import IconHomeMaxFill1Wght200Grad0Opsz48 from '../components/HomeMaxFill1Wght200Grad0Opsz48'
import IconHomeMaxFill1Wght300Grad0Opsz48 from '../components/HomeMaxFill1Wght300Grad0Opsz48'
import IconHomeMaxFill1Wght400Grad0Opsz48 from '../components/HomeMaxFill1Wght400Grad0Opsz48'
import IconHomeMaxFill1Wght500Grad0Opsz48 from '../components/HomeMaxFill1Wght500Grad0Opsz48'
import IconHomeMaxFill1Wght600Grad0Opsz48 from '../components/HomeMaxFill1Wght600Grad0Opsz48'
import IconHomeMaxFill1Wght700Grad0Opsz48 from '../components/HomeMaxFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHomeMax = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHomeMaxFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHomeMaxFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHomeMaxFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHomeMaxFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHomeMaxFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHomeMaxFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHomeMaxFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHomeMaxFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHomeMaxFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHomeMaxFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHomeMaxFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHomeMaxFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHomeMaxFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHomeMaxFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
