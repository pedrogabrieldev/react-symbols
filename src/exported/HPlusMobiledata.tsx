import IconHPlusMobiledataFill0Wght100Grad0Opsz48 from '../components/HPlusMobiledataFill0Wght100Grad0Opsz48'
import IconHPlusMobiledataFill0Wght200Grad0Opsz48 from '../components/HPlusMobiledataFill0Wght200Grad0Opsz48'
import IconHPlusMobiledataFill0Wght300Grad0Opsz48 from '../components/HPlusMobiledataFill0Wght300Grad0Opsz48'
import IconHPlusMobiledataFill0Wght400Grad0Opsz48 from '../components/HPlusMobiledataFill0Wght400Grad0Opsz48'
import IconHPlusMobiledataFill0Wght500Grad0Opsz48 from '../components/HPlusMobiledataFill0Wght500Grad0Opsz48'
import IconHPlusMobiledataFill0Wght600Grad0Opsz48 from '../components/HPlusMobiledataFill0Wght600Grad0Opsz48'
import IconHPlusMobiledataFill0Wght700Grad0Opsz48 from '../components/HPlusMobiledataFill0Wght700Grad0Opsz48'
import IconHPlusMobiledataFill1Wght100Grad0Opsz48 from '../components/HPlusMobiledataFill1Wght100Grad0Opsz48'
import IconHPlusMobiledataFill1Wght200Grad0Opsz48 from '../components/HPlusMobiledataFill1Wght200Grad0Opsz48'
import IconHPlusMobiledataFill1Wght300Grad0Opsz48 from '../components/HPlusMobiledataFill1Wght300Grad0Opsz48'
import IconHPlusMobiledataFill1Wght400Grad0Opsz48 from '../components/HPlusMobiledataFill1Wght400Grad0Opsz48'
import IconHPlusMobiledataFill1Wght500Grad0Opsz48 from '../components/HPlusMobiledataFill1Wght500Grad0Opsz48'
import IconHPlusMobiledataFill1Wght600Grad0Opsz48 from '../components/HPlusMobiledataFill1Wght600Grad0Opsz48'
import IconHPlusMobiledataFill1Wght700Grad0Opsz48 from '../components/HPlusMobiledataFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHPlusMobiledata = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHPlusMobiledataFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHPlusMobiledataFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHPlusMobiledataFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHPlusMobiledataFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHPlusMobiledataFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHPlusMobiledataFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHPlusMobiledataFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHPlusMobiledataFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHPlusMobiledataFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHPlusMobiledataFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHPlusMobiledataFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHPlusMobiledataFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHPlusMobiledataFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHPlusMobiledataFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
