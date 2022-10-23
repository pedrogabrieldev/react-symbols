import IconHomeMaxDotsFill0Wght100Grad0Opsz48 from '../components/HomeMaxDotsFill0Wght100Grad0Opsz48'
import IconHomeMaxDotsFill0Wght200Grad0Opsz48 from '../components/HomeMaxDotsFill0Wght200Grad0Opsz48'
import IconHomeMaxDotsFill0Wght300Grad0Opsz48 from '../components/HomeMaxDotsFill0Wght300Grad0Opsz48'
import IconHomeMaxDotsFill0Wght400Grad0Opsz48 from '../components/HomeMaxDotsFill0Wght400Grad0Opsz48'
import IconHomeMaxDotsFill0Wght500Grad0Opsz48 from '../components/HomeMaxDotsFill0Wght500Grad0Opsz48'
import IconHomeMaxDotsFill0Wght600Grad0Opsz48 from '../components/HomeMaxDotsFill0Wght600Grad0Opsz48'
import IconHomeMaxDotsFill0Wght700Grad0Opsz48 from '../components/HomeMaxDotsFill0Wght700Grad0Opsz48'
import IconHomeMaxDotsFill1Wght100Grad0Opsz48 from '../components/HomeMaxDotsFill1Wght100Grad0Opsz48'
import IconHomeMaxDotsFill1Wght200Grad0Opsz48 from '../components/HomeMaxDotsFill1Wght200Grad0Opsz48'
import IconHomeMaxDotsFill1Wght300Grad0Opsz48 from '../components/HomeMaxDotsFill1Wght300Grad0Opsz48'
import IconHomeMaxDotsFill1Wght400Grad0Opsz48 from '../components/HomeMaxDotsFill1Wght400Grad0Opsz48'
import IconHomeMaxDotsFill1Wght500Grad0Opsz48 from '../components/HomeMaxDotsFill1Wght500Grad0Opsz48'
import IconHomeMaxDotsFill1Wght600Grad0Opsz48 from '../components/HomeMaxDotsFill1Wght600Grad0Opsz48'
import IconHomeMaxDotsFill1Wght700Grad0Opsz48 from '../components/HomeMaxDotsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHomeMaxDots = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHomeMaxDotsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHomeMaxDotsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHomeMaxDotsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHomeMaxDotsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHomeMaxDotsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHomeMaxDotsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHomeMaxDotsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHomeMaxDotsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHomeMaxDotsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHomeMaxDotsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHomeMaxDotsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHomeMaxDotsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHomeMaxDotsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHomeMaxDotsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
