import IconAutoModeFill0Wght100Grad0Opsz48 from '../components/AutoModeFill0Wght100Grad0Opsz48'
import IconAutoModeFill0Wght200Grad0Opsz48 from '../components/AutoModeFill0Wght200Grad0Opsz48'
import IconAutoModeFill0Wght300Grad0Opsz48 from '../components/AutoModeFill0Wght300Grad0Opsz48'
import IconAutoModeFill0Wght400Grad0Opsz48 from '../components/AutoModeFill0Wght400Grad0Opsz48'
import IconAutoModeFill0Wght500Grad0Opsz48 from '../components/AutoModeFill0Wght500Grad0Opsz48'
import IconAutoModeFill0Wght600Grad0Opsz48 from '../components/AutoModeFill0Wght600Grad0Opsz48'
import IconAutoModeFill0Wght700Grad0Opsz48 from '../components/AutoModeFill0Wght700Grad0Opsz48'
import IconAutoModeFill1Wght100Grad0Opsz48 from '../components/AutoModeFill1Wght100Grad0Opsz48'
import IconAutoModeFill1Wght200Grad0Opsz48 from '../components/AutoModeFill1Wght200Grad0Opsz48'
import IconAutoModeFill1Wght300Grad0Opsz48 from '../components/AutoModeFill1Wght300Grad0Opsz48'
import IconAutoModeFill1Wght400Grad0Opsz48 from '../components/AutoModeFill1Wght400Grad0Opsz48'
import IconAutoModeFill1Wght500Grad0Opsz48 from '../components/AutoModeFill1Wght500Grad0Opsz48'
import IconAutoModeFill1Wght600Grad0Opsz48 from '../components/AutoModeFill1Wght600Grad0Opsz48'
import IconAutoModeFill1Wght700Grad0Opsz48 from '../components/AutoModeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutoMode = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutoModeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutoModeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutoModeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutoModeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutoModeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutoModeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutoModeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutoModeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutoModeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutoModeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutoModeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutoModeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutoModeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutoModeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
