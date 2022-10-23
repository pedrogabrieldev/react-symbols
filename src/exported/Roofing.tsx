import IconRoofingFill0Wght100Grad0Opsz48 from '../components/RoofingFill0Wght100Grad0Opsz48'
import IconRoofingFill0Wght200Grad0Opsz48 from '../components/RoofingFill0Wght200Grad0Opsz48'
import IconRoofingFill0Wght300Grad0Opsz48 from '../components/RoofingFill0Wght300Grad0Opsz48'
import IconRoofingFill0Wght400Grad0Opsz48 from '../components/RoofingFill0Wght400Grad0Opsz48'
import IconRoofingFill0Wght500Grad0Opsz48 from '../components/RoofingFill0Wght500Grad0Opsz48'
import IconRoofingFill0Wght600Grad0Opsz48 from '../components/RoofingFill0Wght600Grad0Opsz48'
import IconRoofingFill0Wght700Grad0Opsz48 from '../components/RoofingFill0Wght700Grad0Opsz48'
import IconRoofingFill1Wght100Grad0Opsz48 from '../components/RoofingFill1Wght100Grad0Opsz48'
import IconRoofingFill1Wght200Grad0Opsz48 from '../components/RoofingFill1Wght200Grad0Opsz48'
import IconRoofingFill1Wght300Grad0Opsz48 from '../components/RoofingFill1Wght300Grad0Opsz48'
import IconRoofingFill1Wght400Grad0Opsz48 from '../components/RoofingFill1Wght400Grad0Opsz48'
import IconRoofingFill1Wght500Grad0Opsz48 from '../components/RoofingFill1Wght500Grad0Opsz48'
import IconRoofingFill1Wght600Grad0Opsz48 from '../components/RoofingFill1Wght600Grad0Opsz48'
import IconRoofingFill1Wght700Grad0Opsz48 from '../components/RoofingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRoofing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRoofingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRoofingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRoofingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRoofingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRoofingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRoofingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRoofingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRoofingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRoofingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRoofingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRoofingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRoofingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRoofingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRoofingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
