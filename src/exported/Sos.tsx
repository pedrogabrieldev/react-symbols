import IconSosFill0Wght100Grad0Opsz48 from '../components/SosFill0Wght100Grad0Opsz48'
import IconSosFill0Wght200Grad0Opsz48 from '../components/SosFill0Wght200Grad0Opsz48'
import IconSosFill0Wght300Grad0Opsz48 from '../components/SosFill0Wght300Grad0Opsz48'
import IconSosFill0Wght400Grad0Opsz48 from '../components/SosFill0Wght400Grad0Opsz48'
import IconSosFill0Wght500Grad0Opsz48 from '../components/SosFill0Wght500Grad0Opsz48'
import IconSosFill0Wght600Grad0Opsz48 from '../components/SosFill0Wght600Grad0Opsz48'
import IconSosFill0Wght700Grad0Opsz48 from '../components/SosFill0Wght700Grad0Opsz48'
import IconSosFill1Wght100Grad0Opsz48 from '../components/SosFill1Wght100Grad0Opsz48'
import IconSosFill1Wght200Grad0Opsz48 from '../components/SosFill1Wght200Grad0Opsz48'
import IconSosFill1Wght300Grad0Opsz48 from '../components/SosFill1Wght300Grad0Opsz48'
import IconSosFill1Wght400Grad0Opsz48 from '../components/SosFill1Wght400Grad0Opsz48'
import IconSosFill1Wght500Grad0Opsz48 from '../components/SosFill1Wght500Grad0Opsz48'
import IconSosFill1Wght600Grad0Opsz48 from '../components/SosFill1Wght600Grad0Opsz48'
import IconSosFill1Wght700Grad0Opsz48 from '../components/SosFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSos = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSosFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSosFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSosFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSosFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSosFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSosFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSosFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSosFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSosFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSosFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSosFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSosFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSosFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSosFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
