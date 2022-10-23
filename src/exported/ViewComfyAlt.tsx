import IconViewComfyAltFill0Wght100Grad0Opsz48 from '../components/ViewComfyAltFill0Wght100Grad0Opsz48'
import IconViewComfyAltFill0Wght200Grad0Opsz48 from '../components/ViewComfyAltFill0Wght200Grad0Opsz48'
import IconViewComfyAltFill0Wght300Grad0Opsz48 from '../components/ViewComfyAltFill0Wght300Grad0Opsz48'
import IconViewComfyAltFill0Wght400Grad0Opsz48 from '../components/ViewComfyAltFill0Wght400Grad0Opsz48'
import IconViewComfyAltFill0Wght500Grad0Opsz48 from '../components/ViewComfyAltFill0Wght500Grad0Opsz48'
import IconViewComfyAltFill0Wght600Grad0Opsz48 from '../components/ViewComfyAltFill0Wght600Grad0Opsz48'
import IconViewComfyAltFill0Wght700Grad0Opsz48 from '../components/ViewComfyAltFill0Wght700Grad0Opsz48'
import IconViewComfyAltFill1Wght100Grad0Opsz48 from '../components/ViewComfyAltFill1Wght100Grad0Opsz48'
import IconViewComfyAltFill1Wght200Grad0Opsz48 from '../components/ViewComfyAltFill1Wght200Grad0Opsz48'
import IconViewComfyAltFill1Wght300Grad0Opsz48 from '../components/ViewComfyAltFill1Wght300Grad0Opsz48'
import IconViewComfyAltFill1Wght400Grad0Opsz48 from '../components/ViewComfyAltFill1Wght400Grad0Opsz48'
import IconViewComfyAltFill1Wght500Grad0Opsz48 from '../components/ViewComfyAltFill1Wght500Grad0Opsz48'
import IconViewComfyAltFill1Wght600Grad0Opsz48 from '../components/ViewComfyAltFill1Wght600Grad0Opsz48'
import IconViewComfyAltFill1Wght700Grad0Opsz48 from '../components/ViewComfyAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewComfyAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewComfyAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewComfyAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewComfyAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewComfyAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewComfyAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewComfyAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewComfyAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewComfyAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewComfyAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewComfyAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewComfyAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewComfyAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewComfyAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewComfyAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
