import IconLocalSeeFill0Wght100Grad0Opsz48 from '../components/LocalSeeFill0Wght100Grad0Opsz48'
import IconLocalSeeFill0Wght200Grad0Opsz48 from '../components/LocalSeeFill0Wght200Grad0Opsz48'
import IconLocalSeeFill0Wght300Grad0Opsz48 from '../components/LocalSeeFill0Wght300Grad0Opsz48'
import IconLocalSeeFill0Wght400Grad0Opsz48 from '../components/LocalSeeFill0Wght400Grad0Opsz48'
import IconLocalSeeFill0Wght500Grad0Opsz48 from '../components/LocalSeeFill0Wght500Grad0Opsz48'
import IconLocalSeeFill0Wght600Grad0Opsz48 from '../components/LocalSeeFill0Wght600Grad0Opsz48'
import IconLocalSeeFill0Wght700Grad0Opsz48 from '../components/LocalSeeFill0Wght700Grad0Opsz48'
import IconLocalSeeFill1Wght100Grad0Opsz48 from '../components/LocalSeeFill1Wght100Grad0Opsz48'
import IconLocalSeeFill1Wght200Grad0Opsz48 from '../components/LocalSeeFill1Wght200Grad0Opsz48'
import IconLocalSeeFill1Wght300Grad0Opsz48 from '../components/LocalSeeFill1Wght300Grad0Opsz48'
import IconLocalSeeFill1Wght400Grad0Opsz48 from '../components/LocalSeeFill1Wght400Grad0Opsz48'
import IconLocalSeeFill1Wght500Grad0Opsz48 from '../components/LocalSeeFill1Wght500Grad0Opsz48'
import IconLocalSeeFill1Wght600Grad0Opsz48 from '../components/LocalSeeFill1Wght600Grad0Opsz48'
import IconLocalSeeFill1Wght700Grad0Opsz48 from '../components/LocalSeeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalSee = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalSeeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalSeeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalSeeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalSeeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalSeeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalSeeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalSeeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalSeeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalSeeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalSeeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalSeeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalSeeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalSeeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalSeeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
