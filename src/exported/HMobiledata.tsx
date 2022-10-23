import IconHMobiledataFill0Wght100Grad0Opsz48 from '../components/HMobiledataFill0Wght100Grad0Opsz48'
import IconHMobiledataFill0Wght200Grad0Opsz48 from '../components/HMobiledataFill0Wght200Grad0Opsz48'
import IconHMobiledataFill0Wght300Grad0Opsz48 from '../components/HMobiledataFill0Wght300Grad0Opsz48'
import IconHMobiledataFill0Wght400Grad0Opsz48 from '../components/HMobiledataFill0Wght400Grad0Opsz48'
import IconHMobiledataFill0Wght500Grad0Opsz48 from '../components/HMobiledataFill0Wght500Grad0Opsz48'
import IconHMobiledataFill0Wght600Grad0Opsz48 from '../components/HMobiledataFill0Wght600Grad0Opsz48'
import IconHMobiledataFill0Wght700Grad0Opsz48 from '../components/HMobiledataFill0Wght700Grad0Opsz48'
import IconHMobiledataFill1Wght100Grad0Opsz48 from '../components/HMobiledataFill1Wght100Grad0Opsz48'
import IconHMobiledataFill1Wght200Grad0Opsz48 from '../components/HMobiledataFill1Wght200Grad0Opsz48'
import IconHMobiledataFill1Wght300Grad0Opsz48 from '../components/HMobiledataFill1Wght300Grad0Opsz48'
import IconHMobiledataFill1Wght400Grad0Opsz48 from '../components/HMobiledataFill1Wght400Grad0Opsz48'
import IconHMobiledataFill1Wght500Grad0Opsz48 from '../components/HMobiledataFill1Wght500Grad0Opsz48'
import IconHMobiledataFill1Wght600Grad0Opsz48 from '../components/HMobiledataFill1Wght600Grad0Opsz48'
import IconHMobiledataFill1Wght700Grad0Opsz48 from '../components/HMobiledataFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHMobiledata = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHMobiledataFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHMobiledataFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHMobiledataFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHMobiledataFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHMobiledataFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHMobiledataFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHMobiledataFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHMobiledataFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHMobiledataFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHMobiledataFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHMobiledataFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHMobiledataFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHMobiledataFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHMobiledataFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
