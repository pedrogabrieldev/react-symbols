import IconFireHydrantFill0Wght100Grad0Opsz48 from '../components/FireHydrantFill0Wght100Grad0Opsz48'
import IconFireHydrantFill0Wght200Grad0Opsz48 from '../components/FireHydrantFill0Wght200Grad0Opsz48'
import IconFireHydrantFill0Wght300Grad0Opsz48 from '../components/FireHydrantFill0Wght300Grad0Opsz48'
import IconFireHydrantFill0Wght400Grad0Opsz48 from '../components/FireHydrantFill0Wght400Grad0Opsz48'
import IconFireHydrantFill0Wght500Grad0Opsz48 from '../components/FireHydrantFill0Wght500Grad0Opsz48'
import IconFireHydrantFill0Wght600Grad0Opsz48 from '../components/FireHydrantFill0Wght600Grad0Opsz48'
import IconFireHydrantFill0Wght700Grad0Opsz48 from '../components/FireHydrantFill0Wght700Grad0Opsz48'
import IconFireHydrantFill1Wght100Grad0Opsz48 from '../components/FireHydrantFill1Wght100Grad0Opsz48'
import IconFireHydrantFill1Wght200Grad0Opsz48 from '../components/FireHydrantFill1Wght200Grad0Opsz48'
import IconFireHydrantFill1Wght300Grad0Opsz48 from '../components/FireHydrantFill1Wght300Grad0Opsz48'
import IconFireHydrantFill1Wght400Grad0Opsz48 from '../components/FireHydrantFill1Wght400Grad0Opsz48'
import IconFireHydrantFill1Wght500Grad0Opsz48 from '../components/FireHydrantFill1Wght500Grad0Opsz48'
import IconFireHydrantFill1Wght600Grad0Opsz48 from '../components/FireHydrantFill1Wght600Grad0Opsz48'
import IconFireHydrantFill1Wght700Grad0Opsz48 from '../components/FireHydrantFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFireHydrant = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFireHydrantFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFireHydrantFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFireHydrantFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFireHydrantFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFireHydrantFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFireHydrantFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFireHydrantFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFireHydrantFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFireHydrantFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFireHydrantFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFireHydrantFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFireHydrantFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFireHydrantFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFireHydrantFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
