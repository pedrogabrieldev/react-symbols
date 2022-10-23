import IconEditNoteFill0Wght100Grad0Opsz48 from '../components/EditNoteFill0Wght100Grad0Opsz48'
import IconEditNoteFill0Wght200Grad0Opsz48 from '../components/EditNoteFill0Wght200Grad0Opsz48'
import IconEditNoteFill0Wght300Grad0Opsz48 from '../components/EditNoteFill0Wght300Grad0Opsz48'
import IconEditNoteFill0Wght400Grad0Opsz48 from '../components/EditNoteFill0Wght400Grad0Opsz48'
import IconEditNoteFill0Wght500Grad0Opsz48 from '../components/EditNoteFill0Wght500Grad0Opsz48'
import IconEditNoteFill0Wght600Grad0Opsz48 from '../components/EditNoteFill0Wght600Grad0Opsz48'
import IconEditNoteFill0Wght700Grad0Opsz48 from '../components/EditNoteFill0Wght700Grad0Opsz48'
import IconEditNoteFill1Wght100Grad0Opsz48 from '../components/EditNoteFill1Wght100Grad0Opsz48'
import IconEditNoteFill1Wght200Grad0Opsz48 from '../components/EditNoteFill1Wght200Grad0Opsz48'
import IconEditNoteFill1Wght300Grad0Opsz48 from '../components/EditNoteFill1Wght300Grad0Opsz48'
import IconEditNoteFill1Wght400Grad0Opsz48 from '../components/EditNoteFill1Wght400Grad0Opsz48'
import IconEditNoteFill1Wght500Grad0Opsz48 from '../components/EditNoteFill1Wght500Grad0Opsz48'
import IconEditNoteFill1Wght600Grad0Opsz48 from '../components/EditNoteFill1Wght600Grad0Opsz48'
import IconEditNoteFill1Wght700Grad0Opsz48 from '../components/EditNoteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEditNote = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEditNoteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEditNoteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEditNoteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEditNoteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEditNoteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEditNoteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEditNoteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEditNoteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEditNoteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEditNoteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEditNoteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEditNoteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEditNoteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEditNoteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
