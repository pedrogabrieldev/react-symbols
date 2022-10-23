import IconToolsFlatHeadFill0Wght100Grad0Opsz48 from '../components/ToolsFlatHeadFill0Wght100Grad0Opsz48'
import IconToolsFlatHeadFill0Wght200Grad0Opsz48 from '../components/ToolsFlatHeadFill0Wght200Grad0Opsz48'
import IconToolsFlatHeadFill0Wght300Grad0Opsz48 from '../components/ToolsFlatHeadFill0Wght300Grad0Opsz48'
import IconToolsFlatHeadFill0Wght400Grad0Opsz48 from '../components/ToolsFlatHeadFill0Wght400Grad0Opsz48'
import IconToolsFlatHeadFill0Wght500Grad0Opsz48 from '../components/ToolsFlatHeadFill0Wght500Grad0Opsz48'
import IconToolsFlatHeadFill0Wght600Grad0Opsz48 from '../components/ToolsFlatHeadFill0Wght600Grad0Opsz48'
import IconToolsFlatHeadFill0Wght700Grad0Opsz48 from '../components/ToolsFlatHeadFill0Wght700Grad0Opsz48'
import IconToolsFlatHeadFill1Wght100Grad0Opsz48 from '../components/ToolsFlatHeadFill1Wght100Grad0Opsz48'
import IconToolsFlatHeadFill1Wght200Grad0Opsz48 from '../components/ToolsFlatHeadFill1Wght200Grad0Opsz48'
import IconToolsFlatHeadFill1Wght300Grad0Opsz48 from '../components/ToolsFlatHeadFill1Wght300Grad0Opsz48'
import IconToolsFlatHeadFill1Wght400Grad0Opsz48 from '../components/ToolsFlatHeadFill1Wght400Grad0Opsz48'
import IconToolsFlatHeadFill1Wght500Grad0Opsz48 from '../components/ToolsFlatHeadFill1Wght500Grad0Opsz48'
import IconToolsFlatHeadFill1Wght600Grad0Opsz48 from '../components/ToolsFlatHeadFill1Wght600Grad0Opsz48'
import IconToolsFlatHeadFill1Wght700Grad0Opsz48 from '../components/ToolsFlatHeadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconToolsFlatHead = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconToolsFlatHeadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconToolsFlatHeadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconToolsFlatHeadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconToolsFlatHeadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconToolsFlatHeadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconToolsFlatHeadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconToolsFlatHeadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconToolsFlatHeadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconToolsFlatHeadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconToolsFlatHeadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconToolsFlatHeadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconToolsFlatHeadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconToolsFlatHeadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconToolsFlatHeadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
