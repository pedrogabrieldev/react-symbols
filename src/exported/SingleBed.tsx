import IconSingleBedFill0Wght100Grad0Opsz48 from '../components/SingleBedFill0Wght100Grad0Opsz48'
import IconSingleBedFill0Wght200Grad0Opsz48 from '../components/SingleBedFill0Wght200Grad0Opsz48'
import IconSingleBedFill0Wght300Grad0Opsz48 from '../components/SingleBedFill0Wght300Grad0Opsz48'
import IconSingleBedFill0Wght400Grad0Opsz48 from '../components/SingleBedFill0Wght400Grad0Opsz48'
import IconSingleBedFill0Wght500Grad0Opsz48 from '../components/SingleBedFill0Wght500Grad0Opsz48'
import IconSingleBedFill0Wght600Grad0Opsz48 from '../components/SingleBedFill0Wght600Grad0Opsz48'
import IconSingleBedFill0Wght700Grad0Opsz48 from '../components/SingleBedFill0Wght700Grad0Opsz48'
import IconSingleBedFill1Wght100Grad0Opsz48 from '../components/SingleBedFill1Wght100Grad0Opsz48'
import IconSingleBedFill1Wght200Grad0Opsz48 from '../components/SingleBedFill1Wght200Grad0Opsz48'
import IconSingleBedFill1Wght300Grad0Opsz48 from '../components/SingleBedFill1Wght300Grad0Opsz48'
import IconSingleBedFill1Wght400Grad0Opsz48 from '../components/SingleBedFill1Wght400Grad0Opsz48'
import IconSingleBedFill1Wght500Grad0Opsz48 from '../components/SingleBedFill1Wght500Grad0Opsz48'
import IconSingleBedFill1Wght600Grad0Opsz48 from '../components/SingleBedFill1Wght600Grad0Opsz48'
import IconSingleBedFill1Wght700Grad0Opsz48 from '../components/SingleBedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSingleBed = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSingleBedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSingleBedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSingleBedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSingleBedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSingleBedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSingleBedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSingleBedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSingleBedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSingleBedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSingleBedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSingleBedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSingleBedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSingleBedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSingleBedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
