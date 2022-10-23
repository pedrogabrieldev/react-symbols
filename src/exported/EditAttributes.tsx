import IconEditAttributesFill0Wght100Grad0Opsz48 from '../components/EditAttributesFill0Wght100Grad0Opsz48'
import IconEditAttributesFill0Wght200Grad0Opsz48 from '../components/EditAttributesFill0Wght200Grad0Opsz48'
import IconEditAttributesFill0Wght300Grad0Opsz48 from '../components/EditAttributesFill0Wght300Grad0Opsz48'
import IconEditAttributesFill0Wght400Grad0Opsz48 from '../components/EditAttributesFill0Wght400Grad0Opsz48'
import IconEditAttributesFill0Wght500Grad0Opsz48 from '../components/EditAttributesFill0Wght500Grad0Opsz48'
import IconEditAttributesFill0Wght600Grad0Opsz48 from '../components/EditAttributesFill0Wght600Grad0Opsz48'
import IconEditAttributesFill0Wght700Grad0Opsz48 from '../components/EditAttributesFill0Wght700Grad0Opsz48'
import IconEditAttributesFill1Wght100Grad0Opsz48 from '../components/EditAttributesFill1Wght100Grad0Opsz48'
import IconEditAttributesFill1Wght200Grad0Opsz48 from '../components/EditAttributesFill1Wght200Grad0Opsz48'
import IconEditAttributesFill1Wght300Grad0Opsz48 from '../components/EditAttributesFill1Wght300Grad0Opsz48'
import IconEditAttributesFill1Wght400Grad0Opsz48 from '../components/EditAttributesFill1Wght400Grad0Opsz48'
import IconEditAttributesFill1Wght500Grad0Opsz48 from '../components/EditAttributesFill1Wght500Grad0Opsz48'
import IconEditAttributesFill1Wght600Grad0Opsz48 from '../components/EditAttributesFill1Wght600Grad0Opsz48'
import IconEditAttributesFill1Wght700Grad0Opsz48 from '../components/EditAttributesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEditAttributes = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEditAttributesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEditAttributesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEditAttributesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEditAttributesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEditAttributesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEditAttributesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEditAttributesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEditAttributesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEditAttributesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEditAttributesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEditAttributesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEditAttributesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEditAttributesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEditAttributesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
