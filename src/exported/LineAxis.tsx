import IconLineAxisFill0Wght100Grad0Opsz48 from '../components/LineAxisFill0Wght100Grad0Opsz48'
import IconLineAxisFill0Wght200Grad0Opsz48 from '../components/LineAxisFill0Wght200Grad0Opsz48'
import IconLineAxisFill0Wght300Grad0Opsz48 from '../components/LineAxisFill0Wght300Grad0Opsz48'
import IconLineAxisFill0Wght400Grad0Opsz48 from '../components/LineAxisFill0Wght400Grad0Opsz48'
import IconLineAxisFill0Wght500Grad0Opsz48 from '../components/LineAxisFill0Wght500Grad0Opsz48'
import IconLineAxisFill0Wght600Grad0Opsz48 from '../components/LineAxisFill0Wght600Grad0Opsz48'
import IconLineAxisFill0Wght700Grad0Opsz48 from '../components/LineAxisFill0Wght700Grad0Opsz48'
import IconLineAxisFill1Wght100Grad0Opsz48 from '../components/LineAxisFill1Wght100Grad0Opsz48'
import IconLineAxisFill1Wght200Grad0Opsz48 from '../components/LineAxisFill1Wght200Grad0Opsz48'
import IconLineAxisFill1Wght300Grad0Opsz48 from '../components/LineAxisFill1Wght300Grad0Opsz48'
import IconLineAxisFill1Wght400Grad0Opsz48 from '../components/LineAxisFill1Wght400Grad0Opsz48'
import IconLineAxisFill1Wght500Grad0Opsz48 from '../components/LineAxisFill1Wght500Grad0Opsz48'
import IconLineAxisFill1Wght600Grad0Opsz48 from '../components/LineAxisFill1Wght600Grad0Opsz48'
import IconLineAxisFill1Wght700Grad0Opsz48 from '../components/LineAxisFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLineAxis = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLineAxisFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLineAxisFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLineAxisFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLineAxisFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLineAxisFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLineAxisFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLineAxisFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLineAxisFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLineAxisFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLineAxisFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLineAxisFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLineAxisFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLineAxisFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLineAxisFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
