import IconCopyAllFill0Wght100Grad0Opsz48 from '../components/CopyAllFill0Wght100Grad0Opsz48'
import IconCopyAllFill0Wght200Grad0Opsz48 from '../components/CopyAllFill0Wght200Grad0Opsz48'
import IconCopyAllFill0Wght300Grad0Opsz48 from '../components/CopyAllFill0Wght300Grad0Opsz48'
import IconCopyAllFill0Wght400Grad0Opsz48 from '../components/CopyAllFill0Wght400Grad0Opsz48'
import IconCopyAllFill0Wght500Grad0Opsz48 from '../components/CopyAllFill0Wght500Grad0Opsz48'
import IconCopyAllFill0Wght600Grad0Opsz48 from '../components/CopyAllFill0Wght600Grad0Opsz48'
import IconCopyAllFill0Wght700Grad0Opsz48 from '../components/CopyAllFill0Wght700Grad0Opsz48'
import IconCopyAllFill1Wght100Grad0Opsz48 from '../components/CopyAllFill1Wght100Grad0Opsz48'
import IconCopyAllFill1Wght200Grad0Opsz48 from '../components/CopyAllFill1Wght200Grad0Opsz48'
import IconCopyAllFill1Wght300Grad0Opsz48 from '../components/CopyAllFill1Wght300Grad0Opsz48'
import IconCopyAllFill1Wght400Grad0Opsz48 from '../components/CopyAllFill1Wght400Grad0Opsz48'
import IconCopyAllFill1Wght500Grad0Opsz48 from '../components/CopyAllFill1Wght500Grad0Opsz48'
import IconCopyAllFill1Wght600Grad0Opsz48 from '../components/CopyAllFill1Wght600Grad0Opsz48'
import IconCopyAllFill1Wght700Grad0Opsz48 from '../components/CopyAllFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCopyAll = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCopyAllFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCopyAllFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCopyAllFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCopyAllFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCopyAllFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCopyAllFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCopyAllFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCopyAllFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCopyAllFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCopyAllFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCopyAllFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCopyAllFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCopyAllFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCopyAllFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
