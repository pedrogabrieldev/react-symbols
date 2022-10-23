import IconBookFill0Wght100Grad0Opsz48 from '../components/BookFill0Wght100Grad0Opsz48'
import IconBookFill0Wght200Grad0Opsz48 from '../components/BookFill0Wght200Grad0Opsz48'
import IconBookFill0Wght300Grad0Opsz48 from '../components/BookFill0Wght300Grad0Opsz48'
import IconBookFill0Wght400Grad0Opsz48 from '../components/BookFill0Wght400Grad0Opsz48'
import IconBookFill0Wght500Grad0Opsz48 from '../components/BookFill0Wght500Grad0Opsz48'
import IconBookFill0Wght600Grad0Opsz48 from '../components/BookFill0Wght600Grad0Opsz48'
import IconBookFill0Wght700Grad0Opsz48 from '../components/BookFill0Wght700Grad0Opsz48'
import IconBookFill1Wght100Grad0Opsz48 from '../components/BookFill1Wght100Grad0Opsz48'
import IconBookFill1Wght200Grad0Opsz48 from '../components/BookFill1Wght200Grad0Opsz48'
import IconBookFill1Wght300Grad0Opsz48 from '../components/BookFill1Wght300Grad0Opsz48'
import IconBookFill1Wght400Grad0Opsz48 from '../components/BookFill1Wght400Grad0Opsz48'
import IconBookFill1Wght500Grad0Opsz48 from '../components/BookFill1Wght500Grad0Opsz48'
import IconBookFill1Wght600Grad0Opsz48 from '../components/BookFill1Wght600Grad0Opsz48'
import IconBookFill1Wght700Grad0Opsz48 from '../components/BookFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBook = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBookFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBookFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBookFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBookFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBookFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBookFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBookFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBookFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBookFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBookFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBookFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBookFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBookFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBookFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
