import IconPergolaFill0Wght100Grad0Opsz48 from '../components/PergolaFill0Wght100Grad0Opsz48'
import IconPergolaFill0Wght200Grad0Opsz48 from '../components/PergolaFill0Wght200Grad0Opsz48'
import IconPergolaFill0Wght300Grad0Opsz48 from '../components/PergolaFill0Wght300Grad0Opsz48'
import IconPergolaFill0Wght400Grad0Opsz48 from '../components/PergolaFill0Wght400Grad0Opsz48'
import IconPergolaFill0Wght500Grad0Opsz48 from '../components/PergolaFill0Wght500Grad0Opsz48'
import IconPergolaFill0Wght600Grad0Opsz48 from '../components/PergolaFill0Wght600Grad0Opsz48'
import IconPergolaFill0Wght700Grad0Opsz48 from '../components/PergolaFill0Wght700Grad0Opsz48'
import IconPergolaFill1Wght100Grad0Opsz48 from '../components/PergolaFill1Wght100Grad0Opsz48'
import IconPergolaFill1Wght200Grad0Opsz48 from '../components/PergolaFill1Wght200Grad0Opsz48'
import IconPergolaFill1Wght300Grad0Opsz48 from '../components/PergolaFill1Wght300Grad0Opsz48'
import IconPergolaFill1Wght400Grad0Opsz48 from '../components/PergolaFill1Wght400Grad0Opsz48'
import IconPergolaFill1Wght500Grad0Opsz48 from '../components/PergolaFill1Wght500Grad0Opsz48'
import IconPergolaFill1Wght600Grad0Opsz48 from '../components/PergolaFill1Wght600Grad0Opsz48'
import IconPergolaFill1Wght700Grad0Opsz48 from '../components/PergolaFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPergola = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPergolaFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPergolaFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPergolaFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPergolaFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPergolaFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPergolaFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPergolaFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPergolaFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPergolaFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPergolaFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPergolaFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPergolaFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPergolaFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPergolaFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
