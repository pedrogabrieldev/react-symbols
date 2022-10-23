import IconToolsPowerDrillFill0Wght100Grad0Opsz48 from '../components/ToolsPowerDrillFill0Wght100Grad0Opsz48'
import IconToolsPowerDrillFill0Wght200Grad0Opsz48 from '../components/ToolsPowerDrillFill0Wght200Grad0Opsz48'
import IconToolsPowerDrillFill0Wght300Grad0Opsz48 from '../components/ToolsPowerDrillFill0Wght300Grad0Opsz48'
import IconToolsPowerDrillFill0Wght400Grad0Opsz48 from '../components/ToolsPowerDrillFill0Wght400Grad0Opsz48'
import IconToolsPowerDrillFill0Wght500Grad0Opsz48 from '../components/ToolsPowerDrillFill0Wght500Grad0Opsz48'
import IconToolsPowerDrillFill0Wght600Grad0Opsz48 from '../components/ToolsPowerDrillFill0Wght600Grad0Opsz48'
import IconToolsPowerDrillFill0Wght700Grad0Opsz48 from '../components/ToolsPowerDrillFill0Wght700Grad0Opsz48'
import IconToolsPowerDrillFill1Wght100Grad0Opsz48 from '../components/ToolsPowerDrillFill1Wght100Grad0Opsz48'
import IconToolsPowerDrillFill1Wght200Grad0Opsz48 from '../components/ToolsPowerDrillFill1Wght200Grad0Opsz48'
import IconToolsPowerDrillFill1Wght300Grad0Opsz48 from '../components/ToolsPowerDrillFill1Wght300Grad0Opsz48'
import IconToolsPowerDrillFill1Wght400Grad0Opsz48 from '../components/ToolsPowerDrillFill1Wght400Grad0Opsz48'
import IconToolsPowerDrillFill1Wght500Grad0Opsz48 from '../components/ToolsPowerDrillFill1Wght500Grad0Opsz48'
import IconToolsPowerDrillFill1Wght600Grad0Opsz48 from '../components/ToolsPowerDrillFill1Wght600Grad0Opsz48'
import IconToolsPowerDrillFill1Wght700Grad0Opsz48 from '../components/ToolsPowerDrillFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconToolsPowerDrill = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconToolsPowerDrillFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconToolsPowerDrillFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconToolsPowerDrillFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconToolsPowerDrillFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconToolsPowerDrillFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconToolsPowerDrillFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconToolsPowerDrillFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconToolsPowerDrillFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconToolsPowerDrillFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconToolsPowerDrillFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconToolsPowerDrillFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconToolsPowerDrillFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconToolsPowerDrillFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconToolsPowerDrillFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
