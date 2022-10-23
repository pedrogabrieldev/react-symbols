import IconBreastfeedingFill0Wght100Grad0Opsz48 from '../components/BreastfeedingFill0Wght100Grad0Opsz48'
import IconBreastfeedingFill0Wght200Grad0Opsz48 from '../components/BreastfeedingFill0Wght200Grad0Opsz48'
import IconBreastfeedingFill0Wght300Grad0Opsz48 from '../components/BreastfeedingFill0Wght300Grad0Opsz48'
import IconBreastfeedingFill0Wght400Grad0Opsz48 from '../components/BreastfeedingFill0Wght400Grad0Opsz48'
import IconBreastfeedingFill0Wght500Grad0Opsz48 from '../components/BreastfeedingFill0Wght500Grad0Opsz48'
import IconBreastfeedingFill0Wght600Grad0Opsz48 from '../components/BreastfeedingFill0Wght600Grad0Opsz48'
import IconBreastfeedingFill0Wght700Grad0Opsz48 from '../components/BreastfeedingFill0Wght700Grad0Opsz48'
import IconBreastfeedingFill1Wght100Grad0Opsz48 from '../components/BreastfeedingFill1Wght100Grad0Opsz48'
import IconBreastfeedingFill1Wght200Grad0Opsz48 from '../components/BreastfeedingFill1Wght200Grad0Opsz48'
import IconBreastfeedingFill1Wght300Grad0Opsz48 from '../components/BreastfeedingFill1Wght300Grad0Opsz48'
import IconBreastfeedingFill1Wght400Grad0Opsz48 from '../components/BreastfeedingFill1Wght400Grad0Opsz48'
import IconBreastfeedingFill1Wght500Grad0Opsz48 from '../components/BreastfeedingFill1Wght500Grad0Opsz48'
import IconBreastfeedingFill1Wght600Grad0Opsz48 from '../components/BreastfeedingFill1Wght600Grad0Opsz48'
import IconBreastfeedingFill1Wght700Grad0Opsz48 from '../components/BreastfeedingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBreastfeeding = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBreastfeedingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBreastfeedingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBreastfeedingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBreastfeedingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBreastfeedingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBreastfeedingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBreastfeedingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBreastfeedingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBreastfeedingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBreastfeedingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBreastfeedingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBreastfeedingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBreastfeedingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBreastfeedingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
