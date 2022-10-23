import IconVolcanoFill0Wght100Grad0Opsz48 from '../components/VolcanoFill0Wght100Grad0Opsz48'
import IconVolcanoFill0Wght200Grad0Opsz48 from '../components/VolcanoFill0Wght200Grad0Opsz48'
import IconVolcanoFill0Wght300Grad0Opsz48 from '../components/VolcanoFill0Wght300Grad0Opsz48'
import IconVolcanoFill0Wght400Grad0Opsz48 from '../components/VolcanoFill0Wght400Grad0Opsz48'
import IconVolcanoFill0Wght500Grad0Opsz48 from '../components/VolcanoFill0Wght500Grad0Opsz48'
import IconVolcanoFill0Wght600Grad0Opsz48 from '../components/VolcanoFill0Wght600Grad0Opsz48'
import IconVolcanoFill0Wght700Grad0Opsz48 from '../components/VolcanoFill0Wght700Grad0Opsz48'
import IconVolcanoFill1Wght100Grad0Opsz48 from '../components/VolcanoFill1Wght100Grad0Opsz48'
import IconVolcanoFill1Wght200Grad0Opsz48 from '../components/VolcanoFill1Wght200Grad0Opsz48'
import IconVolcanoFill1Wght300Grad0Opsz48 from '../components/VolcanoFill1Wght300Grad0Opsz48'
import IconVolcanoFill1Wght400Grad0Opsz48 from '../components/VolcanoFill1Wght400Grad0Opsz48'
import IconVolcanoFill1Wght500Grad0Opsz48 from '../components/VolcanoFill1Wght500Grad0Opsz48'
import IconVolcanoFill1Wght600Grad0Opsz48 from '../components/VolcanoFill1Wght600Grad0Opsz48'
import IconVolcanoFill1Wght700Grad0Opsz48 from '../components/VolcanoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVolcano = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVolcanoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVolcanoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVolcanoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVolcanoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVolcanoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVolcanoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVolcanoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVolcanoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVolcanoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVolcanoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVolcanoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVolcanoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVolcanoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVolcanoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
