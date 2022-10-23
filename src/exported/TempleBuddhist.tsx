import IconTempleBuddhistFill0Wght100Grad0Opsz48 from '../components/TempleBuddhistFill0Wght100Grad0Opsz48'
import IconTempleBuddhistFill0Wght200Grad0Opsz48 from '../components/TempleBuddhistFill0Wght200Grad0Opsz48'
import IconTempleBuddhistFill0Wght300Grad0Opsz48 from '../components/TempleBuddhistFill0Wght300Grad0Opsz48'
import IconTempleBuddhistFill0Wght400Grad0Opsz48 from '../components/TempleBuddhistFill0Wght400Grad0Opsz48'
import IconTempleBuddhistFill0Wght500Grad0Opsz48 from '../components/TempleBuddhistFill0Wght500Grad0Opsz48'
import IconTempleBuddhistFill0Wght600Grad0Opsz48 from '../components/TempleBuddhistFill0Wght600Grad0Opsz48'
import IconTempleBuddhistFill0Wght700Grad0Opsz48 from '../components/TempleBuddhistFill0Wght700Grad0Opsz48'
import IconTempleBuddhistFill1Wght100Grad0Opsz48 from '../components/TempleBuddhistFill1Wght100Grad0Opsz48'
import IconTempleBuddhistFill1Wght200Grad0Opsz48 from '../components/TempleBuddhistFill1Wght200Grad0Opsz48'
import IconTempleBuddhistFill1Wght300Grad0Opsz48 from '../components/TempleBuddhistFill1Wght300Grad0Opsz48'
import IconTempleBuddhistFill1Wght400Grad0Opsz48 from '../components/TempleBuddhistFill1Wght400Grad0Opsz48'
import IconTempleBuddhistFill1Wght500Grad0Opsz48 from '../components/TempleBuddhistFill1Wght500Grad0Opsz48'
import IconTempleBuddhistFill1Wght600Grad0Opsz48 from '../components/TempleBuddhistFill1Wght600Grad0Opsz48'
import IconTempleBuddhistFill1Wght700Grad0Opsz48 from '../components/TempleBuddhistFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTempleBuddhist = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTempleBuddhistFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTempleBuddhistFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTempleBuddhistFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTempleBuddhistFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTempleBuddhistFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTempleBuddhistFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTempleBuddhistFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTempleBuddhistFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTempleBuddhistFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTempleBuddhistFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTempleBuddhistFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTempleBuddhistFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTempleBuddhistFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTempleBuddhistFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
