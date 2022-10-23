import IconFastfoodFill0Wght100Grad0Opsz48 from '../components/FastfoodFill0Wght100Grad0Opsz48'
import IconFastfoodFill0Wght200Grad0Opsz48 from '../components/FastfoodFill0Wght200Grad0Opsz48'
import IconFastfoodFill0Wght300Grad0Opsz48 from '../components/FastfoodFill0Wght300Grad0Opsz48'
import IconFastfoodFill0Wght400Grad0Opsz48 from '../components/FastfoodFill0Wght400Grad0Opsz48'
import IconFastfoodFill0Wght500Grad0Opsz48 from '../components/FastfoodFill0Wght500Grad0Opsz48'
import IconFastfoodFill0Wght600Grad0Opsz48 from '../components/FastfoodFill0Wght600Grad0Opsz48'
import IconFastfoodFill0Wght700Grad0Opsz48 from '../components/FastfoodFill0Wght700Grad0Opsz48'
import IconFastfoodFill1Wght100Grad0Opsz48 from '../components/FastfoodFill1Wght100Grad0Opsz48'
import IconFastfoodFill1Wght200Grad0Opsz48 from '../components/FastfoodFill1Wght200Grad0Opsz48'
import IconFastfoodFill1Wght300Grad0Opsz48 from '../components/FastfoodFill1Wght300Grad0Opsz48'
import IconFastfoodFill1Wght400Grad0Opsz48 from '../components/FastfoodFill1Wght400Grad0Opsz48'
import IconFastfoodFill1Wght500Grad0Opsz48 from '../components/FastfoodFill1Wght500Grad0Opsz48'
import IconFastfoodFill1Wght600Grad0Opsz48 from '../components/FastfoodFill1Wght600Grad0Opsz48'
import IconFastfoodFill1Wght700Grad0Opsz48 from '../components/FastfoodFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFastfood = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFastfoodFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFastfoodFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFastfoodFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFastfoodFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFastfoodFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFastfoodFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFastfoodFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFastfoodFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFastfoodFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFastfoodFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFastfoodFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFastfoodFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFastfoodFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFastfoodFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
