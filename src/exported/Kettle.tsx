import IconKettleFill0Wght100Grad0Opsz48 from '../components/KettleFill0Wght100Grad0Opsz48'
import IconKettleFill0Wght200Grad0Opsz48 from '../components/KettleFill0Wght200Grad0Opsz48'
import IconKettleFill0Wght300Grad0Opsz48 from '../components/KettleFill0Wght300Grad0Opsz48'
import IconKettleFill0Wght400Grad0Opsz48 from '../components/KettleFill0Wght400Grad0Opsz48'
import IconKettleFill0Wght500Grad0Opsz48 from '../components/KettleFill0Wght500Grad0Opsz48'
import IconKettleFill0Wght600Grad0Opsz48 from '../components/KettleFill0Wght600Grad0Opsz48'
import IconKettleFill0Wght700Grad0Opsz48 from '../components/KettleFill0Wght700Grad0Opsz48'
import IconKettleFill1Wght100Grad0Opsz48 from '../components/KettleFill1Wght100Grad0Opsz48'
import IconKettleFill1Wght200Grad0Opsz48 from '../components/KettleFill1Wght200Grad0Opsz48'
import IconKettleFill1Wght300Grad0Opsz48 from '../components/KettleFill1Wght300Grad0Opsz48'
import IconKettleFill1Wght400Grad0Opsz48 from '../components/KettleFill1Wght400Grad0Opsz48'
import IconKettleFill1Wght500Grad0Opsz48 from '../components/KettleFill1Wght500Grad0Opsz48'
import IconKettleFill1Wght600Grad0Opsz48 from '../components/KettleFill1Wght600Grad0Opsz48'
import IconKettleFill1Wght700Grad0Opsz48 from '../components/KettleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKettle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKettleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKettleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKettleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKettleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKettleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKettleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKettleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKettleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKettleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKettleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKettleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKettleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKettleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKettleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
