import IconVrpanoFill0Wght100Grad0Opsz48 from '../components/VrpanoFill0Wght100Grad0Opsz48'
import IconVrpanoFill0Wght200Grad0Opsz48 from '../components/VrpanoFill0Wght200Grad0Opsz48'
import IconVrpanoFill0Wght300Grad0Opsz48 from '../components/VrpanoFill0Wght300Grad0Opsz48'
import IconVrpanoFill0Wght400Grad0Opsz48 from '../components/VrpanoFill0Wght400Grad0Opsz48'
import IconVrpanoFill0Wght500Grad0Opsz48 from '../components/VrpanoFill0Wght500Grad0Opsz48'
import IconVrpanoFill0Wght600Grad0Opsz48 from '../components/VrpanoFill0Wght600Grad0Opsz48'
import IconVrpanoFill0Wght700Grad0Opsz48 from '../components/VrpanoFill0Wght700Grad0Opsz48'
import IconVrpanoFill1Wght100Grad0Opsz48 from '../components/VrpanoFill1Wght100Grad0Opsz48'
import IconVrpanoFill1Wght200Grad0Opsz48 from '../components/VrpanoFill1Wght200Grad0Opsz48'
import IconVrpanoFill1Wght300Grad0Opsz48 from '../components/VrpanoFill1Wght300Grad0Opsz48'
import IconVrpanoFill1Wght400Grad0Opsz48 from '../components/VrpanoFill1Wght400Grad0Opsz48'
import IconVrpanoFill1Wght500Grad0Opsz48 from '../components/VrpanoFill1Wght500Grad0Opsz48'
import IconVrpanoFill1Wght600Grad0Opsz48 from '../components/VrpanoFill1Wght600Grad0Opsz48'
import IconVrpanoFill1Wght700Grad0Opsz48 from '../components/VrpanoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVrpano = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVrpanoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVrpanoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVrpanoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVrpanoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVrpanoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVrpanoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVrpanoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVrpanoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVrpanoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVrpanoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVrpanoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVrpanoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVrpanoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVrpanoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
