import IconToolsLadderFill0Wght100Grad0Opsz48 from '../components/ToolsLadderFill0Wght100Grad0Opsz48'
import IconToolsLadderFill0Wght200Grad0Opsz48 from '../components/ToolsLadderFill0Wght200Grad0Opsz48'
import IconToolsLadderFill0Wght300Grad0Opsz48 from '../components/ToolsLadderFill0Wght300Grad0Opsz48'
import IconToolsLadderFill0Wght400Grad0Opsz48 from '../components/ToolsLadderFill0Wght400Grad0Opsz48'
import IconToolsLadderFill0Wght500Grad0Opsz48 from '../components/ToolsLadderFill0Wght500Grad0Opsz48'
import IconToolsLadderFill0Wght600Grad0Opsz48 from '../components/ToolsLadderFill0Wght600Grad0Opsz48'
import IconToolsLadderFill0Wght700Grad0Opsz48 from '../components/ToolsLadderFill0Wght700Grad0Opsz48'
import IconToolsLadderFill1Wght100Grad0Opsz48 from '../components/ToolsLadderFill1Wght100Grad0Opsz48'
import IconToolsLadderFill1Wght200Grad0Opsz48 from '../components/ToolsLadderFill1Wght200Grad0Opsz48'
import IconToolsLadderFill1Wght300Grad0Opsz48 from '../components/ToolsLadderFill1Wght300Grad0Opsz48'
import IconToolsLadderFill1Wght400Grad0Opsz48 from '../components/ToolsLadderFill1Wght400Grad0Opsz48'
import IconToolsLadderFill1Wght500Grad0Opsz48 from '../components/ToolsLadderFill1Wght500Grad0Opsz48'
import IconToolsLadderFill1Wght600Grad0Opsz48 from '../components/ToolsLadderFill1Wght600Grad0Opsz48'
import IconToolsLadderFill1Wght700Grad0Opsz48 from '../components/ToolsLadderFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconToolsLadder = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconToolsLadderFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconToolsLadderFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconToolsLadderFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconToolsLadderFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconToolsLadderFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconToolsLadderFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconToolsLadderFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconToolsLadderFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconToolsLadderFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconToolsLadderFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconToolsLadderFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconToolsLadderFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconToolsLadderFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconToolsLadderFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
