import IconBedtimeOffFill0Wght100Grad0Opsz48 from '../components/BedtimeOffFill0Wght100Grad0Opsz48'
import IconBedtimeOffFill0Wght200Grad0Opsz48 from '../components/BedtimeOffFill0Wght200Grad0Opsz48'
import IconBedtimeOffFill0Wght300Grad0Opsz48 from '../components/BedtimeOffFill0Wght300Grad0Opsz48'
import IconBedtimeOffFill0Wght400Grad0Opsz48 from '../components/BedtimeOffFill0Wght400Grad0Opsz48'
import IconBedtimeOffFill0Wght500Grad0Opsz48 from '../components/BedtimeOffFill0Wght500Grad0Opsz48'
import IconBedtimeOffFill0Wght600Grad0Opsz48 from '../components/BedtimeOffFill0Wght600Grad0Opsz48'
import IconBedtimeOffFill0Wght700Grad0Opsz48 from '../components/BedtimeOffFill0Wght700Grad0Opsz48'
import IconBedtimeOffFill1Wght100Grad0Opsz48 from '../components/BedtimeOffFill1Wght100Grad0Opsz48'
import IconBedtimeOffFill1Wght200Grad0Opsz48 from '../components/BedtimeOffFill1Wght200Grad0Opsz48'
import IconBedtimeOffFill1Wght300Grad0Opsz48 from '../components/BedtimeOffFill1Wght300Grad0Opsz48'
import IconBedtimeOffFill1Wght400Grad0Opsz48 from '../components/BedtimeOffFill1Wght400Grad0Opsz48'
import IconBedtimeOffFill1Wght500Grad0Opsz48 from '../components/BedtimeOffFill1Wght500Grad0Opsz48'
import IconBedtimeOffFill1Wght600Grad0Opsz48 from '../components/BedtimeOffFill1Wght600Grad0Opsz48'
import IconBedtimeOffFill1Wght700Grad0Opsz48 from '../components/BedtimeOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBedtimeOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBedtimeOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBedtimeOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBedtimeOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBedtimeOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBedtimeOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBedtimeOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBedtimeOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBedtimeOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBedtimeOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBedtimeOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBedtimeOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBedtimeOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBedtimeOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBedtimeOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
