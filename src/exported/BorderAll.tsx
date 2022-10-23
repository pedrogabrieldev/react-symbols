import IconBorderAllFill0Wght100Grad0Opsz48 from '../components/BorderAllFill0Wght100Grad0Opsz48'
import IconBorderAllFill0Wght200Grad0Opsz48 from '../components/BorderAllFill0Wght200Grad0Opsz48'
import IconBorderAllFill0Wght300Grad0Opsz48 from '../components/BorderAllFill0Wght300Grad0Opsz48'
import IconBorderAllFill0Wght400Grad0Opsz48 from '../components/BorderAllFill0Wght400Grad0Opsz48'
import IconBorderAllFill0Wght500Grad0Opsz48 from '../components/BorderAllFill0Wght500Grad0Opsz48'
import IconBorderAllFill0Wght600Grad0Opsz48 from '../components/BorderAllFill0Wght600Grad0Opsz48'
import IconBorderAllFill0Wght700Grad0Opsz48 from '../components/BorderAllFill0Wght700Grad0Opsz48'
import IconBorderAllFill1Wght100Grad0Opsz48 from '../components/BorderAllFill1Wght100Grad0Opsz48'
import IconBorderAllFill1Wght200Grad0Opsz48 from '../components/BorderAllFill1Wght200Grad0Opsz48'
import IconBorderAllFill1Wght300Grad0Opsz48 from '../components/BorderAllFill1Wght300Grad0Opsz48'
import IconBorderAllFill1Wght400Grad0Opsz48 from '../components/BorderAllFill1Wght400Grad0Opsz48'
import IconBorderAllFill1Wght500Grad0Opsz48 from '../components/BorderAllFill1Wght500Grad0Opsz48'
import IconBorderAllFill1Wght600Grad0Opsz48 from '../components/BorderAllFill1Wght600Grad0Opsz48'
import IconBorderAllFill1Wght700Grad0Opsz48 from '../components/BorderAllFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBorderAll = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBorderAllFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBorderAllFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBorderAllFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBorderAllFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBorderAllFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBorderAllFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBorderAllFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBorderAllFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBorderAllFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBorderAllFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBorderAllFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBorderAllFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBorderAllFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBorderAllFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
