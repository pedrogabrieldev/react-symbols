import IconBookOnlineFill0Wght100Grad0Opsz48 from '../components/BookOnlineFill0Wght100Grad0Opsz48'
import IconBookOnlineFill0Wght200Grad0Opsz48 from '../components/BookOnlineFill0Wght200Grad0Opsz48'
import IconBookOnlineFill0Wght300Grad0Opsz48 from '../components/BookOnlineFill0Wght300Grad0Opsz48'
import IconBookOnlineFill0Wght400Grad0Opsz48 from '../components/BookOnlineFill0Wght400Grad0Opsz48'
import IconBookOnlineFill0Wght500Grad0Opsz48 from '../components/BookOnlineFill0Wght500Grad0Opsz48'
import IconBookOnlineFill0Wght600Grad0Opsz48 from '../components/BookOnlineFill0Wght600Grad0Opsz48'
import IconBookOnlineFill0Wght700Grad0Opsz48 from '../components/BookOnlineFill0Wght700Grad0Opsz48'
import IconBookOnlineFill1Wght100Grad0Opsz48 from '../components/BookOnlineFill1Wght100Grad0Opsz48'
import IconBookOnlineFill1Wght200Grad0Opsz48 from '../components/BookOnlineFill1Wght200Grad0Opsz48'
import IconBookOnlineFill1Wght300Grad0Opsz48 from '../components/BookOnlineFill1Wght300Grad0Opsz48'
import IconBookOnlineFill1Wght400Grad0Opsz48 from '../components/BookOnlineFill1Wght400Grad0Opsz48'
import IconBookOnlineFill1Wght500Grad0Opsz48 from '../components/BookOnlineFill1Wght500Grad0Opsz48'
import IconBookOnlineFill1Wght600Grad0Opsz48 from '../components/BookOnlineFill1Wght600Grad0Opsz48'
import IconBookOnlineFill1Wght700Grad0Opsz48 from '../components/BookOnlineFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBookOnline = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBookOnlineFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBookOnlineFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBookOnlineFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBookOnlineFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBookOnlineFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBookOnlineFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBookOnlineFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBookOnlineFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBookOnlineFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBookOnlineFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBookOnlineFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBookOnlineFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBookOnlineFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBookOnlineFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
