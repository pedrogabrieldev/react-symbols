import IconContactPhoneFill0Wght100Grad0Opsz48 from '../components/ContactPhoneFill0Wght100Grad0Opsz48'
import IconContactPhoneFill0Wght200Grad0Opsz48 from '../components/ContactPhoneFill0Wght200Grad0Opsz48'
import IconContactPhoneFill0Wght300Grad0Opsz48 from '../components/ContactPhoneFill0Wght300Grad0Opsz48'
import IconContactPhoneFill0Wght400Grad0Opsz48 from '../components/ContactPhoneFill0Wght400Grad0Opsz48'
import IconContactPhoneFill0Wght500Grad0Opsz48 from '../components/ContactPhoneFill0Wght500Grad0Opsz48'
import IconContactPhoneFill0Wght600Grad0Opsz48 from '../components/ContactPhoneFill0Wght600Grad0Opsz48'
import IconContactPhoneFill0Wght700Grad0Opsz48 from '../components/ContactPhoneFill0Wght700Grad0Opsz48'
import IconContactPhoneFill1Wght100Grad0Opsz48 from '../components/ContactPhoneFill1Wght100Grad0Opsz48'
import IconContactPhoneFill1Wght200Grad0Opsz48 from '../components/ContactPhoneFill1Wght200Grad0Opsz48'
import IconContactPhoneFill1Wght300Grad0Opsz48 from '../components/ContactPhoneFill1Wght300Grad0Opsz48'
import IconContactPhoneFill1Wght400Grad0Opsz48 from '../components/ContactPhoneFill1Wght400Grad0Opsz48'
import IconContactPhoneFill1Wght500Grad0Opsz48 from '../components/ContactPhoneFill1Wght500Grad0Opsz48'
import IconContactPhoneFill1Wght600Grad0Opsz48 from '../components/ContactPhoneFill1Wght600Grad0Opsz48'
import IconContactPhoneFill1Wght700Grad0Opsz48 from '../components/ContactPhoneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconContactPhone = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconContactPhoneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconContactPhoneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconContactPhoneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconContactPhoneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconContactPhoneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconContactPhoneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconContactPhoneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconContactPhoneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconContactPhoneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconContactPhoneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconContactPhoneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconContactPhoneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconContactPhoneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconContactPhoneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
