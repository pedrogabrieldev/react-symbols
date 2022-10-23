import IconToolsWrenchFill0Wght100Grad0Opsz48 from '../components/ToolsWrenchFill0Wght100Grad0Opsz48'
import IconToolsWrenchFill0Wght200Grad0Opsz48 from '../components/ToolsWrenchFill0Wght200Grad0Opsz48'
import IconToolsWrenchFill0Wght300Grad0Opsz48 from '../components/ToolsWrenchFill0Wght300Grad0Opsz48'
import IconToolsWrenchFill0Wght400Grad0Opsz48 from '../components/ToolsWrenchFill0Wght400Grad0Opsz48'
import IconToolsWrenchFill0Wght500Grad0Opsz48 from '../components/ToolsWrenchFill0Wght500Grad0Opsz48'
import IconToolsWrenchFill0Wght600Grad0Opsz48 from '../components/ToolsWrenchFill0Wght600Grad0Opsz48'
import IconToolsWrenchFill0Wght700Grad0Opsz48 from '../components/ToolsWrenchFill0Wght700Grad0Opsz48'
import IconToolsWrenchFill1Wght100Grad0Opsz48 from '../components/ToolsWrenchFill1Wght100Grad0Opsz48'
import IconToolsWrenchFill1Wght200Grad0Opsz48 from '../components/ToolsWrenchFill1Wght200Grad0Opsz48'
import IconToolsWrenchFill1Wght300Grad0Opsz48 from '../components/ToolsWrenchFill1Wght300Grad0Opsz48'
import IconToolsWrenchFill1Wght400Grad0Opsz48 from '../components/ToolsWrenchFill1Wght400Grad0Opsz48'
import IconToolsWrenchFill1Wght500Grad0Opsz48 from '../components/ToolsWrenchFill1Wght500Grad0Opsz48'
import IconToolsWrenchFill1Wght600Grad0Opsz48 from '../components/ToolsWrenchFill1Wght600Grad0Opsz48'
import IconToolsWrenchFill1Wght700Grad0Opsz48 from '../components/ToolsWrenchFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconToolsWrench = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconToolsWrenchFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconToolsWrenchFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconToolsWrenchFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconToolsWrenchFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconToolsWrenchFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconToolsWrenchFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconToolsWrenchFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconToolsWrenchFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconToolsWrenchFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconToolsWrenchFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconToolsWrenchFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconToolsWrenchFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconToolsWrenchFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconToolsWrenchFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
