import IconStorageFill0Wght100Grad0Opsz48 from '../components/StorageFill0Wght100Grad0Opsz48'
import IconStorageFill0Wght200Grad0Opsz48 from '../components/StorageFill0Wght200Grad0Opsz48'
import IconStorageFill0Wght300Grad0Opsz48 from '../components/StorageFill0Wght300Grad0Opsz48'
import IconStorageFill0Wght400Grad0Opsz48 from '../components/StorageFill0Wght400Grad0Opsz48'
import IconStorageFill0Wght500Grad0Opsz48 from '../components/StorageFill0Wght500Grad0Opsz48'
import IconStorageFill0Wght600Grad0Opsz48 from '../components/StorageFill0Wght600Grad0Opsz48'
import IconStorageFill0Wght700Grad0Opsz48 from '../components/StorageFill0Wght700Grad0Opsz48'
import IconStorageFill1Wght100Grad0Opsz48 from '../components/StorageFill1Wght100Grad0Opsz48'
import IconStorageFill1Wght200Grad0Opsz48 from '../components/StorageFill1Wght200Grad0Opsz48'
import IconStorageFill1Wght300Grad0Opsz48 from '../components/StorageFill1Wght300Grad0Opsz48'
import IconStorageFill1Wght400Grad0Opsz48 from '../components/StorageFill1Wght400Grad0Opsz48'
import IconStorageFill1Wght500Grad0Opsz48 from '../components/StorageFill1Wght500Grad0Opsz48'
import IconStorageFill1Wght600Grad0Opsz48 from '../components/StorageFill1Wght600Grad0Opsz48'
import IconStorageFill1Wght700Grad0Opsz48 from '../components/StorageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStorage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStorageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStorageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStorageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStorageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStorageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStorageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStorageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStorageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStorageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStorageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStorageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStorageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStorageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStorageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
