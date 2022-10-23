import IconHumerusAltFill0Wght100Grad0Opsz48 from '../components/HumerusAltFill0Wght100Grad0Opsz48'
import IconHumerusAltFill0Wght200Grad0Opsz48 from '../components/HumerusAltFill0Wght200Grad0Opsz48'
import IconHumerusAltFill0Wght300Grad0Opsz48 from '../components/HumerusAltFill0Wght300Grad0Opsz48'
import IconHumerusAltFill0Wght400Grad0Opsz48 from '../components/HumerusAltFill0Wght400Grad0Opsz48'
import IconHumerusAltFill0Wght500Grad0Opsz48 from '../components/HumerusAltFill0Wght500Grad0Opsz48'
import IconHumerusAltFill0Wght600Grad0Opsz48 from '../components/HumerusAltFill0Wght600Grad0Opsz48'
import IconHumerusAltFill0Wght700Grad0Opsz48 from '../components/HumerusAltFill0Wght700Grad0Opsz48'
import IconHumerusAltFill1Wght100Grad0Opsz48 from '../components/HumerusAltFill1Wght100Grad0Opsz48'
import IconHumerusAltFill1Wght200Grad0Opsz48 from '../components/HumerusAltFill1Wght200Grad0Opsz48'
import IconHumerusAltFill1Wght300Grad0Opsz48 from '../components/HumerusAltFill1Wght300Grad0Opsz48'
import IconHumerusAltFill1Wght400Grad0Opsz48 from '../components/HumerusAltFill1Wght400Grad0Opsz48'
import IconHumerusAltFill1Wght500Grad0Opsz48 from '../components/HumerusAltFill1Wght500Grad0Opsz48'
import IconHumerusAltFill1Wght600Grad0Opsz48 from '../components/HumerusAltFill1Wght600Grad0Opsz48'
import IconHumerusAltFill1Wght700Grad0Opsz48 from '../components/HumerusAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHumerusAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHumerusAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHumerusAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHumerusAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHumerusAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHumerusAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHumerusAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHumerusAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHumerusAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHumerusAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHumerusAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHumerusAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHumerusAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHumerusAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHumerusAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
