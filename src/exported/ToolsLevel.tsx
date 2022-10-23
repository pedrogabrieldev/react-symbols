import IconToolsLevelFill0Wght100Grad0Opsz48 from '../components/ToolsLevelFill0Wght100Grad0Opsz48'
import IconToolsLevelFill0Wght200Grad0Opsz48 from '../components/ToolsLevelFill0Wght200Grad0Opsz48'
import IconToolsLevelFill0Wght300Grad0Opsz48 from '../components/ToolsLevelFill0Wght300Grad0Opsz48'
import IconToolsLevelFill0Wght400Grad0Opsz48 from '../components/ToolsLevelFill0Wght400Grad0Opsz48'
import IconToolsLevelFill0Wght500Grad0Opsz48 from '../components/ToolsLevelFill0Wght500Grad0Opsz48'
import IconToolsLevelFill0Wght600Grad0Opsz48 from '../components/ToolsLevelFill0Wght600Grad0Opsz48'
import IconToolsLevelFill0Wght700Grad0Opsz48 from '../components/ToolsLevelFill0Wght700Grad0Opsz48'
import IconToolsLevelFill1Wght100Grad0Opsz48 from '../components/ToolsLevelFill1Wght100Grad0Opsz48'
import IconToolsLevelFill1Wght200Grad0Opsz48 from '../components/ToolsLevelFill1Wght200Grad0Opsz48'
import IconToolsLevelFill1Wght300Grad0Opsz48 from '../components/ToolsLevelFill1Wght300Grad0Opsz48'
import IconToolsLevelFill1Wght400Grad0Opsz48 from '../components/ToolsLevelFill1Wght400Grad0Opsz48'
import IconToolsLevelFill1Wght500Grad0Opsz48 from '../components/ToolsLevelFill1Wght500Grad0Opsz48'
import IconToolsLevelFill1Wght600Grad0Opsz48 from '../components/ToolsLevelFill1Wght600Grad0Opsz48'
import IconToolsLevelFill1Wght700Grad0Opsz48 from '../components/ToolsLevelFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconToolsLevel = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconToolsLevelFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconToolsLevelFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconToolsLevelFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconToolsLevelFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconToolsLevelFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconToolsLevelFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconToolsLevelFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconToolsLevelFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconToolsLevelFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconToolsLevelFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconToolsLevelFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconToolsLevelFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconToolsLevelFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconToolsLevelFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
