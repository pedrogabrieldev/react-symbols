import IconPersonFilledFill0Wght100Grad0Opsz48 from '../components/PersonFilledFill0Wght100Grad0Opsz48'
import IconPersonFilledFill0Wght200Grad0Opsz48 from '../components/PersonFilledFill0Wght200Grad0Opsz48'
import IconPersonFilledFill0Wght300Grad0Opsz48 from '../components/PersonFilledFill0Wght300Grad0Opsz48'
import IconPersonFilledFill0Wght400Grad0Opsz48 from '../components/PersonFilledFill0Wght400Grad0Opsz48'
import IconPersonFilledFill0Wght500Grad0Opsz48 from '../components/PersonFilledFill0Wght500Grad0Opsz48'
import IconPersonFilledFill0Wght600Grad0Opsz48 from '../components/PersonFilledFill0Wght600Grad0Opsz48'
import IconPersonFilledFill0Wght700Grad0Opsz48 from '../components/PersonFilledFill0Wght700Grad0Opsz48'
import IconPersonFilledFill1Wght100Grad0Opsz48 from '../components/PersonFilledFill1Wght100Grad0Opsz48'
import IconPersonFilledFill1Wght200Grad0Opsz48 from '../components/PersonFilledFill1Wght200Grad0Opsz48'
import IconPersonFilledFill1Wght300Grad0Opsz48 from '../components/PersonFilledFill1Wght300Grad0Opsz48'
import IconPersonFilledFill1Wght400Grad0Opsz48 from '../components/PersonFilledFill1Wght400Grad0Opsz48'
import IconPersonFilledFill1Wght500Grad0Opsz48 from '../components/PersonFilledFill1Wght500Grad0Opsz48'
import IconPersonFilledFill1Wght600Grad0Opsz48 from '../components/PersonFilledFill1Wght600Grad0Opsz48'
import IconPersonFilledFill1Wght700Grad0Opsz48 from '../components/PersonFilledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPersonFilled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPersonFilledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPersonFilledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPersonFilledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPersonFilledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPersonFilledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPersonFilledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPersonFilledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPersonFilledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPersonFilledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPersonFilledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPersonFilledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPersonFilledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPersonFilledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPersonFilledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
