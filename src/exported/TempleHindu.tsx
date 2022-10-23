import IconTempleHinduFill0Wght100Grad0Opsz48 from '../components/TempleHinduFill0Wght100Grad0Opsz48'
import IconTempleHinduFill0Wght200Grad0Opsz48 from '../components/TempleHinduFill0Wght200Grad0Opsz48'
import IconTempleHinduFill0Wght300Grad0Opsz48 from '../components/TempleHinduFill0Wght300Grad0Opsz48'
import IconTempleHinduFill0Wght400Grad0Opsz48 from '../components/TempleHinduFill0Wght400Grad0Opsz48'
import IconTempleHinduFill0Wght500Grad0Opsz48 from '../components/TempleHinduFill0Wght500Grad0Opsz48'
import IconTempleHinduFill0Wght600Grad0Opsz48 from '../components/TempleHinduFill0Wght600Grad0Opsz48'
import IconTempleHinduFill0Wght700Grad0Opsz48 from '../components/TempleHinduFill0Wght700Grad0Opsz48'
import IconTempleHinduFill1Wght100Grad0Opsz48 from '../components/TempleHinduFill1Wght100Grad0Opsz48'
import IconTempleHinduFill1Wght200Grad0Opsz48 from '../components/TempleHinduFill1Wght200Grad0Opsz48'
import IconTempleHinduFill1Wght300Grad0Opsz48 from '../components/TempleHinduFill1Wght300Grad0Opsz48'
import IconTempleHinduFill1Wght400Grad0Opsz48 from '../components/TempleHinduFill1Wght400Grad0Opsz48'
import IconTempleHinduFill1Wght500Grad0Opsz48 from '../components/TempleHinduFill1Wght500Grad0Opsz48'
import IconTempleHinduFill1Wght600Grad0Opsz48 from '../components/TempleHinduFill1Wght600Grad0Opsz48'
import IconTempleHinduFill1Wght700Grad0Opsz48 from '../components/TempleHinduFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTempleHindu = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTempleHinduFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTempleHinduFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTempleHinduFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTempleHinduFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTempleHinduFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTempleHinduFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTempleHinduFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTempleHinduFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTempleHinduFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTempleHinduFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTempleHinduFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTempleHinduFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTempleHinduFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTempleHinduFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
