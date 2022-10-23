import IconContactMailFill0Wght100Grad0Opsz48 from '../components/ContactMailFill0Wght100Grad0Opsz48'
import IconContactMailFill0Wght200Grad0Opsz48 from '../components/ContactMailFill0Wght200Grad0Opsz48'
import IconContactMailFill0Wght300Grad0Opsz48 from '../components/ContactMailFill0Wght300Grad0Opsz48'
import IconContactMailFill0Wght400Grad0Opsz48 from '../components/ContactMailFill0Wght400Grad0Opsz48'
import IconContactMailFill0Wght500Grad0Opsz48 from '../components/ContactMailFill0Wght500Grad0Opsz48'
import IconContactMailFill0Wght600Grad0Opsz48 from '../components/ContactMailFill0Wght600Grad0Opsz48'
import IconContactMailFill0Wght700Grad0Opsz48 from '../components/ContactMailFill0Wght700Grad0Opsz48'
import IconContactMailFill1Wght100Grad0Opsz48 from '../components/ContactMailFill1Wght100Grad0Opsz48'
import IconContactMailFill1Wght200Grad0Opsz48 from '../components/ContactMailFill1Wght200Grad0Opsz48'
import IconContactMailFill1Wght300Grad0Opsz48 from '../components/ContactMailFill1Wght300Grad0Opsz48'
import IconContactMailFill1Wght400Grad0Opsz48 from '../components/ContactMailFill1Wght400Grad0Opsz48'
import IconContactMailFill1Wght500Grad0Opsz48 from '../components/ContactMailFill1Wght500Grad0Opsz48'
import IconContactMailFill1Wght600Grad0Opsz48 from '../components/ContactMailFill1Wght600Grad0Opsz48'
import IconContactMailFill1Wght700Grad0Opsz48 from '../components/ContactMailFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconContactMail = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconContactMailFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconContactMailFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconContactMailFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconContactMailFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconContactMailFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconContactMailFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconContactMailFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconContactMailFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconContactMailFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconContactMailFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconContactMailFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconContactMailFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconContactMailFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconContactMailFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
