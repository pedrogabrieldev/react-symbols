import IconPackageFill0Wght100Grad0Opsz48 from '../components/PackageFill0Wght100Grad0Opsz48'
import IconPackageFill0Wght200Grad0Opsz48 from '../components/PackageFill0Wght200Grad0Opsz48'
import IconPackageFill0Wght300Grad0Opsz48 from '../components/PackageFill0Wght300Grad0Opsz48'
import IconPackageFill0Wght400Grad0Opsz48 from '../components/PackageFill0Wght400Grad0Opsz48'
import IconPackageFill0Wght500Grad0Opsz48 from '../components/PackageFill0Wght500Grad0Opsz48'
import IconPackageFill0Wght600Grad0Opsz48 from '../components/PackageFill0Wght600Grad0Opsz48'
import IconPackageFill0Wght700Grad0Opsz48 from '../components/PackageFill0Wght700Grad0Opsz48'
import IconPackageFill1Wght100Grad0Opsz48 from '../components/PackageFill1Wght100Grad0Opsz48'
import IconPackageFill1Wght200Grad0Opsz48 from '../components/PackageFill1Wght200Grad0Opsz48'
import IconPackageFill1Wght300Grad0Opsz48 from '../components/PackageFill1Wght300Grad0Opsz48'
import IconPackageFill1Wght400Grad0Opsz48 from '../components/PackageFill1Wght400Grad0Opsz48'
import IconPackageFill1Wght500Grad0Opsz48 from '../components/PackageFill1Wght500Grad0Opsz48'
import IconPackageFill1Wght600Grad0Opsz48 from '../components/PackageFill1Wght600Grad0Opsz48'
import IconPackageFill1Wght700Grad0Opsz48 from '../components/PackageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPackage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPackageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPackageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPackageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPackageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPackageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPackageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPackageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPackageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPackageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPackageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPackageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPackageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPackageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPackageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
