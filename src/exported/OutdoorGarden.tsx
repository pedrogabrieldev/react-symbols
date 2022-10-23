import IconOutdoorGardenFill0Wght100Grad0Opsz48 from '../components/OutdoorGardenFill0Wght100Grad0Opsz48'
import IconOutdoorGardenFill0Wght200Grad0Opsz48 from '../components/OutdoorGardenFill0Wght200Grad0Opsz48'
import IconOutdoorGardenFill0Wght300Grad0Opsz48 from '../components/OutdoorGardenFill0Wght300Grad0Opsz48'
import IconOutdoorGardenFill0Wght400Grad0Opsz48 from '../components/OutdoorGardenFill0Wght400Grad0Opsz48'
import IconOutdoorGardenFill0Wght500Grad0Opsz48 from '../components/OutdoorGardenFill0Wght500Grad0Opsz48'
import IconOutdoorGardenFill0Wght600Grad0Opsz48 from '../components/OutdoorGardenFill0Wght600Grad0Opsz48'
import IconOutdoorGardenFill0Wght700Grad0Opsz48 from '../components/OutdoorGardenFill0Wght700Grad0Opsz48'
import IconOutdoorGardenFill1Wght100Grad0Opsz48 from '../components/OutdoorGardenFill1Wght100Grad0Opsz48'
import IconOutdoorGardenFill1Wght200Grad0Opsz48 from '../components/OutdoorGardenFill1Wght200Grad0Opsz48'
import IconOutdoorGardenFill1Wght300Grad0Opsz48 from '../components/OutdoorGardenFill1Wght300Grad0Opsz48'
import IconOutdoorGardenFill1Wght400Grad0Opsz48 from '../components/OutdoorGardenFill1Wght400Grad0Opsz48'
import IconOutdoorGardenFill1Wght500Grad0Opsz48 from '../components/OutdoorGardenFill1Wght500Grad0Opsz48'
import IconOutdoorGardenFill1Wght600Grad0Opsz48 from '../components/OutdoorGardenFill1Wght600Grad0Opsz48'
import IconOutdoorGardenFill1Wght700Grad0Opsz48 from '../components/OutdoorGardenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOutdoorGarden = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOutdoorGardenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOutdoorGardenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOutdoorGardenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOutdoorGardenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOutdoorGardenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOutdoorGardenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOutdoorGardenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOutdoorGardenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOutdoorGardenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOutdoorGardenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOutdoorGardenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOutdoorGardenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOutdoorGardenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOutdoorGardenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
