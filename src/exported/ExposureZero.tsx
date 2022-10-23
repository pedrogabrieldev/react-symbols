import IconExposureZeroFill0Wght100Grad0Opsz48 from '../components/ExposureZeroFill0Wght100Grad0Opsz48'
import IconExposureZeroFill0Wght200Grad0Opsz48 from '../components/ExposureZeroFill0Wght200Grad0Opsz48'
import IconExposureZeroFill0Wght300Grad0Opsz48 from '../components/ExposureZeroFill0Wght300Grad0Opsz48'
import IconExposureZeroFill0Wght400Grad0Opsz48 from '../components/ExposureZeroFill0Wght400Grad0Opsz48'
import IconExposureZeroFill0Wght500Grad0Opsz48 from '../components/ExposureZeroFill0Wght500Grad0Opsz48'
import IconExposureZeroFill0Wght600Grad0Opsz48 from '../components/ExposureZeroFill0Wght600Grad0Opsz48'
import IconExposureZeroFill0Wght700Grad0Opsz48 from '../components/ExposureZeroFill0Wght700Grad0Opsz48'
import IconExposureZeroFill1Wght100Grad0Opsz48 from '../components/ExposureZeroFill1Wght100Grad0Opsz48'
import IconExposureZeroFill1Wght200Grad0Opsz48 from '../components/ExposureZeroFill1Wght200Grad0Opsz48'
import IconExposureZeroFill1Wght300Grad0Opsz48 from '../components/ExposureZeroFill1Wght300Grad0Opsz48'
import IconExposureZeroFill1Wght400Grad0Opsz48 from '../components/ExposureZeroFill1Wght400Grad0Opsz48'
import IconExposureZeroFill1Wght500Grad0Opsz48 from '../components/ExposureZeroFill1Wght500Grad0Opsz48'
import IconExposureZeroFill1Wght600Grad0Opsz48 from '../components/ExposureZeroFill1Wght600Grad0Opsz48'
import IconExposureZeroFill1Wght700Grad0Opsz48 from '../components/ExposureZeroFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconExposureZero = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconExposureZeroFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconExposureZeroFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconExposureZeroFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconExposureZeroFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconExposureZeroFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconExposureZeroFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconExposureZeroFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconExposureZeroFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconExposureZeroFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconExposureZeroFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconExposureZeroFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconExposureZeroFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconExposureZeroFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconExposureZeroFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
