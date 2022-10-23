import IconActivityZoneFill0Wght100Grad0Opsz48 from '../components/ActivityZoneFill0Wght100Grad0Opsz48'
import IconActivityZoneFill0Wght200Grad0Opsz48 from '../components/ActivityZoneFill0Wght200Grad0Opsz48'
import IconActivityZoneFill0Wght300Grad0Opsz48 from '../components/ActivityZoneFill0Wght300Grad0Opsz48'
import IconActivityZoneFill0Wght400Grad0Opsz48 from '../components/ActivityZoneFill0Wght400Grad0Opsz48'
import IconActivityZoneFill0Wght500Grad0Opsz48 from '../components/ActivityZoneFill0Wght500Grad0Opsz48'
import IconActivityZoneFill0Wght600Grad0Opsz48 from '../components/ActivityZoneFill0Wght600Grad0Opsz48'
import IconActivityZoneFill0Wght700Grad0Opsz48 from '../components/ActivityZoneFill0Wght700Grad0Opsz48'
import IconActivityZoneFill1Wght100Grad0Opsz48 from '../components/ActivityZoneFill1Wght100Grad0Opsz48'
import IconActivityZoneFill1Wght200Grad0Opsz48 from '../components/ActivityZoneFill1Wght200Grad0Opsz48'
import IconActivityZoneFill1Wght300Grad0Opsz48 from '../components/ActivityZoneFill1Wght300Grad0Opsz48'
import IconActivityZoneFill1Wght400Grad0Opsz48 from '../components/ActivityZoneFill1Wght400Grad0Opsz48'
import IconActivityZoneFill1Wght500Grad0Opsz48 from '../components/ActivityZoneFill1Wght500Grad0Opsz48'
import IconActivityZoneFill1Wght600Grad0Opsz48 from '../components/ActivityZoneFill1Wght600Grad0Opsz48'
import IconActivityZoneFill1Wght700Grad0Opsz48 from '../components/ActivityZoneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconActivityZone = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconActivityZoneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconActivityZoneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconActivityZoneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconActivityZoneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconActivityZoneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconActivityZoneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconActivityZoneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconActivityZoneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconActivityZoneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconActivityZoneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconActivityZoneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconActivityZoneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconActivityZoneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconActivityZoneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
