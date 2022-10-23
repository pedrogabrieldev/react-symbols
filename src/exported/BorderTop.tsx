import IconBorderTopFill0Wght100Grad0Opsz48 from '../components/BorderTopFill0Wght100Grad0Opsz48'
import IconBorderTopFill0Wght200Grad0Opsz48 from '../components/BorderTopFill0Wght200Grad0Opsz48'
import IconBorderTopFill0Wght300Grad0Opsz48 from '../components/BorderTopFill0Wght300Grad0Opsz48'
import IconBorderTopFill0Wght400Grad0Opsz48 from '../components/BorderTopFill0Wght400Grad0Opsz48'
import IconBorderTopFill0Wght500Grad0Opsz48 from '../components/BorderTopFill0Wght500Grad0Opsz48'
import IconBorderTopFill0Wght600Grad0Opsz48 from '../components/BorderTopFill0Wght600Grad0Opsz48'
import IconBorderTopFill0Wght700Grad0Opsz48 from '../components/BorderTopFill0Wght700Grad0Opsz48'
import IconBorderTopFill1Wght100Grad0Opsz48 from '../components/BorderTopFill1Wght100Grad0Opsz48'
import IconBorderTopFill1Wght200Grad0Opsz48 from '../components/BorderTopFill1Wght200Grad0Opsz48'
import IconBorderTopFill1Wght300Grad0Opsz48 from '../components/BorderTopFill1Wght300Grad0Opsz48'
import IconBorderTopFill1Wght400Grad0Opsz48 from '../components/BorderTopFill1Wght400Grad0Opsz48'
import IconBorderTopFill1Wght500Grad0Opsz48 from '../components/BorderTopFill1Wght500Grad0Opsz48'
import IconBorderTopFill1Wght600Grad0Opsz48 from '../components/BorderTopFill1Wght600Grad0Opsz48'
import IconBorderTopFill1Wght700Grad0Opsz48 from '../components/BorderTopFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBorderTop = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBorderTopFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBorderTopFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBorderTopFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBorderTopFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBorderTopFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBorderTopFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBorderTopFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBorderTopFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBorderTopFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBorderTopFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBorderTopFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBorderTopFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBorderTopFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBorderTopFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
