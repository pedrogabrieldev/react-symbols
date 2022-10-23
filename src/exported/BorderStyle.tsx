import IconBorderStyleFill0Wght100Grad0Opsz48 from '../components/BorderStyleFill0Wght100Grad0Opsz48'
import IconBorderStyleFill0Wght200Grad0Opsz48 from '../components/BorderStyleFill0Wght200Grad0Opsz48'
import IconBorderStyleFill0Wght300Grad0Opsz48 from '../components/BorderStyleFill0Wght300Grad0Opsz48'
import IconBorderStyleFill0Wght400Grad0Opsz48 from '../components/BorderStyleFill0Wght400Grad0Opsz48'
import IconBorderStyleFill0Wght500Grad0Opsz48 from '../components/BorderStyleFill0Wght500Grad0Opsz48'
import IconBorderStyleFill0Wght600Grad0Opsz48 from '../components/BorderStyleFill0Wght600Grad0Opsz48'
import IconBorderStyleFill0Wght700Grad0Opsz48 from '../components/BorderStyleFill0Wght700Grad0Opsz48'
import IconBorderStyleFill1Wght100Grad0Opsz48 from '../components/BorderStyleFill1Wght100Grad0Opsz48'
import IconBorderStyleFill1Wght200Grad0Opsz48 from '../components/BorderStyleFill1Wght200Grad0Opsz48'
import IconBorderStyleFill1Wght300Grad0Opsz48 from '../components/BorderStyleFill1Wght300Grad0Opsz48'
import IconBorderStyleFill1Wght400Grad0Opsz48 from '../components/BorderStyleFill1Wght400Grad0Opsz48'
import IconBorderStyleFill1Wght500Grad0Opsz48 from '../components/BorderStyleFill1Wght500Grad0Opsz48'
import IconBorderStyleFill1Wght600Grad0Opsz48 from '../components/BorderStyleFill1Wght600Grad0Opsz48'
import IconBorderStyleFill1Wght700Grad0Opsz48 from '../components/BorderStyleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBorderStyle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBorderStyleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBorderStyleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBorderStyleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBorderStyleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBorderStyleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBorderStyleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBorderStyleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBorderStyleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBorderStyleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBorderStyleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBorderStyleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBorderStyleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBorderStyleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBorderStyleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
