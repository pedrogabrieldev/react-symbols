import IconDirtyLensFill0Wght100Grad0Opsz48 from '../components/DirtyLensFill0Wght100Grad0Opsz48'
import IconDirtyLensFill0Wght200Grad0Opsz48 from '../components/DirtyLensFill0Wght200Grad0Opsz48'
import IconDirtyLensFill0Wght300Grad0Opsz48 from '../components/DirtyLensFill0Wght300Grad0Opsz48'
import IconDirtyLensFill0Wght400Grad0Opsz48 from '../components/DirtyLensFill0Wght400Grad0Opsz48'
import IconDirtyLensFill0Wght500Grad0Opsz48 from '../components/DirtyLensFill0Wght500Grad0Opsz48'
import IconDirtyLensFill0Wght600Grad0Opsz48 from '../components/DirtyLensFill0Wght600Grad0Opsz48'
import IconDirtyLensFill0Wght700Grad0Opsz48 from '../components/DirtyLensFill0Wght700Grad0Opsz48'
import IconDirtyLensFill1Wght100Grad0Opsz48 from '../components/DirtyLensFill1Wght100Grad0Opsz48'
import IconDirtyLensFill1Wght200Grad0Opsz48 from '../components/DirtyLensFill1Wght200Grad0Opsz48'
import IconDirtyLensFill1Wght300Grad0Opsz48 from '../components/DirtyLensFill1Wght300Grad0Opsz48'
import IconDirtyLensFill1Wght400Grad0Opsz48 from '../components/DirtyLensFill1Wght400Grad0Opsz48'
import IconDirtyLensFill1Wght500Grad0Opsz48 from '../components/DirtyLensFill1Wght500Grad0Opsz48'
import IconDirtyLensFill1Wght600Grad0Opsz48 from '../components/DirtyLensFill1Wght600Grad0Opsz48'
import IconDirtyLensFill1Wght700Grad0Opsz48 from '../components/DirtyLensFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDirtyLens = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDirtyLensFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDirtyLensFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDirtyLensFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDirtyLensFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDirtyLensFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDirtyLensFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDirtyLensFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDirtyLensFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDirtyLensFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDirtyLensFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDirtyLensFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDirtyLensFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDirtyLensFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDirtyLensFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
