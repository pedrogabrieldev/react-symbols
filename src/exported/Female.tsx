import IconFemaleFill0Wght100Grad0Opsz48 from '../components/FemaleFill0Wght100Grad0Opsz48'
import IconFemaleFill0Wght200Grad0Opsz48 from '../components/FemaleFill0Wght200Grad0Opsz48'
import IconFemaleFill0Wght300Grad0Opsz48 from '../components/FemaleFill0Wght300Grad0Opsz48'
import IconFemaleFill0Wght400Grad0Opsz48 from '../components/FemaleFill0Wght400Grad0Opsz48'
import IconFemaleFill0Wght500Grad0Opsz48 from '../components/FemaleFill0Wght500Grad0Opsz48'
import IconFemaleFill0Wght600Grad0Opsz48 from '../components/FemaleFill0Wght600Grad0Opsz48'
import IconFemaleFill0Wght700Grad0Opsz48 from '../components/FemaleFill0Wght700Grad0Opsz48'
import IconFemaleFill1Wght100Grad0Opsz48 from '../components/FemaleFill1Wght100Grad0Opsz48'
import IconFemaleFill1Wght200Grad0Opsz48 from '../components/FemaleFill1Wght200Grad0Opsz48'
import IconFemaleFill1Wght300Grad0Opsz48 from '../components/FemaleFill1Wght300Grad0Opsz48'
import IconFemaleFill1Wght400Grad0Opsz48 from '../components/FemaleFill1Wght400Grad0Opsz48'
import IconFemaleFill1Wght500Grad0Opsz48 from '../components/FemaleFill1Wght500Grad0Opsz48'
import IconFemaleFill1Wght600Grad0Opsz48 from '../components/FemaleFill1Wght600Grad0Opsz48'
import IconFemaleFill1Wght700Grad0Opsz48 from '../components/FemaleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFemale = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFemaleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFemaleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFemaleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFemaleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFemaleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFemaleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFemaleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFemaleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFemaleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFemaleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFemaleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFemaleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFemaleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFemaleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
