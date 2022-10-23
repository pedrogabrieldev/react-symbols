import IconEditOffFill0Wght100Grad0Opsz48 from '../components/EditOffFill0Wght100Grad0Opsz48'
import IconEditOffFill0Wght200Grad0Opsz48 from '../components/EditOffFill0Wght200Grad0Opsz48'
import IconEditOffFill0Wght300Grad0Opsz48 from '../components/EditOffFill0Wght300Grad0Opsz48'
import IconEditOffFill0Wght400Grad0Opsz48 from '../components/EditOffFill0Wght400Grad0Opsz48'
import IconEditOffFill0Wght500Grad0Opsz48 from '../components/EditOffFill0Wght500Grad0Opsz48'
import IconEditOffFill0Wght600Grad0Opsz48 from '../components/EditOffFill0Wght600Grad0Opsz48'
import IconEditOffFill0Wght700Grad0Opsz48 from '../components/EditOffFill0Wght700Grad0Opsz48'
import IconEditOffFill1Wght100Grad0Opsz48 from '../components/EditOffFill1Wght100Grad0Opsz48'
import IconEditOffFill1Wght200Grad0Opsz48 from '../components/EditOffFill1Wght200Grad0Opsz48'
import IconEditOffFill1Wght300Grad0Opsz48 from '../components/EditOffFill1Wght300Grad0Opsz48'
import IconEditOffFill1Wght400Grad0Opsz48 from '../components/EditOffFill1Wght400Grad0Opsz48'
import IconEditOffFill1Wght500Grad0Opsz48 from '../components/EditOffFill1Wght500Grad0Opsz48'
import IconEditOffFill1Wght600Grad0Opsz48 from '../components/EditOffFill1Wght600Grad0Opsz48'
import IconEditOffFill1Wght700Grad0Opsz48 from '../components/EditOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEditOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEditOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEditOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEditOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEditOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEditOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEditOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEditOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEditOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEditOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEditOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEditOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEditOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEditOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEditOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
