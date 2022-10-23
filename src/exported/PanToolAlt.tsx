import IconPanToolAltFill0Wght100Grad0Opsz48 from '../components/PanToolAltFill0Wght100Grad0Opsz48'
import IconPanToolAltFill0Wght200Grad0Opsz48 from '../components/PanToolAltFill0Wght200Grad0Opsz48'
import IconPanToolAltFill0Wght300Grad0Opsz48 from '../components/PanToolAltFill0Wght300Grad0Opsz48'
import IconPanToolAltFill0Wght400Grad0Opsz48 from '../components/PanToolAltFill0Wght400Grad0Opsz48'
import IconPanToolAltFill0Wght500Grad0Opsz48 from '../components/PanToolAltFill0Wght500Grad0Opsz48'
import IconPanToolAltFill0Wght600Grad0Opsz48 from '../components/PanToolAltFill0Wght600Grad0Opsz48'
import IconPanToolAltFill0Wght700Grad0Opsz48 from '../components/PanToolAltFill0Wght700Grad0Opsz48'
import IconPanToolAltFill1Wght100Grad0Opsz48 from '../components/PanToolAltFill1Wght100Grad0Opsz48'
import IconPanToolAltFill1Wght200Grad0Opsz48 from '../components/PanToolAltFill1Wght200Grad0Opsz48'
import IconPanToolAltFill1Wght300Grad0Opsz48 from '../components/PanToolAltFill1Wght300Grad0Opsz48'
import IconPanToolAltFill1Wght400Grad0Opsz48 from '../components/PanToolAltFill1Wght400Grad0Opsz48'
import IconPanToolAltFill1Wght500Grad0Opsz48 from '../components/PanToolAltFill1Wght500Grad0Opsz48'
import IconPanToolAltFill1Wght600Grad0Opsz48 from '../components/PanToolAltFill1Wght600Grad0Opsz48'
import IconPanToolAltFill1Wght700Grad0Opsz48 from '../components/PanToolAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPanToolAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPanToolAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPanToolAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPanToolAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPanToolAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPanToolAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPanToolAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPanToolAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPanToolAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPanToolAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPanToolAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPanToolAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPanToolAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPanToolAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPanToolAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
