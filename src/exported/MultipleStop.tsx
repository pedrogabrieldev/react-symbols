import IconMultipleStopFill0Wght100Grad0Opsz48 from '../components/MultipleStopFill0Wght100Grad0Opsz48'
import IconMultipleStopFill0Wght200Grad0Opsz48 from '../components/MultipleStopFill0Wght200Grad0Opsz48'
import IconMultipleStopFill0Wght300Grad0Opsz48 from '../components/MultipleStopFill0Wght300Grad0Opsz48'
import IconMultipleStopFill0Wght400Grad0Opsz48 from '../components/MultipleStopFill0Wght400Grad0Opsz48'
import IconMultipleStopFill0Wght500Grad0Opsz48 from '../components/MultipleStopFill0Wght500Grad0Opsz48'
import IconMultipleStopFill0Wght600Grad0Opsz48 from '../components/MultipleStopFill0Wght600Grad0Opsz48'
import IconMultipleStopFill0Wght700Grad0Opsz48 from '../components/MultipleStopFill0Wght700Grad0Opsz48'
import IconMultipleStopFill1Wght100Grad0Opsz48 from '../components/MultipleStopFill1Wght100Grad0Opsz48'
import IconMultipleStopFill1Wght200Grad0Opsz48 from '../components/MultipleStopFill1Wght200Grad0Opsz48'
import IconMultipleStopFill1Wght300Grad0Opsz48 from '../components/MultipleStopFill1Wght300Grad0Opsz48'
import IconMultipleStopFill1Wght400Grad0Opsz48 from '../components/MultipleStopFill1Wght400Grad0Opsz48'
import IconMultipleStopFill1Wght500Grad0Opsz48 from '../components/MultipleStopFill1Wght500Grad0Opsz48'
import IconMultipleStopFill1Wght600Grad0Opsz48 from '../components/MultipleStopFill1Wght600Grad0Opsz48'
import IconMultipleStopFill1Wght700Grad0Opsz48 from '../components/MultipleStopFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMultipleStop = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMultipleStopFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMultipleStopFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMultipleStopFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMultipleStopFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMultipleStopFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMultipleStopFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMultipleStopFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMultipleStopFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMultipleStopFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMultipleStopFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMultipleStopFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMultipleStopFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMultipleStopFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMultipleStopFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
