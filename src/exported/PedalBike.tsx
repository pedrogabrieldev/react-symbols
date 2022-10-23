import IconPedalBikeFill0Wght100Grad0Opsz48 from '../components/PedalBikeFill0Wght100Grad0Opsz48'
import IconPedalBikeFill0Wght200Grad0Opsz48 from '../components/PedalBikeFill0Wght200Grad0Opsz48'
import IconPedalBikeFill0Wght300Grad0Opsz48 from '../components/PedalBikeFill0Wght300Grad0Opsz48'
import IconPedalBikeFill0Wght400Grad0Opsz48 from '../components/PedalBikeFill0Wght400Grad0Opsz48'
import IconPedalBikeFill0Wght500Grad0Opsz48 from '../components/PedalBikeFill0Wght500Grad0Opsz48'
import IconPedalBikeFill0Wght600Grad0Opsz48 from '../components/PedalBikeFill0Wght600Grad0Opsz48'
import IconPedalBikeFill0Wght700Grad0Opsz48 from '../components/PedalBikeFill0Wght700Grad0Opsz48'
import IconPedalBikeFill1Wght100Grad0Opsz48 from '../components/PedalBikeFill1Wght100Grad0Opsz48'
import IconPedalBikeFill1Wght200Grad0Opsz48 from '../components/PedalBikeFill1Wght200Grad0Opsz48'
import IconPedalBikeFill1Wght300Grad0Opsz48 from '../components/PedalBikeFill1Wght300Grad0Opsz48'
import IconPedalBikeFill1Wght400Grad0Opsz48 from '../components/PedalBikeFill1Wght400Grad0Opsz48'
import IconPedalBikeFill1Wght500Grad0Opsz48 from '../components/PedalBikeFill1Wght500Grad0Opsz48'
import IconPedalBikeFill1Wght600Grad0Opsz48 from '../components/PedalBikeFill1Wght600Grad0Opsz48'
import IconPedalBikeFill1Wght700Grad0Opsz48 from '../components/PedalBikeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPedalBike = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPedalBikeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPedalBikeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPedalBikeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPedalBikeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPedalBikeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPedalBikeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPedalBikeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPedalBikeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPedalBikeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPedalBikeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPedalBikeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPedalBikeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPedalBikeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPedalBikeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
