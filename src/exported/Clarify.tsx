import IconClarifyFill0Wght100Grad0Opsz48 from '../components/ClarifyFill0Wght100Grad0Opsz48'
import IconClarifyFill0Wght200Grad0Opsz48 from '../components/ClarifyFill0Wght200Grad0Opsz48'
import IconClarifyFill0Wght300Grad0Opsz48 from '../components/ClarifyFill0Wght300Grad0Opsz48'
import IconClarifyFill0Wght400Grad0Opsz48 from '../components/ClarifyFill0Wght400Grad0Opsz48'
import IconClarifyFill0Wght500Grad0Opsz48 from '../components/ClarifyFill0Wght500Grad0Opsz48'
import IconClarifyFill0Wght600Grad0Opsz48 from '../components/ClarifyFill0Wght600Grad0Opsz48'
import IconClarifyFill0Wght700Grad0Opsz48 from '../components/ClarifyFill0Wght700Grad0Opsz48'
import IconClarifyFill1Wght100Grad0Opsz48 from '../components/ClarifyFill1Wght100Grad0Opsz48'
import IconClarifyFill1Wght200Grad0Opsz48 from '../components/ClarifyFill1Wght200Grad0Opsz48'
import IconClarifyFill1Wght300Grad0Opsz48 from '../components/ClarifyFill1Wght300Grad0Opsz48'
import IconClarifyFill1Wght400Grad0Opsz48 from '../components/ClarifyFill1Wght400Grad0Opsz48'
import IconClarifyFill1Wght500Grad0Opsz48 from '../components/ClarifyFill1Wght500Grad0Opsz48'
import IconClarifyFill1Wght600Grad0Opsz48 from '../components/ClarifyFill1Wght600Grad0Opsz48'
import IconClarifyFill1Wght700Grad0Opsz48 from '../components/ClarifyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconClarify = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconClarifyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconClarifyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconClarifyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconClarifyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconClarifyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconClarifyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconClarifyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconClarifyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconClarifyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconClarifyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconClarifyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconClarifyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconClarifyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconClarifyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
