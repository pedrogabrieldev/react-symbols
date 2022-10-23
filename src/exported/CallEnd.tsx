import IconCallEndFill0Wght100Grad0Opsz48 from '../components/CallEndFill0Wght100Grad0Opsz48'
import IconCallEndFill0Wght200Grad0Opsz48 from '../components/CallEndFill0Wght200Grad0Opsz48'
import IconCallEndFill0Wght300Grad0Opsz48 from '../components/CallEndFill0Wght300Grad0Opsz48'
import IconCallEndFill0Wght400Grad0Opsz48 from '../components/CallEndFill0Wght400Grad0Opsz48'
import IconCallEndFill0Wght500Grad0Opsz48 from '../components/CallEndFill0Wght500Grad0Opsz48'
import IconCallEndFill0Wght600Grad0Opsz48 from '../components/CallEndFill0Wght600Grad0Opsz48'
import IconCallEndFill0Wght700Grad0Opsz48 from '../components/CallEndFill0Wght700Grad0Opsz48'
import IconCallEndFill1Wght100Grad0Opsz48 from '../components/CallEndFill1Wght100Grad0Opsz48'
import IconCallEndFill1Wght200Grad0Opsz48 from '../components/CallEndFill1Wght200Grad0Opsz48'
import IconCallEndFill1Wght300Grad0Opsz48 from '../components/CallEndFill1Wght300Grad0Opsz48'
import IconCallEndFill1Wght400Grad0Opsz48 from '../components/CallEndFill1Wght400Grad0Opsz48'
import IconCallEndFill1Wght500Grad0Opsz48 from '../components/CallEndFill1Wght500Grad0Opsz48'
import IconCallEndFill1Wght600Grad0Opsz48 from '../components/CallEndFill1Wght600Grad0Opsz48'
import IconCallEndFill1Wght700Grad0Opsz48 from '../components/CallEndFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCallEnd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCallEndFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCallEndFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCallEndFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCallEndFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCallEndFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCallEndFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCallEndFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCallEndFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCallEndFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCallEndFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCallEndFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCallEndFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCallEndFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCallEndFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
