import IconMobiledataOffFill0Wght100Grad0Opsz48 from '../components/MobiledataOffFill0Wght100Grad0Opsz48'
import IconMobiledataOffFill0Wght200Grad0Opsz48 from '../components/MobiledataOffFill0Wght200Grad0Opsz48'
import IconMobiledataOffFill0Wght300Grad0Opsz48 from '../components/MobiledataOffFill0Wght300Grad0Opsz48'
import IconMobiledataOffFill0Wght400Grad0Opsz48 from '../components/MobiledataOffFill0Wght400Grad0Opsz48'
import IconMobiledataOffFill0Wght500Grad0Opsz48 from '../components/MobiledataOffFill0Wght500Grad0Opsz48'
import IconMobiledataOffFill0Wght600Grad0Opsz48 from '../components/MobiledataOffFill0Wght600Grad0Opsz48'
import IconMobiledataOffFill0Wght700Grad0Opsz48 from '../components/MobiledataOffFill0Wght700Grad0Opsz48'
import IconMobiledataOffFill1Wght100Grad0Opsz48 from '../components/MobiledataOffFill1Wght100Grad0Opsz48'
import IconMobiledataOffFill1Wght200Grad0Opsz48 from '../components/MobiledataOffFill1Wght200Grad0Opsz48'
import IconMobiledataOffFill1Wght300Grad0Opsz48 from '../components/MobiledataOffFill1Wght300Grad0Opsz48'
import IconMobiledataOffFill1Wght400Grad0Opsz48 from '../components/MobiledataOffFill1Wght400Grad0Opsz48'
import IconMobiledataOffFill1Wght500Grad0Opsz48 from '../components/MobiledataOffFill1Wght500Grad0Opsz48'
import IconMobiledataOffFill1Wght600Grad0Opsz48 from '../components/MobiledataOffFill1Wght600Grad0Opsz48'
import IconMobiledataOffFill1Wght700Grad0Opsz48 from '../components/MobiledataOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMobiledataOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMobiledataOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMobiledataOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMobiledataOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMobiledataOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMobiledataOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMobiledataOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMobiledataOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMobiledataOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMobiledataOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMobiledataOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMobiledataOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMobiledataOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMobiledataOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMobiledataOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
