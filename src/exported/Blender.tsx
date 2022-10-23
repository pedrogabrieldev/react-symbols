import IconBlenderFill0Wght100Grad0Opsz48 from '../components/BlenderFill0Wght100Grad0Opsz48'
import IconBlenderFill0Wght200Grad0Opsz48 from '../components/BlenderFill0Wght200Grad0Opsz48'
import IconBlenderFill0Wght300Grad0Opsz48 from '../components/BlenderFill0Wght300Grad0Opsz48'
import IconBlenderFill0Wght400Grad0Opsz48 from '../components/BlenderFill0Wght400Grad0Opsz48'
import IconBlenderFill0Wght500Grad0Opsz48 from '../components/BlenderFill0Wght500Grad0Opsz48'
import IconBlenderFill0Wght600Grad0Opsz48 from '../components/BlenderFill0Wght600Grad0Opsz48'
import IconBlenderFill0Wght700Grad0Opsz48 from '../components/BlenderFill0Wght700Grad0Opsz48'
import IconBlenderFill1Wght100Grad0Opsz48 from '../components/BlenderFill1Wght100Grad0Opsz48'
import IconBlenderFill1Wght200Grad0Opsz48 from '../components/BlenderFill1Wght200Grad0Opsz48'
import IconBlenderFill1Wght300Grad0Opsz48 from '../components/BlenderFill1Wght300Grad0Opsz48'
import IconBlenderFill1Wght400Grad0Opsz48 from '../components/BlenderFill1Wght400Grad0Opsz48'
import IconBlenderFill1Wght500Grad0Opsz48 from '../components/BlenderFill1Wght500Grad0Opsz48'
import IconBlenderFill1Wght600Grad0Opsz48 from '../components/BlenderFill1Wght600Grad0Opsz48'
import IconBlenderFill1Wght700Grad0Opsz48 from '../components/BlenderFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBlender = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBlenderFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBlenderFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBlenderFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBlenderFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBlenderFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBlenderFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBlenderFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBlenderFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBlenderFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBlenderFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBlenderFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBlenderFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBlenderFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBlenderFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
