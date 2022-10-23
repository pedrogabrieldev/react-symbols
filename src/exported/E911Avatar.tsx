import IconE911AvatarFill0Wght100Grad0Opsz48 from '../components/E911AvatarFill0Wght100Grad0Opsz48'
import IconE911AvatarFill0Wght200Grad0Opsz48 from '../components/E911AvatarFill0Wght200Grad0Opsz48'
import IconE911AvatarFill0Wght300Grad0Opsz48 from '../components/E911AvatarFill0Wght300Grad0Opsz48'
import IconE911AvatarFill0Wght400Grad0Opsz48 from '../components/E911AvatarFill0Wght400Grad0Opsz48'
import IconE911AvatarFill0Wght500Grad0Opsz48 from '../components/E911AvatarFill0Wght500Grad0Opsz48'
import IconE911AvatarFill0Wght600Grad0Opsz48 from '../components/E911AvatarFill0Wght600Grad0Opsz48'
import IconE911AvatarFill0Wght700Grad0Opsz48 from '../components/E911AvatarFill0Wght700Grad0Opsz48'
import IconE911AvatarFill1Wght100Grad0Opsz48 from '../components/E911AvatarFill1Wght100Grad0Opsz48'
import IconE911AvatarFill1Wght200Grad0Opsz48 from '../components/E911AvatarFill1Wght200Grad0Opsz48'
import IconE911AvatarFill1Wght300Grad0Opsz48 from '../components/E911AvatarFill1Wght300Grad0Opsz48'
import IconE911AvatarFill1Wght400Grad0Opsz48 from '../components/E911AvatarFill1Wght400Grad0Opsz48'
import IconE911AvatarFill1Wght500Grad0Opsz48 from '../components/E911AvatarFill1Wght500Grad0Opsz48'
import IconE911AvatarFill1Wght600Grad0Opsz48 from '../components/E911AvatarFill1Wght600Grad0Opsz48'
import IconE911AvatarFill1Wght700Grad0Opsz48 from '../components/E911AvatarFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconE911Avatar = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconE911AvatarFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconE911AvatarFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconE911AvatarFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconE911AvatarFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconE911AvatarFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconE911AvatarFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconE911AvatarFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconE911AvatarFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconE911AvatarFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconE911AvatarFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconE911AvatarFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconE911AvatarFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconE911AvatarFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconE911AvatarFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
