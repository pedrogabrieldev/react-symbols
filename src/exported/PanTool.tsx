import IconPanToolFill0Wght100Grad0Opsz48 from '../components/PanToolFill0Wght100Grad0Opsz48'
import IconPanToolFill0Wght200Grad0Opsz48 from '../components/PanToolFill0Wght200Grad0Opsz48'
import IconPanToolFill0Wght300Grad0Opsz48 from '../components/PanToolFill0Wght300Grad0Opsz48'
import IconPanToolFill0Wght400Grad0Opsz48 from '../components/PanToolFill0Wght400Grad0Opsz48'
import IconPanToolFill0Wght500Grad0Opsz48 from '../components/PanToolFill0Wght500Grad0Opsz48'
import IconPanToolFill0Wght600Grad0Opsz48 from '../components/PanToolFill0Wght600Grad0Opsz48'
import IconPanToolFill0Wght700Grad0Opsz48 from '../components/PanToolFill0Wght700Grad0Opsz48'
import IconPanToolFill1Wght100Grad0Opsz48 from '../components/PanToolFill1Wght100Grad0Opsz48'
import IconPanToolFill1Wght200Grad0Opsz48 from '../components/PanToolFill1Wght200Grad0Opsz48'
import IconPanToolFill1Wght300Grad0Opsz48 from '../components/PanToolFill1Wght300Grad0Opsz48'
import IconPanToolFill1Wght400Grad0Opsz48 from '../components/PanToolFill1Wght400Grad0Opsz48'
import IconPanToolFill1Wght500Grad0Opsz48 from '../components/PanToolFill1Wght500Grad0Opsz48'
import IconPanToolFill1Wght600Grad0Opsz48 from '../components/PanToolFill1Wght600Grad0Opsz48'
import IconPanToolFill1Wght700Grad0Opsz48 from '../components/PanToolFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPanTool = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPanToolFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPanToolFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPanToolFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPanToolFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPanToolFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPanToolFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPanToolFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPanToolFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPanToolFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPanToolFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPanToolFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPanToolFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPanToolFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPanToolFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
