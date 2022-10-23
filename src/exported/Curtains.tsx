import IconCurtainsFill0Wght100Grad0Opsz48 from '../components/CurtainsFill0Wght100Grad0Opsz48'
import IconCurtainsFill0Wght200Grad0Opsz48 from '../components/CurtainsFill0Wght200Grad0Opsz48'
import IconCurtainsFill0Wght300Grad0Opsz48 from '../components/CurtainsFill0Wght300Grad0Opsz48'
import IconCurtainsFill0Wght400Grad0Opsz48 from '../components/CurtainsFill0Wght400Grad0Opsz48'
import IconCurtainsFill0Wght500Grad0Opsz48 from '../components/CurtainsFill0Wght500Grad0Opsz48'
import IconCurtainsFill0Wght600Grad0Opsz48 from '../components/CurtainsFill0Wght600Grad0Opsz48'
import IconCurtainsFill0Wght700Grad0Opsz48 from '../components/CurtainsFill0Wght700Grad0Opsz48'
import IconCurtainsFill1Wght100Grad0Opsz48 from '../components/CurtainsFill1Wght100Grad0Opsz48'
import IconCurtainsFill1Wght200Grad0Opsz48 from '../components/CurtainsFill1Wght200Grad0Opsz48'
import IconCurtainsFill1Wght300Grad0Opsz48 from '../components/CurtainsFill1Wght300Grad0Opsz48'
import IconCurtainsFill1Wght400Grad0Opsz48 from '../components/CurtainsFill1Wght400Grad0Opsz48'
import IconCurtainsFill1Wght500Grad0Opsz48 from '../components/CurtainsFill1Wght500Grad0Opsz48'
import IconCurtainsFill1Wght600Grad0Opsz48 from '../components/CurtainsFill1Wght600Grad0Opsz48'
import IconCurtainsFill1Wght700Grad0Opsz48 from '../components/CurtainsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCurtains = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCurtainsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCurtainsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCurtainsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCurtainsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCurtainsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCurtainsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCurtainsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCurtainsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCurtainsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCurtainsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCurtainsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCurtainsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCurtainsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCurtainsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
