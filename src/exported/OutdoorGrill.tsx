import IconOutdoorGrillFill0Wght100Grad0Opsz48 from '../components/OutdoorGrillFill0Wght100Grad0Opsz48'
import IconOutdoorGrillFill0Wght200Grad0Opsz48 from '../components/OutdoorGrillFill0Wght200Grad0Opsz48'
import IconOutdoorGrillFill0Wght300Grad0Opsz48 from '../components/OutdoorGrillFill0Wght300Grad0Opsz48'
import IconOutdoorGrillFill0Wght400Grad0Opsz48 from '../components/OutdoorGrillFill0Wght400Grad0Opsz48'
import IconOutdoorGrillFill0Wght500Grad0Opsz48 from '../components/OutdoorGrillFill0Wght500Grad0Opsz48'
import IconOutdoorGrillFill0Wght600Grad0Opsz48 from '../components/OutdoorGrillFill0Wght600Grad0Opsz48'
import IconOutdoorGrillFill0Wght700Grad0Opsz48 from '../components/OutdoorGrillFill0Wght700Grad0Opsz48'
import IconOutdoorGrillFill1Wght100Grad0Opsz48 from '../components/OutdoorGrillFill1Wght100Grad0Opsz48'
import IconOutdoorGrillFill1Wght200Grad0Opsz48 from '../components/OutdoorGrillFill1Wght200Grad0Opsz48'
import IconOutdoorGrillFill1Wght300Grad0Opsz48 from '../components/OutdoorGrillFill1Wght300Grad0Opsz48'
import IconOutdoorGrillFill1Wght400Grad0Opsz48 from '../components/OutdoorGrillFill1Wght400Grad0Opsz48'
import IconOutdoorGrillFill1Wght500Grad0Opsz48 from '../components/OutdoorGrillFill1Wght500Grad0Opsz48'
import IconOutdoorGrillFill1Wght600Grad0Opsz48 from '../components/OutdoorGrillFill1Wght600Grad0Opsz48'
import IconOutdoorGrillFill1Wght700Grad0Opsz48 from '../components/OutdoorGrillFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOutdoorGrill = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOutdoorGrillFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOutdoorGrillFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOutdoorGrillFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOutdoorGrillFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOutdoorGrillFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOutdoorGrillFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOutdoorGrillFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOutdoorGrillFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOutdoorGrillFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOutdoorGrillFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOutdoorGrillFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOutdoorGrillFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOutdoorGrillFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOutdoorGrillFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
