import IconFileOpenFill0Wght100Grad0Opsz48 from '../components/FileOpenFill0Wght100Grad0Opsz48'
import IconFileOpenFill0Wght200Grad0Opsz48 from '../components/FileOpenFill0Wght200Grad0Opsz48'
import IconFileOpenFill0Wght300Grad0Opsz48 from '../components/FileOpenFill0Wght300Grad0Opsz48'
import IconFileOpenFill0Wght400Grad0Opsz48 from '../components/FileOpenFill0Wght400Grad0Opsz48'
import IconFileOpenFill0Wght500Grad0Opsz48 from '../components/FileOpenFill0Wght500Grad0Opsz48'
import IconFileOpenFill0Wght600Grad0Opsz48 from '../components/FileOpenFill0Wght600Grad0Opsz48'
import IconFileOpenFill0Wght700Grad0Opsz48 from '../components/FileOpenFill0Wght700Grad0Opsz48'
import IconFileOpenFill1Wght100Grad0Opsz48 from '../components/FileOpenFill1Wght100Grad0Opsz48'
import IconFileOpenFill1Wght200Grad0Opsz48 from '../components/FileOpenFill1Wght200Grad0Opsz48'
import IconFileOpenFill1Wght300Grad0Opsz48 from '../components/FileOpenFill1Wght300Grad0Opsz48'
import IconFileOpenFill1Wght400Grad0Opsz48 from '../components/FileOpenFill1Wght400Grad0Opsz48'
import IconFileOpenFill1Wght500Grad0Opsz48 from '../components/FileOpenFill1Wght500Grad0Opsz48'
import IconFileOpenFill1Wght600Grad0Opsz48 from '../components/FileOpenFill1Wght600Grad0Opsz48'
import IconFileOpenFill1Wght700Grad0Opsz48 from '../components/FileOpenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFileOpen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFileOpenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFileOpenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFileOpenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFileOpenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFileOpenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFileOpenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFileOpenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFileOpenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFileOpenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFileOpenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFileOpenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFileOpenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFileOpenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFileOpenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
