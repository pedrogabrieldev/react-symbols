import IconSynagogueFill0Wght100Grad0Opsz48 from '../components/SynagogueFill0Wght100Grad0Opsz48'
import IconSynagogueFill0Wght200Grad0Opsz48 from '../components/SynagogueFill0Wght200Grad0Opsz48'
import IconSynagogueFill0Wght300Grad0Opsz48 from '../components/SynagogueFill0Wght300Grad0Opsz48'
import IconSynagogueFill0Wght400Grad0Opsz48 from '../components/SynagogueFill0Wght400Grad0Opsz48'
import IconSynagogueFill0Wght500Grad0Opsz48 from '../components/SynagogueFill0Wght500Grad0Opsz48'
import IconSynagogueFill0Wght600Grad0Opsz48 from '../components/SynagogueFill0Wght600Grad0Opsz48'
import IconSynagogueFill0Wght700Grad0Opsz48 from '../components/SynagogueFill0Wght700Grad0Opsz48'
import IconSynagogueFill1Wght100Grad0Opsz48 from '../components/SynagogueFill1Wght100Grad0Opsz48'
import IconSynagogueFill1Wght200Grad0Opsz48 from '../components/SynagogueFill1Wght200Grad0Opsz48'
import IconSynagogueFill1Wght300Grad0Opsz48 from '../components/SynagogueFill1Wght300Grad0Opsz48'
import IconSynagogueFill1Wght400Grad0Opsz48 from '../components/SynagogueFill1Wght400Grad0Opsz48'
import IconSynagogueFill1Wght500Grad0Opsz48 from '../components/SynagogueFill1Wght500Grad0Opsz48'
import IconSynagogueFill1Wght600Grad0Opsz48 from '../components/SynagogueFill1Wght600Grad0Opsz48'
import IconSynagogueFill1Wght700Grad0Opsz48 from '../components/SynagogueFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSynagogue = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSynagogueFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSynagogueFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSynagogueFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSynagogueFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSynagogueFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSynagogueFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSynagogueFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSynagogueFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSynagogueFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSynagogueFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSynagogueFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSynagogueFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSynagogueFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSynagogueFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
