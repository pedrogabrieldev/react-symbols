import IconGirlFill0Wght100Grad0Opsz48 from '../components/GirlFill0Wght100Grad0Opsz48'
import IconGirlFill0Wght200Grad0Opsz48 from '../components/GirlFill0Wght200Grad0Opsz48'
import IconGirlFill0Wght300Grad0Opsz48 from '../components/GirlFill0Wght300Grad0Opsz48'
import IconGirlFill0Wght400Grad0Opsz48 from '../components/GirlFill0Wght400Grad0Opsz48'
import IconGirlFill0Wght500Grad0Opsz48 from '../components/GirlFill0Wght500Grad0Opsz48'
import IconGirlFill0Wght600Grad0Opsz48 from '../components/GirlFill0Wght600Grad0Opsz48'
import IconGirlFill0Wght700Grad0Opsz48 from '../components/GirlFill0Wght700Grad0Opsz48'
import IconGirlFill1Wght100Grad0Opsz48 from '../components/GirlFill1Wght100Grad0Opsz48'
import IconGirlFill1Wght200Grad0Opsz48 from '../components/GirlFill1Wght200Grad0Opsz48'
import IconGirlFill1Wght300Grad0Opsz48 from '../components/GirlFill1Wght300Grad0Opsz48'
import IconGirlFill1Wght400Grad0Opsz48 from '../components/GirlFill1Wght400Grad0Opsz48'
import IconGirlFill1Wght500Grad0Opsz48 from '../components/GirlFill1Wght500Grad0Opsz48'
import IconGirlFill1Wght600Grad0Opsz48 from '../components/GirlFill1Wght600Grad0Opsz48'
import IconGirlFill1Wght700Grad0Opsz48 from '../components/GirlFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGirl = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGirlFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGirlFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGirlFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGirlFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGirlFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGirlFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGirlFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGirlFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGirlFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGirlFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGirlFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGirlFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGirlFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGirlFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
