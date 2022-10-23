import IconPersonOffFill0Wght100Grad0Opsz48 from '../components/PersonOffFill0Wght100Grad0Opsz48'
import IconPersonOffFill0Wght200Grad0Opsz48 from '../components/PersonOffFill0Wght200Grad0Opsz48'
import IconPersonOffFill0Wght300Grad0Opsz48 from '../components/PersonOffFill0Wght300Grad0Opsz48'
import IconPersonOffFill0Wght400Grad0Opsz48 from '../components/PersonOffFill0Wght400Grad0Opsz48'
import IconPersonOffFill0Wght500Grad0Opsz48 from '../components/PersonOffFill0Wght500Grad0Opsz48'
import IconPersonOffFill0Wght600Grad0Opsz48 from '../components/PersonOffFill0Wght600Grad0Opsz48'
import IconPersonOffFill0Wght700Grad0Opsz48 from '../components/PersonOffFill0Wght700Grad0Opsz48'
import IconPersonOffFill1Wght100Grad0Opsz48 from '../components/PersonOffFill1Wght100Grad0Opsz48'
import IconPersonOffFill1Wght200Grad0Opsz48 from '../components/PersonOffFill1Wght200Grad0Opsz48'
import IconPersonOffFill1Wght300Grad0Opsz48 from '../components/PersonOffFill1Wght300Grad0Opsz48'
import IconPersonOffFill1Wght400Grad0Opsz48 from '../components/PersonOffFill1Wght400Grad0Opsz48'
import IconPersonOffFill1Wght500Grad0Opsz48 from '../components/PersonOffFill1Wght500Grad0Opsz48'
import IconPersonOffFill1Wght600Grad0Opsz48 from '../components/PersonOffFill1Wght600Grad0Opsz48'
import IconPersonOffFill1Wght700Grad0Opsz48 from '../components/PersonOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPersonOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPersonOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPersonOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPersonOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPersonOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPersonOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPersonOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPersonOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPersonOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPersonOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPersonOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPersonOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPersonOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPersonOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPersonOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
