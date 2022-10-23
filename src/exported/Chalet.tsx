import IconChaletFill0Wght100Grad0Opsz48 from '../components/ChaletFill0Wght100Grad0Opsz48'
import IconChaletFill0Wght200Grad0Opsz48 from '../components/ChaletFill0Wght200Grad0Opsz48'
import IconChaletFill0Wght300Grad0Opsz48 from '../components/ChaletFill0Wght300Grad0Opsz48'
import IconChaletFill0Wght400Grad0Opsz48 from '../components/ChaletFill0Wght400Grad0Opsz48'
import IconChaletFill0Wght500Grad0Opsz48 from '../components/ChaletFill0Wght500Grad0Opsz48'
import IconChaletFill0Wght600Grad0Opsz48 from '../components/ChaletFill0Wght600Grad0Opsz48'
import IconChaletFill0Wght700Grad0Opsz48 from '../components/ChaletFill0Wght700Grad0Opsz48'
import IconChaletFill1Wght100Grad0Opsz48 from '../components/ChaletFill1Wght100Grad0Opsz48'
import IconChaletFill1Wght200Grad0Opsz48 from '../components/ChaletFill1Wght200Grad0Opsz48'
import IconChaletFill1Wght300Grad0Opsz48 from '../components/ChaletFill1Wght300Grad0Opsz48'
import IconChaletFill1Wght400Grad0Opsz48 from '../components/ChaletFill1Wght400Grad0Opsz48'
import IconChaletFill1Wght500Grad0Opsz48 from '../components/ChaletFill1Wght500Grad0Opsz48'
import IconChaletFill1Wght600Grad0Opsz48 from '../components/ChaletFill1Wght600Grad0Opsz48'
import IconChaletFill1Wght700Grad0Opsz48 from '../components/ChaletFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChalet = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChaletFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChaletFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChaletFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChaletFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChaletFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChaletFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChaletFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChaletFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChaletFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChaletFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChaletFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChaletFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChaletFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChaletFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
