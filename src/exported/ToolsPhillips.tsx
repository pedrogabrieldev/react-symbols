import IconToolsPhillipsFill0Wght100Grad0Opsz48 from '../components/ToolsPhillipsFill0Wght100Grad0Opsz48'
import IconToolsPhillipsFill0Wght200Grad0Opsz48 from '../components/ToolsPhillipsFill0Wght200Grad0Opsz48'
import IconToolsPhillipsFill0Wght300Grad0Opsz48 from '../components/ToolsPhillipsFill0Wght300Grad0Opsz48'
import IconToolsPhillipsFill0Wght400Grad0Opsz48 from '../components/ToolsPhillipsFill0Wght400Grad0Opsz48'
import IconToolsPhillipsFill0Wght500Grad0Opsz48 from '../components/ToolsPhillipsFill0Wght500Grad0Opsz48'
import IconToolsPhillipsFill0Wght600Grad0Opsz48 from '../components/ToolsPhillipsFill0Wght600Grad0Opsz48'
import IconToolsPhillipsFill0Wght700Grad0Opsz48 from '../components/ToolsPhillipsFill0Wght700Grad0Opsz48'
import IconToolsPhillipsFill1Wght100Grad0Opsz48 from '../components/ToolsPhillipsFill1Wght100Grad0Opsz48'
import IconToolsPhillipsFill1Wght200Grad0Opsz48 from '../components/ToolsPhillipsFill1Wght200Grad0Opsz48'
import IconToolsPhillipsFill1Wght300Grad0Opsz48 from '../components/ToolsPhillipsFill1Wght300Grad0Opsz48'
import IconToolsPhillipsFill1Wght400Grad0Opsz48 from '../components/ToolsPhillipsFill1Wght400Grad0Opsz48'
import IconToolsPhillipsFill1Wght500Grad0Opsz48 from '../components/ToolsPhillipsFill1Wght500Grad0Opsz48'
import IconToolsPhillipsFill1Wght600Grad0Opsz48 from '../components/ToolsPhillipsFill1Wght600Grad0Opsz48'
import IconToolsPhillipsFill1Wght700Grad0Opsz48 from '../components/ToolsPhillipsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconToolsPhillips = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconToolsPhillipsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconToolsPhillipsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconToolsPhillipsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconToolsPhillipsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconToolsPhillipsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconToolsPhillipsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconToolsPhillipsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconToolsPhillipsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconToolsPhillipsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconToolsPhillipsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconToolsPhillipsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconToolsPhillipsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconToolsPhillipsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconToolsPhillipsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
