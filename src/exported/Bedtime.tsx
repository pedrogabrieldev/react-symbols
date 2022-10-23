import IconBedtimeFill0Wght100Grad0Opsz48 from '../components/BedtimeFill0Wght100Grad0Opsz48'
import IconBedtimeFill0Wght200Grad0Opsz48 from '../components/BedtimeFill0Wght200Grad0Opsz48'
import IconBedtimeFill0Wght300Grad0Opsz48 from '../components/BedtimeFill0Wght300Grad0Opsz48'
import IconBedtimeFill0Wght400Grad0Opsz48 from '../components/BedtimeFill0Wght400Grad0Opsz48'
import IconBedtimeFill0Wght500Grad0Opsz48 from '../components/BedtimeFill0Wght500Grad0Opsz48'
import IconBedtimeFill0Wght600Grad0Opsz48 from '../components/BedtimeFill0Wght600Grad0Opsz48'
import IconBedtimeFill0Wght700Grad0Opsz48 from '../components/BedtimeFill0Wght700Grad0Opsz48'
import IconBedtimeFill1Wght100Grad0Opsz48 from '../components/BedtimeFill1Wght100Grad0Opsz48'
import IconBedtimeFill1Wght200Grad0Opsz48 from '../components/BedtimeFill1Wght200Grad0Opsz48'
import IconBedtimeFill1Wght300Grad0Opsz48 from '../components/BedtimeFill1Wght300Grad0Opsz48'
import IconBedtimeFill1Wght400Grad0Opsz48 from '../components/BedtimeFill1Wght400Grad0Opsz48'
import IconBedtimeFill1Wght500Grad0Opsz48 from '../components/BedtimeFill1Wght500Grad0Opsz48'
import IconBedtimeFill1Wght600Grad0Opsz48 from '../components/BedtimeFill1Wght600Grad0Opsz48'
import IconBedtimeFill1Wght700Grad0Opsz48 from '../components/BedtimeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBedtime = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBedtimeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBedtimeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBedtimeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBedtimeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBedtimeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBedtimeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBedtimeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBedtimeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBedtimeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBedtimeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBedtimeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBedtimeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBedtimeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBedtimeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
