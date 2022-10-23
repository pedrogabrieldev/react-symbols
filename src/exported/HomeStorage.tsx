import IconHomeStorageFill0Wght100Grad0Opsz48 from '../components/HomeStorageFill0Wght100Grad0Opsz48'
import IconHomeStorageFill0Wght200Grad0Opsz48 from '../components/HomeStorageFill0Wght200Grad0Opsz48'
import IconHomeStorageFill0Wght300Grad0Opsz48 from '../components/HomeStorageFill0Wght300Grad0Opsz48'
import IconHomeStorageFill0Wght400Grad0Opsz48 from '../components/HomeStorageFill0Wght400Grad0Opsz48'
import IconHomeStorageFill0Wght500Grad0Opsz48 from '../components/HomeStorageFill0Wght500Grad0Opsz48'
import IconHomeStorageFill0Wght600Grad0Opsz48 from '../components/HomeStorageFill0Wght600Grad0Opsz48'
import IconHomeStorageFill0Wght700Grad0Opsz48 from '../components/HomeStorageFill0Wght700Grad0Opsz48'
import IconHomeStorageFill1Wght100Grad0Opsz48 from '../components/HomeStorageFill1Wght100Grad0Opsz48'
import IconHomeStorageFill1Wght200Grad0Opsz48 from '../components/HomeStorageFill1Wght200Grad0Opsz48'
import IconHomeStorageFill1Wght300Grad0Opsz48 from '../components/HomeStorageFill1Wght300Grad0Opsz48'
import IconHomeStorageFill1Wght400Grad0Opsz48 from '../components/HomeStorageFill1Wght400Grad0Opsz48'
import IconHomeStorageFill1Wght500Grad0Opsz48 from '../components/HomeStorageFill1Wght500Grad0Opsz48'
import IconHomeStorageFill1Wght600Grad0Opsz48 from '../components/HomeStorageFill1Wght600Grad0Opsz48'
import IconHomeStorageFill1Wght700Grad0Opsz48 from '../components/HomeStorageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHomeStorage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHomeStorageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHomeStorageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHomeStorageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHomeStorageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHomeStorageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHomeStorageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHomeStorageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHomeStorageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHomeStorageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHomeStorageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHomeStorageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHomeStorageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHomeStorageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHomeStorageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
