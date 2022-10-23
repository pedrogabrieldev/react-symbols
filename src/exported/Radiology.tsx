import IconRadiologyFill0Wght100Grad0Opsz48 from '../components/RadiologyFill0Wght100Grad0Opsz48'
import IconRadiologyFill0Wght200Grad0Opsz48 from '../components/RadiologyFill0Wght200Grad0Opsz48'
import IconRadiologyFill0Wght300Grad0Opsz48 from '../components/RadiologyFill0Wght300Grad0Opsz48'
import IconRadiologyFill0Wght400Grad0Opsz48 from '../components/RadiologyFill0Wght400Grad0Opsz48'
import IconRadiologyFill0Wght500Grad0Opsz48 from '../components/RadiologyFill0Wght500Grad0Opsz48'
import IconRadiologyFill0Wght600Grad0Opsz48 from '../components/RadiologyFill0Wght600Grad0Opsz48'
import IconRadiologyFill0Wght700Grad0Opsz48 from '../components/RadiologyFill0Wght700Grad0Opsz48'
import IconRadiologyFill1Wght100Grad0Opsz48 from '../components/RadiologyFill1Wght100Grad0Opsz48'
import IconRadiologyFill1Wght200Grad0Opsz48 from '../components/RadiologyFill1Wght200Grad0Opsz48'
import IconRadiologyFill1Wght300Grad0Opsz48 from '../components/RadiologyFill1Wght300Grad0Opsz48'
import IconRadiologyFill1Wght400Grad0Opsz48 from '../components/RadiologyFill1Wght400Grad0Opsz48'
import IconRadiologyFill1Wght500Grad0Opsz48 from '../components/RadiologyFill1Wght500Grad0Opsz48'
import IconRadiologyFill1Wght600Grad0Opsz48 from '../components/RadiologyFill1Wght600Grad0Opsz48'
import IconRadiologyFill1Wght700Grad0Opsz48 from '../components/RadiologyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRadiology = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRadiologyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRadiologyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRadiologyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRadiologyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRadiologyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRadiologyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRadiologyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRadiologyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRadiologyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRadiologyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRadiologyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRadiologyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRadiologyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRadiologyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
