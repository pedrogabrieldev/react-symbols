import IconBedFill0Wght100Grad0Opsz48 from '../components/BedFill0Wght100Grad0Opsz48'
import IconBedFill0Wght200Grad0Opsz48 from '../components/BedFill0Wght200Grad0Opsz48'
import IconBedFill0Wght300Grad0Opsz48 from '../components/BedFill0Wght300Grad0Opsz48'
import IconBedFill0Wght400Grad0Opsz48 from '../components/BedFill0Wght400Grad0Opsz48'
import IconBedFill0Wght500Grad0Opsz48 from '../components/BedFill0Wght500Grad0Opsz48'
import IconBedFill0Wght600Grad0Opsz48 from '../components/BedFill0Wght600Grad0Opsz48'
import IconBedFill0Wght700Grad0Opsz48 from '../components/BedFill0Wght700Grad0Opsz48'
import IconBedFill1Wght100Grad0Opsz48 from '../components/BedFill1Wght100Grad0Opsz48'
import IconBedFill1Wght200Grad0Opsz48 from '../components/BedFill1Wght200Grad0Opsz48'
import IconBedFill1Wght300Grad0Opsz48 from '../components/BedFill1Wght300Grad0Opsz48'
import IconBedFill1Wght400Grad0Opsz48 from '../components/BedFill1Wght400Grad0Opsz48'
import IconBedFill1Wght500Grad0Opsz48 from '../components/BedFill1Wght500Grad0Opsz48'
import IconBedFill1Wght600Grad0Opsz48 from '../components/BedFill1Wght600Grad0Opsz48'
import IconBedFill1Wght700Grad0Opsz48 from '../components/BedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBed = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
