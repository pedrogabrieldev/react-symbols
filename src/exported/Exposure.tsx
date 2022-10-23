import IconExposureFill0Wght100Grad0Opsz48 from '../components/ExposureFill0Wght100Grad0Opsz48'
import IconExposureFill0Wght200Grad0Opsz48 from '../components/ExposureFill0Wght200Grad0Opsz48'
import IconExposureFill0Wght300Grad0Opsz48 from '../components/ExposureFill0Wght300Grad0Opsz48'
import IconExposureFill0Wght400Grad0Opsz48 from '../components/ExposureFill0Wght400Grad0Opsz48'
import IconExposureFill0Wght500Grad0Opsz48 from '../components/ExposureFill0Wght500Grad0Opsz48'
import IconExposureFill0Wght600Grad0Opsz48 from '../components/ExposureFill0Wght600Grad0Opsz48'
import IconExposureFill0Wght700Grad0Opsz48 from '../components/ExposureFill0Wght700Grad0Opsz48'
import IconExposureFill1Wght100Grad0Opsz48 from '../components/ExposureFill1Wght100Grad0Opsz48'
import IconExposureFill1Wght200Grad0Opsz48 from '../components/ExposureFill1Wght200Grad0Opsz48'
import IconExposureFill1Wght300Grad0Opsz48 from '../components/ExposureFill1Wght300Grad0Opsz48'
import IconExposureFill1Wght400Grad0Opsz48 from '../components/ExposureFill1Wght400Grad0Opsz48'
import IconExposureFill1Wght500Grad0Opsz48 from '../components/ExposureFill1Wght500Grad0Opsz48'
import IconExposureFill1Wght600Grad0Opsz48 from '../components/ExposureFill1Wght600Grad0Opsz48'
import IconExposureFill1Wght700Grad0Opsz48 from '../components/ExposureFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconExposure = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconExposureFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconExposureFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconExposureFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconExposureFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconExposureFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconExposureFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconExposureFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconExposureFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconExposureFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconExposureFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconExposureFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconExposureFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconExposureFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconExposureFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
