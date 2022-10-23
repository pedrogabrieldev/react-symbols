import IconNatureFill0Wght100Grad0Opsz48 from '../components/NatureFill0Wght100Grad0Opsz48'
import IconNatureFill0Wght200Grad0Opsz48 from '../components/NatureFill0Wght200Grad0Opsz48'
import IconNatureFill0Wght300Grad0Opsz48 from '../components/NatureFill0Wght300Grad0Opsz48'
import IconNatureFill0Wght400Grad0Opsz48 from '../components/NatureFill0Wght400Grad0Opsz48'
import IconNatureFill0Wght500Grad0Opsz48 from '../components/NatureFill0Wght500Grad0Opsz48'
import IconNatureFill0Wght600Grad0Opsz48 from '../components/NatureFill0Wght600Grad0Opsz48'
import IconNatureFill0Wght700Grad0Opsz48 from '../components/NatureFill0Wght700Grad0Opsz48'
import IconNatureFill1Wght100Grad0Opsz48 from '../components/NatureFill1Wght100Grad0Opsz48'
import IconNatureFill1Wght200Grad0Opsz48 from '../components/NatureFill1Wght200Grad0Opsz48'
import IconNatureFill1Wght300Grad0Opsz48 from '../components/NatureFill1Wght300Grad0Opsz48'
import IconNatureFill1Wght400Grad0Opsz48 from '../components/NatureFill1Wght400Grad0Opsz48'
import IconNatureFill1Wght500Grad0Opsz48 from '../components/NatureFill1Wght500Grad0Opsz48'
import IconNatureFill1Wght600Grad0Opsz48 from '../components/NatureFill1Wght600Grad0Opsz48'
import IconNatureFill1Wght700Grad0Opsz48 from '../components/NatureFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNature = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNatureFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNatureFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNatureFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNatureFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNatureFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNatureFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNatureFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNatureFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNatureFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNatureFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNatureFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNatureFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNatureFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNatureFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
